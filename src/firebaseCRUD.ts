import {
  ref,
  UploadTask,
  StorageError,
  getDownloadURL,
  UploadTaskSnapshot,
  uploadBytesResumable,
} from "firebase/storage";
import {
  doc,
  query,
  where,
  addDoc,
  getDocs,
  Firestore,
  updateDoc,
  arrayUnion,
  collection,
  DocumentData,
  QuerySnapshot,
  DocumentReference,
  arrayRemove,
  FieldValue,
  getDoc,
} from "firebase/firestore";
import { User } from "firebase/auth";
import {
  actionType,
  APP_ACTION_TYPES,
} from "./utilities/typesAndInitialStateObj";
import { db, storage } from "./firebaseConfig";

export const checkIfOldUser = async (
  user: User,
  dispatch: React.Dispatch<actionType>
) => {
  const q = query(collection(db, "USERS"), where("userId", "==", user.uid));
  const documents = await getDocs(q);
  if (documents.docs.length > 0) {
    dispatch({
      type: APP_ACTION_TYPES.userDocId,
      payload: documents.docs[0].id,
    });
  }
  return { documents };
};

const updateDocument = async (
  docRef: DocumentReference<DocumentData>,
  dispatch: React.Dispatch<actionType>
) => {
  await updateDoc(doc(db, "USERS", docRef["id"]), { docId: docRef["id"] });
  dispatch({
    type: APP_ACTION_TYPES.userDocId,
    payload: docRef.id,
  });
};

export const addNewUserData = async (
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

export const createNewUserData = async (
  documents: QuerySnapshot<DocumentData>,
  user: User,
  authProvider: string,
  dispatch: React.Dispatch<actionType>
) => {
  if (documents.docs.length === 0)
    await addNewUserData(user, authProvider, dispatch);
};

interface IaddPostToFirestore {
  postDesc: string;
  postTitle: string;
  location?: string;
  imageUrl?: string;
  dealStatus?: string;
  postAsAgent: boolean;
  apartmentSize?: string;
  budget: string | number;
  userDocId: string | null;
}

export const addPostToFirestore = async ({
  budget,
  postDesc,
  imageUrl,
  location,
  postTitle,
  userDocId,
  dealStatus,
  postAsAgent,
  apartmentSize,
}: IaddPostToFirestore) => {
  if (postAsAgent) {
    const document = await addDoc(
      collection(db, "USERS", userDocId as string, "POSTS"),
      {
        budget,
        postDesc,
        imageUrl,
        location,
        postTitle,
        userDocId,
        dealStatus,
        postAsAgent,
        apartmentSize,
        Likes: arrayUnion(),
        Upvotes: arrayUnion(),
      }
    );
    const postId = document.id;
    addPostId({ db, userDocId, postId });
  }
  if (!postAsAgent) {
    const document = await addDoc(
      collection(db, "USERS", userDocId as string, "POSTS"),
      {
        budget,
        postDesc,
        postTitle,
        userDocId,
        postAsAgent,
        apartmentSize,
        Likes: arrayUnion(),
        Upvotes: arrayUnion(),
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
    (snapshot) => updateProgressBar({ snapshot, dispatch }),
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

interface IUpdateProgressBar {
  snapshot: UploadTaskSnapshot;
  dispatch: React.Dispatch<actionType>;
}

function updateProgressBar({ snapshot, dispatch }: IUpdateProgressBar) {
  let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  dispatch({
    payload: progress,
    type: APP_ACTION_TYPES.uploadProgress,
  });
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

export const getAllUserDocs = async () => {
  const users = collection(db, "USERS");
  const userDocs = await getDocs(users);
  const postList = await Promise.all(
    userDocs.docs.map((doc) => (async () => await getPostFromUserDoc(doc.id))())
  );
  return postList.flat();
};

async function getPostFromUserDoc(docId: string) {
  const posts = collection(db, "USERS", docId, "POSTS");
  const userDocs = await getDocs(posts);
  return userDocs.docs.map((doc) => ({
    data: doc.data(),
    id: doc.id,
  }));
}

interface IDocRef {
  postDocRef: DocumentReference<DocumentData>;
}

interface IUserId {
  userId: string;
}

interface IAddLikes extends IUserId {
  postId: string;
}

interface IUpdateLikeArray extends IDocRef {
  value: FieldValue;
}

interface IAddLike extends IDocRef, IUserId {}

interface IRemoveLike extends IAddLike {}

export async function likeOrUnlike({ userId, postId }: IAddLikes) {
  const postDocRef = doc(db, "USERS", userId, "POSTS", postId);
  const postDocSnapshot = await getDoc(postDocRef);

  if (postDocSnapshot.exists() && postDocSnapshot.data().Likes.includes(userId))
    await addLike({ userId, postDocRef });
  else await removeLike({ userId, postDocRef });
}

async function addLike({ userId, postDocRef }: IAddLike) {
  await updateLikeArray({ value: arrayUnion(userId), postDocRef });
}

async function removeLike({ userId, postDocRef }: IRemoveLike) {
  await updateLikeArray({ value: arrayRemove(userId), postDocRef });
}

async function updateLikeArray({ value, postDocRef }: IUpdateLikeArray) {
  const addUserId = { Likes: value };
  await updateDoc(postDocRef, addUserId);
}
