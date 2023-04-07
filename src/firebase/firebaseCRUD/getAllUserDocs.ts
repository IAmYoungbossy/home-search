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

  postList.sort((a, b) => {
    const dateA = new Date(
      a.data.createdAt.seconds * 1000 +
        a.data.createdAt.nanoseconds / 1000000
    );
    const dateB = new Date(
      b.data.createdAt.seconds * 1000 +
        b.data.createdAt.nanoseconds / 1000000
    );
    return dateB.getTime() - dateA.getTime(); // Sort in descending order
  });

  return postList;
};

export default getAllUserDocs;
