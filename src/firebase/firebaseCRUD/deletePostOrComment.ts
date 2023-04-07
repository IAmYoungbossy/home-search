import { db } from "../firebaseConfig";
import { deleteTuple } from "../../utilities/types";
import { deleteDoc, doc } from "firebase/firestore";
import { IGetPosterName } from "../../components/Cards/GetPostName";

interface IDeletePost extends IGetPosterName {
  postId: string;
  userId: string;
  setToggleButtons: (
    value: React.SetStateAction<boolean>
  ) => void;
}

const deletePostOrComment = async ({
  postId,
  userId,
  commentId,
  setToggleButtons,
}: IDeletePost) => {
  // Path to delete a post
  const path: deleteTuple = [
    db,
    "USERS",
    userId,
    "POSTS",
    postId,
  ];

  if (commentId) {
    // Path to delete a comment
    path.push("Comments", commentId);
    setToggleButtons(false);
  }

  const docRef = doc(...path);
  await deleteDoc(docRef);
};

export default deletePostOrComment;
