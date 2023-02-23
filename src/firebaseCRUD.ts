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
import { db, storage } from "./firebaseConfig";
import {
  getDownloadURL,
  ref,
  StorageError,
  StorageReference,
  uploadBytes,
  uploadBytesResumable,
  UploadTask,
  UploadTaskSnapshot,
} from "firebase/storage";
import {
  actionType,
  APP_ACTION_TYPES,
} from "./utilities/typesAndInitialStateObj";

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

interface IUploadFileToStorage {
  file: File;
  dispatch: React.Dispatch<actionType>;
}

export async function uploadFileToStorage({
  file,
  dispatch,
}: IUploadFileToStorage) {
  const storageRef = ref(storage, `PostImages/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      dispatch({
        payload: progress,
        type: APP_ACTION_TYPES.uploadProgress,
      });
    },
    alertError,
    setImageUrl.bind(null, { uploadTask, dispatch })
  );
}

function alertError(error: StorageError) {
  alert(error);
}

interface ISetImageUrl {
  uploadTask: UploadTask;
  dispatch: React.Dispatch<actionType>;
}

function setImageUrl({ uploadTask, dispatch }: ISetImageUrl) {
  (async () => {
    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
    dispatch({
      type: APP_ACTION_TYPES.POST.imageURL,
      payload: downloadURL,
    });
    dispatch({
      payload: 0,
      type: APP_ACTION_TYPES.uploadProgress,
    });
  })();
}
