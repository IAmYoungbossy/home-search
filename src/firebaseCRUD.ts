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
  getDoc,
  addDoc,
  getDocs,
  Firestore,
  updateDoc,
  arrayUnion,
  collection,
  FieldValue,
  arrayRemove,
  DocumentData,
  QuerySnapshot,
  DocumentReference,
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
        Comments: arrayUnion(),
        Downvotes: arrayUnion(),
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
        Comments: arrayUnion(),
        Downvotes: arrayUnion(),
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

interface IEditPostInDatabase extends IaddPostToFirestore {
  postId: string;
}

async function editPostInDatabase({
  budget,
  postId,
  postDesc,
  imageUrl,
  location,
  postTitle,
  userDocId,
  dealStatus,
  postAsAgent,
  apartmentSize,
}: IEditPostInDatabase) {
  const docRef = doc(db, "USERS", userDocId as string, "POSTS", postId);
  await updateDoc(docRef, {
    budget,
    postId,
    postDesc,
    imageUrl,
    location,
    postTitle,
    userDocId,
    dealStatus,
    postAsAgent,
    apartmentSize,
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

export async function getPostFromUserDoc(docId: string) {
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
  userId?: string;
}

export interface IlikeOrUnlike extends IUserId {
  user?: User;
  postId?: string;
}
export interface IVote extends IlikeOrUnlike {
  commentIndex?: number;
  commentId?: string;
  voteType: "upvote" | "downvote" | "like";
}

interface IUpdatePostReactionArray extends IDocRef {
  updatedObj: {
    Likes?: FieldValue;
    Upvotes?: FieldValue;
    Comments?: FieldValue;
  };
}

async function getPostDetails({ user, userId, postId }: IlikeOrUnlike) {
  const userID = userId as string;
  const postID = postId as string;
  const currentUserId = user?.uid as string;
  const postDocRef = doc(db, "USERS", userID, "POSTS", postID);
  const postDocSnapshot = await getDoc(postDocRef);

  return { postDocRef, currentUserId, postDocSnapshot };
}

export async function postReaction({
  user,
  userId,
  postId,
  voteType,
  commentIndex,
  commentId,
}: IVote) {
  const props = { user, userId, postId };
  const { postDocRef, currentUserId, postDocSnapshot } = await getPostDetails(
    props
  );

  let votes = voteType === "upvote" ? "Upvotes" : "Downvotes";
  let oppositeVotes = voteType === "upvote" ? "Downvotes" : "Upvotes";
  if (voteType === "like") votes = "Likes";

  if (commentIndex !== undefined) {
    const commentDocRef = doc(
      db,
      "USERS",
      userId as string,
      "POSTS",
      postId as string,
      "Comments",
      commentId as string
    );
    const commentDocSnapshot = await getDoc(commentDocRef);
    if (
      commentDocSnapshot.exists() &&
      commentDocSnapshot.data()[votes].includes(currentUserId)
    ) {
      await updatePostReactionArray({
        updatedObj: { [votes]: arrayRemove(currentUserId) },
        postDocRef: commentDocRef,
      });
    } else {
      await updatePostReactionArray({
        updatedObj: { [votes]: arrayUnion(currentUserId) },
        postDocRef: commentDocRef,
      });
      if (voteType === "downvote" || voteType === "upvote") {
        await updatePostReactionArray({
          updatedObj: { [oppositeVotes]: arrayRemove(currentUserId) },
          postDocRef: commentDocRef,
        });
      }
    }
  }

  if (commentIndex === undefined) {
    if (
      postDocSnapshot.exists() &&
      postDocSnapshot.data()[votes].includes(currentUserId)
    ) {
      await updatePostReactionArray({
        updatedObj: { [votes]: arrayRemove(currentUserId) },
        postDocRef,
      });
    } else {
      await updatePostReactionArray({
        updatedObj: { [votes]: arrayUnion(currentUserId) },
        postDocRef,
      });
      if (voteType === "downvote" || voteType === "upvote") {
        await updatePostReactionArray({
          updatedObj: { [oppositeVotes]: arrayRemove(currentUserId) },
          postDocRef,
        });
      }
    }
  }
}

async function updatePostReactionArray({
  updatedObj,
  postDocRef,
}: IUpdatePostReactionArray) {
  const addUserId = updatedObj;
  await updateDoc(postDocRef, addUserId);
}

interface IAddComment extends IlikeOrUnlike {
  name: string;
  comment: string;
}

export async function addComment({
  name,
  userId,
  postId,
  comment,
}: IAddComment) {
  const userID = userId as string;
  const postID = postId as string;
  const commentCollection = collection(
    db,
    "USERS",
    userID,
    "POSTS",
    postID,
    "Comments"
  );
  const commentFields = {
    name,
    Likes: arrayUnion(),
    commentText: comment,
    Upvotes: arrayUnion(),
    Comments: arrayUnion(),
    Downvotes: arrayUnion(),
  };
  const document = await addDoc(commentCollection, commentFields);
  const commentId = document.id;
  updateDoc(doc(db, "USERS", userID, "POSTS", postID, "Comments", commentId), {
    commentId,
  });
}
