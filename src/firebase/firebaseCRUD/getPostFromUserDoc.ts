import {
  query,
  orderBy,
  getDocs,
  collection,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

export default async function getPostFromUserDoc(docId: string) {
  const posts = query(
    collection(db, "USERS", docId, "POSTS"),
    orderBy("createdAt", "desc")
  );
  const postDocs = await getDocs(posts);
  return postDocs.docs.map((doc) => ({
    data: doc.data(),
    id: doc.id,
  }));
}
