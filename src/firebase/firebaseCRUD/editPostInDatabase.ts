import { db } from "../firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
import { IaddPostToFirestore } from "./addPostToFirestore";

interface IEditPostInDatabase extends IaddPostToFirestore {}

export async function editPostInDatabase({
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
  const docRef = doc(
    db,
    "USERS",
    userDocId as string,
    "POSTS",
    postId as string
  );
  const updates: Record<string, string | boolean> = {
    postDesc,
    postTitle,
    postAsAgent,
    budget: budget as string,
    imageUrl: imageUrl as string,
    location: location as string,
    dealStatus: dealStatus as string,
    apartmentSize: apartmentSize as string,
  };

  if (!postAsAgent) {
    delete updates.location;
    delete updates.imageUrl;
    delete updates.postTitle;
    delete updates.dealStatus;
  }

  await updateDoc(docRef, updates);
}
