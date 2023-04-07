import { User } from "firebase/auth";
import { db } from "../firebaseConfig";
import updateDocument from "./updateDocument";
import { actionType } from "../../utilities/types";
import { addDoc, collection } from "firebase/firestore";

const addNewUserData = async (
  user: User,
  authProvider: string,
  dispatch: React.Dispatch<actionType>,
  email = user.email,
  name = user.displayName
) => {
  const docRef = await addDoc(collection(db, "USERS"), {
    name: name,
    email: email,
    userId: user.uid,
    avatar: user.photoURL,
    authProvider: authProvider,
  });
  await updateDocument(docRef, dispatch);
};

export default addNewUserData;
