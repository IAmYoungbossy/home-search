import {
  doc,
  getDoc,
  DocumentData,
  DocumentReference,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import EditAndDelete from "./EditAndDelete";
import { BsThreeDots } from "react-icons/bs";
import { StyledPosterName } from "./StyledClientCard";
import { useState, useContext, useEffect } from "react";
import { ShowPosterCardProps } from "../../utilities/types";
import { ShowPostCardContext } from "../../context/ShowPostCard";

export interface IGetPosterName {
  commentId?: string;
  commentUserId?: string;
  commentPostId?: string;
}

export default function GetPosterName({
  commentId,
  commentUserId,
  commentPostId,
}: IGetPosterName) {
  const [posterName, setPosterName] = useState("NEW");
  const [toggleButtons, setToggleButtons] = useState(false);

  const postCard = useContext(
    ShowPostCardContext
  ) as ShowPosterCardProps;

  const setName = async (
    docRef: DocumentReference<DocumentData>
  ) => {
    const doc = await getDoc(docRef);
    setPosterName(doc.data()?.name);
  };

  // Conditionally sets name for post and comment
  useEffect(() => {
    if (postCard) {
      const docRef = doc(db, "USERS", postCard.userId);
      setName(docRef);
    } else {
      const docRef = doc(
        db,
        "USERS",
        commentUserId as string,
        "POSTS",
        commentPostId as string,
        "Comments",
        commentId as string
      );
      setName(docRef);
    }
  });

  return (
    <StyledPosterName>
      <p>{posterName}</p>{" "}
      <div>
        <BsThreeDots
          onClick={(e) => {
            e.stopPropagation();
            setToggleButtons(toggleButtons ? false : true);
          }}
        />
        {toggleButtons && (
          <EditAndDelete
            commentId={commentId}
            commentPostId={commentPostId}
            commentUserId={commentUserId}
            toggleButtons={toggleButtons}
            setToggleButtons={setToggleButtons}
          />
        )}
      </div>
    </StyledPosterName>
  );
}
