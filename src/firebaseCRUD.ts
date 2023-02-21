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
  Firestore,
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

interface IaddPostToFirestore {
  budget: string | number;
  postDesc: string;
  postTitle: string;
  userDocId: string | null;
  postAsAgent: boolean;
  apartmentSize?: string;
  dealStatus?: string;
  location?: string;
}

export const addPostToFirestore = async ({
  budget,
  postDesc,
  location,
  postTitle,
  userDocId,
  dealStatus,
  postAsAgent,
  apartmentSize,
}: IaddPostToFirestore) => {
  if (!postAsAgent) {
    const document = await addDoc(
      collection(db, "USERS", userDocId as string, "POSTS"),
      {
        budget,
        postDesc,
        postTitle,
        userDocId,
        postAsAgent,
      }
    );
    const postId = document.id;
    addPostId({ db, userDocId, postId });
  }
  if (postAsAgent) {
    const document = await addDoc(
      collection(db, "USERS", userDocId as string, "POSTS"),
      {
        budget,
        postDesc,
        location,
        postTitle,
        userDocId,
        dealStatus,
        postAsAgent,
        apartmentSize,
      }
    );
    const postId = document.id;
    addPostId({ db, userDocId, postId });
  }
};

interface IAddPostId {
  db: Firestore;
  userDocId: string | null;
  postId: string;
}

async function addPostId({ db, userDocId, postId }: IAddPostId) {
  const docRef = doc(db, "USERS", userDocId as string, "POSTS", postId);
  await updateDoc(docRef, {
    postId: postId,
  });
}
