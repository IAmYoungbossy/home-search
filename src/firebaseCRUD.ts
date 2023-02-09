import {
  doc,
  query,
  where,
  addDoc,
  getDocs,
  updateDoc,
  collection,
  DocumentData,
  QuerySnapshot,
  DocumentReference,
} from "firebase/firestore";
import { User } from "firebase/auth";
import { db } from "./firebaseConfig";

export const checkIfOldUser = async (user: User) => {
  const q = query(collection(db, "USERS"), where("userId", "==", user.uid));
  const documents = await getDocs(q);
  return { documents };
};

const updateDocument = async (docRef: DocumentReference<DocumentData>) => {
  await updateDoc(doc(db, "USERS", docRef["id"]), { docId: docRef["id"] });
};

export const addNewUserData = async (
  user: User,
  authProvider: string,
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
  await updateDocument(docRef);
};

export const createNewUserData = async (
  documents: QuerySnapshot<DocumentData>,
  user: User,
  authProvider: string
) => {
  if (documents.docs.length === 0) await addNewUserData(user, authProvider);
};
