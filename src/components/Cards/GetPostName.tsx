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
import { AppContext } from "../../context/AppContext";
import { useState, useContext, useEffect } from "react";
import { ShowPostCardContext } from "../../context/ShowPostCard";
import {
  contextProps,
  ShowPosterCardProps,
} from "../../utilities/types";

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
  const [posterName, setPosterName] = useState("name");
  const {
    state: { user },
  } = useContext(AppContext) as contextProps;
  const [isPostAuthor, setIsPostAuthor] = useState(false);

  // Toggles Edit and Delete Pop-Up Modal
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

  /****************************************************
   ** This IIFE checks if the current Signed in user is
   ** the author of a post or comment and enable edit *
   ** and delete button *******************************
   ***************************************************/
  (async () => {
    if (postCard && !commentId) {
      const docRef = doc(db, "USERS", postCard.userId);
      const userDoc = await getDoc(docRef);
      const userId = userDoc.data()?.userId;
      if (user && userId && user.uid === userId)
        setIsPostAuthor(true);
    } else if (commentId && !postCard) {
      const docRef = doc(
        db,
        "USERS",
        commentUserId as string,
        "POSTS",
        commentPostId as string,
        "Comments",
        commentId as string
      );
      const userDoc = await getDoc(docRef);
      const userId = userDoc.data()?.currentUser;
      if (user && userId && user.uid === userId)
        setIsPostAuthor(true);
    }
  })();

  return (
    <StyledPosterName>
      <p>{posterName}</p>{" "}
      <div>
        {isPostAuthor && (
          <BsThreeDots
            onClick={(e) => {
              e.stopPropagation();
              setToggleButtons(
                toggleButtons ? false : true
              );
            }}
          />
        )}
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
