import { db } from "../firebaseConfig";
import { IShowPostCard } from "../../utilities/types";
import getPostFromUserDoc from "./getPostFromUserDoc";
import { collection, getDocs } from "firebase/firestore";

const getAllUserDocs = async () => {
  const users = collection(db, "USERS");
  const userDocs = await getDocs(users);
  const posts = await Promise.all(
    userDocs.docs.map((doc) =>
      (async () => await getPostFromUserDoc(doc.id))()
    )
  );

  const postList = posts.flat() as IShowPostCard[];

  return postList;
};

export default getAllUserDocs;
