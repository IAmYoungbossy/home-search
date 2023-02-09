import {
  query,
  where,
  addDoc,
  getDocs,
  collection,
  DocumentData,
  QuerySnapshot,
} from "firebase/firestore";
import {
  User,
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
import { auth, db } from "./firebaseConfig";

// Google Auth
const googleProvider = new GoogleAuthProvider();

const googleSignIn = async () => {
  const response = await signInWithPopup(auth, googleProvider);
  const user = response.user;
  return { user };
};

const checkIfOldUser = async (user: User) => {
  const q = query(collection(db, "USERS"), where("userId", "==", user.uid));
  const documents = await getDocs(q);
  return { documents };
};

const addNewUserData = async (
  user: User,
  authProvider: string,
  email = user.email,
  name = user.displayName
) => {
  await addDoc(collection(db, "USERS"), {
    name: name,
    email: email,
    userId: user.uid,
    avatar: user.photoURL,
    authProvider: authProvider,
  });
};

const createNewUserData = async (
  documents: QuerySnapshot<DocumentData>,
  user: User,
  authProvider: string
) => {
  if (documents.docs.length === 0) await addNewUserData(user, authProvider);
};

const signInWithGoogle = async () => {
  try {
    const { user } = await googleSignIn();
    const { documents } = await checkIfOldUser(user);
    createNewUserData(documents, user, "Google");
  } catch (err) {
    console.error(err);
    alert(err);
  }
};

// Facebook Auth
const facebookProvider = new FacebookAuthProvider();

const facebookSignIn = async () => {
  const response = await signInWithPopup(auth, facebookProvider);
  const user = response.user;
  return { user, response };
};

const getFacebookPhotoUrl = (response: UserCredential) => {
  const credential = FacebookAuthProvider.credentialFromResult(response);
  const token = credential?.accessToken;
  const photoUrl = `${response.user.photoURL}?height=500&access_token=${token}`;
  return { photoUrl };
};

type updatePropsObjType = { photoURL?: string; displayName?: string };

const updateUserCredentials = async (updatePropsObj: updatePropsObjType) => {
  if (auth.currentUser) {
    await updateProfile(auth.currentUser, { ...updatePropsObj });
  }
};

const signInWithFacebook = async () => {
  try {
    const { user, response } = await facebookSignIn();
    const { documents } = await checkIfOldUser(user);
    const { photoUrl } = getFacebookPhotoUrl(response);

    await updateUserCredentials({ photoURL: photoUrl });
    createNewUserData(documents, user, "Facebook");
  } catch (err) {
    console.error(err);
  }
};

// Email/Password Auth
const createNewEmailAndPassword = async (email: string, password: string) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  const user = response.user;
  return { user };
};

const registerWithEmailAndPassword = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const { user } = await createNewEmailAndPassword(email, password);
    await updateUserCredentials({ photoURL: "photoUrl", displayName: name });
    await addNewUserData(user, "Email/Password", email, name);
  } catch (err) {
    console.error(err);
  }
};

const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
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
