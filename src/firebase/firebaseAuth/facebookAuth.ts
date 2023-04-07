import {
  actionType,
  APP_ACTION_TYPES,
} from "../../utilities/types";

import {
  updateProfile,
  UserCredential,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import checkIfOldUser from "../firebaseCRUD/checkIfOldUser";
import createNewUserData from "../firebaseCRUD/createNewUserData";

// Facebook Auth
const facebookProvider = new FacebookAuthProvider();

const facebookSignIn = async () => {
  const response = await signInWithPopup(auth, facebookProvider);
  const user = response.user;
  return { user, response };
};

const getFacebookPhotoUrl = (response: UserCredential) => {
  const avatarUrl = response.user.photoURL;
  const credential =
    FacebookAuthProvider.credentialFromResult(response);
  const token = credential?.accessToken;
  const photoUrl = `${avatarUrl}?height=500&access_token=${token}`;
  return { photoUrl };
};

type updatePropsObjType = {
  photoURL?: string;
  displayName?: string;
};

export const updateUserCredentials = async (
  updatePropsObj: updatePropsObjType
) => {
  if (auth.currentUser)
    await updateProfile(auth.currentUser, { ...updatePropsObj });
};

const signInWithFacebook = async (
  dispatch: React.Dispatch<actionType>
) => {
  try {
    const { user, response } = await facebookSignIn();
    const { documents } = await checkIfOldUser(user, dispatch);
    const { photoUrl } = getFacebookPhotoUrl(response);

    await updateUserCredentials({ photoURL: photoUrl });
    createNewUserData(documents, user, "Facebook", dispatch);
    dispatch({ payload: user, type: APP_ACTION_TYPES.USER });
  } catch (err) {
    alert(err);
  }
};

export default signInWithFacebook;
