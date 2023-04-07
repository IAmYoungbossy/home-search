import { db } from "../firebaseConfig";
import getPostFromUserDoc from "./getPostFromUserDoc";
import { collection, getDocs } from "firebase/firestore";

const getAllUserDocs = async () => {
  const users = collection(db, "USERS");
  const userDocs = await getDocs(users);
  const postList = await Promise.all(
    userDocs.docs.map((doc) =>
      (async () => await getPostFromUserDoc(doc.id))()
    )
  );
  return postList.flat();
};

export default getAllUserDocs;
