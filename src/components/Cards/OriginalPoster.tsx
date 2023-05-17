import {
  doc,
  getDoc,
  DocumentData,
  DocumentReference,
} from "firebase/firestore";
import { IPostDetailsProps } from "./PostDetails";
import { db } from "../../firebase/firebaseConfig";
import FallbackAvatar from "../../assets/avatar.png";
import { useContext, useEffect, useState } from "react";
import { StyledOriginalPoster } from "./StyledClientCard";
import { ShowPosterCardProps } from "../../utilities/types";
import GetPosterName, { IGetPosterName } from "./GetPostName";
import { ShowPostCardContext } from "../../context/ShowPostCard";
import { useParams } from "react-router-dom";

interface OriginalPosterProps
  extends IPostDetailsProps,
    IGetPosterName {
  comment?: DocumentData;
}

export function OriginalPoster({
  comment,
  children,
  commentId,
  commentPostId,
  commentUserId,
}: OriginalPosterProps) {
  const [photoUrl, setPhotoUrl] = useState("");

  const postCard = useContext(
    ShowPostCardContext
  ) as ShowPosterCardProps;

  const setAvatar = async (
    docRef: DocumentReference<DocumentData>
  ) => {
    const doc = await getDoc(docRef);
    setPhotoUrl(doc.data()?.avatar);
  };

  useEffect(() => {
    setAvatar(
      doc(db, "USERS", commentUserId || postCard.userId)
    );
  }, []);

  return (
    <StyledOriginalPoster>
      <img
        alt="Avatar"
        src={photoUrl}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = `${FallbackAvatar}`;
        }}
      />
      <div>
        <GetPosterName
          comment={comment}
          commentId={commentId}
          commentPostId={commentPostId}
          commentUserId={commentUserId}
        />
        {children}
      </div>
    </StyledOriginalPoster>
  );
}
