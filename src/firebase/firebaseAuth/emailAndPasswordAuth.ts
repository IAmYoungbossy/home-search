import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  actionType,
  APP_ACTION_TYPES,
} from "../../utilities/types";

import { auth } from "../firebaseConfig";
import { updateUserCredentials } from "./facebookAuth";
import addNewUserData from "../firebaseCRUD/addNewData";

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

export const registerWithEmailAndPassword = async (
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

export const sendPasswordReset = async (email: string) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    alert(err);
  }
};

export default logInWithEmailAndPassword;
