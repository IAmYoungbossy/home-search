import {
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { toast } from "react-toastify";

import {
  actionType,
  APP_ACTION_TYPES,
} from "../../utilities/types";
import { auth } from "../firebaseConfig";
import checkIfOldUser from "../firebaseCRUD/checkIfOldUser";
import createNewUserData from "../firebaseCRUD/createNewUserData";

// Google Auth
const googleProvider = new GoogleAuthProvider();

const googleSignIn = async () => {
  const response = await signInWithPopup(auth, googleProvider);
  const user = response.user;
  return { user };
};

const signInWithGoogle = async (
  dispatch: React.Dispatch<actionType>,
  handleSignInPageToggle: () => void
) => {
  try {
    const { user } = await googleSignIn();
    const { documents } = await checkIfOldUser(user, dispatch);
    createNewUserData(documents, user, "Google", dispatch);
    dispatch({ payload: user, type: APP_ACTION_TYPES.USER });
    handleSignInPageToggle();
  } catch (err) {
    toast.error("Something went wrong");
  }
};

export default signInWithGoogle;
