import {
  addNewUserData,
  checkIfOldUser,
  createNewUserData,
} from "./firebaseCRUD";
import {
  signOut,
  updateProfile,
  UserCredential,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebaseConfig";
import {
  actionType,
  APP_ACTION_TYPES,
} from "./utilities/types";

// Google Auth
const googleProvider = new GoogleAuthProvider();

const googleSignIn = async () => {
  const response = await signInWithPopup(
    auth,
    googleProvider
  );
  const user = response.user;
  return { user };
};

const signInWithGoogle = async (
  dispatch: React.Dispatch<actionType>
) => {
  try {
    const { user } = await googleSignIn();
    const { documents } = await checkIfOldUser(
      user,
      dispatch
    );
    createNewUserData(documents, user, "Google", dispatch);
    dispatch({
      payload: user,
      type: APP_ACTION_TYPES.USER,
    });
  } catch (err) {
    console.error(err);
    alert(err);
  }
};

// Facebook Auth
const facebookProvider = new FacebookAuthProvider();

const facebookSignIn = async () => {
  const response = await signInWithPopup(
    auth,
    facebookProvider
  );
  const user = response.user;
  return { user, response };
};

const getFacebookPhotoUrl = (response: UserCredential) => {
  const credential =
    FacebookAuthProvider.credentialFromResult(response);
  const token = credential?.accessToken;
  const photoUrl = `${response.user.photoURL}?height=500&access_token=${token}`;
  return { photoUrl };
};

type updatePropsObjType = {
  photoURL?: string;
  displayName?: string;
};

const updateUserCredentials = async (
  updatePropsObj: updatePropsObjType
) => {
  if (auth.currentUser) {
    await updateProfile(auth.currentUser, {
      ...updatePropsObj,
    });
  }
};

const signInWithFacebook = async (
  dispatch: React.Dispatch<actionType>
) => {
  try {
    const { user, response } = await facebookSignIn();
    const { documents } = await checkIfOldUser(
      user,
      dispatch
    );
    const { photoUrl } = getFacebookPhotoUrl(response);

    await updateUserCredentials({ photoURL: photoUrl });
    createNewUserData(
      documents,
      user,
      "Facebook",
      dispatch
    );
    dispatch({
      payload: user,
      type: APP_ACTION_TYPES.USER,
    });
  } catch (err) {
    console.error(err);
  }
};

// Email/Password creation
const createNewEmailAndPassword = async (
  email: string,
  password: string
) => {
  const response = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = response.user;
  return { user };
};

const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string,
  dispatch: React.Dispatch<actionType>
) => {
  try {
    const { user } = await createNewEmailAndPassword(
      email,
      password
    );
    await updateUserCredentials({
      photoURL: "photoUrl",
      displayName: name,
    });
    await addNewUserData(
      user,
      "Email/Password",
      dispatch,
      email,
      name
    );
    dispatch({
      payload: user,
      type: APP_ACTION_TYPES.USER,
    });
  } catch (err) {
    console.error(err);
  }
};

// Email/Password Auth
const logInWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  try {
    const result = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = result.user;
    console.log(user);
  } catch (err) {
    console.error(err);
  }
};

const sendPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
  }
};

// Logs out from all auth providers
const logout = () => {
  signOut(auth);
};

export {
  logout,
  signInWithGoogle,
  sendPasswordReset,
  signInWithFacebook,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
};
