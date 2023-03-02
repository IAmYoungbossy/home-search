import { User } from "firebase/auth";
import * as SC from "./StyledClientCard";
import { db } from "../../firebaseConfig";
import { TfiComment } from "react-icons/tfi";
import { FaUserCircle } from "react-icons/fa";
import { doc, onSnapshot } from "firebase/firestore";
import { AppContext } from "../../context/AppContext";
import { useContext, useEffect, useState } from "react";
import { HeartSaveSVG } from "../assets/header/SvgMarkUp";
import { ILikeOrUnlike, likeOrUnlike } from "../../firebaseCRUD";
import { contextProps } from "../../utilities/typesAndInitialStateObj";
import { ArrowDownSVG, ArrowUpSVG } from "../assets/socialPage/SocialSVG";

interface IPost {
  children?: JSX.Element;
  secondary?: string;
}
interface IPostDetails extends IPost {
  postDesc?: string;
  budget?: number;
}
interface IClientCard extends IPost, IPostDetails, ILikeOrUnlike {
  secondary?: string;
  apartmentSize?: string;
}
interface IPostDetailsProps extends IPostDetails, ILikeOrUnlike {}

export function ClientCard({
  postId,
  userId,
  budget,
  postDesc,
  secondary,
  apartmentSize,
}: IClientCard) {
  return (
    <PostCard
      budget={budget}
      postId={postId}
      userId={userId}
      postDesc={postDesc}
      secondary={secondary}
    >
      <HouseSpec apartmentSize={apartmentSize} />
    </PostCard>
  );
}

interface IPostCard extends IPost, IPostDetails, ILikeOrUnlike {}

export default function PostCard({
  postId,
  userId,
  budget,
  children,
  postDesc,
  secondary,
}: IPostCard) {
  return (
    <SC.StyledPostCard>
      <VoteArrow primary="#f8f9fa" secondary={secondary} />
      <PostDetails
        postDesc={postDesc}
        budget={budget}
        postId={postId}
        userId={userId}
      >
        <SC.StyledHouseSpec>{children}</SC.StyledHouseSpec>
      </PostDetails>
    </SC.StyledPostCard>
  );
}

export function HouseSpec({ apartmentSize }: { apartmentSize?: string }) {
  return <h3>Looking for {apartmentSize}.</h3>;
}

interface VoteArrowProps {
  primary?: string;
  secondary?: string;
}

export function VoteArrow({ primary, secondary }: VoteArrowProps) {
  return (
    <SC.StyledVoteArrow primary={primary} secondary={secondary}>
      <ArrowUpSVG />
      <p>Vote</p>
      <ArrowDownSVG />
    </SC.StyledVoteArrow>
  );
}

function PostDetails({
  budget,
  userId,
  postId,
  children,
  postDesc,
}: IPostDetailsProps) {
  return (
    <SC.StyledPostDetails>
      <OriginalPoster>
        <p>
          <b>$</b> {budget} || <b>23</b> minutes ago
        </p>
      </OriginalPoster>
      {children}
      <Description postDesc={postDesc} />
      <InteractWithPostIcons userId={userId} postId={postId} />
    </SC.StyledPostDetails>
  );
}

interface OriginalPosterProps {
  children?: JSX.Element;
}

export function OriginalPoster({ children }: OriginalPosterProps) {
  return (
    <SC.StyledOriginalPoster>
      <FaUserCircle />
      <div>
        <p>Letam Bossman Barinua</p>
        {children}
      </div>
    </SC.StyledOriginalPoster>
  );
}

export function Description({ postDesc }: { postDesc?: string }) {
  return (
    <SC.StyledDescription>
      <p>{postDesc}</p>
    </SC.StyledDescription>
  );
}

function InteractWithPostIcons({ userId, postId }: ILikeOrUnlike) {
  const [likes, setLikes] = useState<string[] | []>([]);
  const { user } = useContext(AppContext) as contextProps;

  useEffect(() => {
    const postDocId = postId as string;
    const posterDocId = userId as string;
    const docRef = doc(db, "USERS", posterDocId, "POSTS", postDocId);

    const unsub = onSnapshot(docRef, (docSnapshot) => {
      setLikes(docSnapshot.data()?.Likes);
    });

    return () => {
      unsub();
    };
  }, [db]);

  return (
    <SC.StyledInteractWithPostIcons>
      <div>
        <TfiComment /> 1 Comment
      </div>
      <div
        onClick={() => {
          (async () =>
            await likeOrUnlike({ user: user as User, userId, postId }))();
        }}
      >
        <HeartSaveSVG /> {likes.length} Save
      </div>
    </SC.StyledInteractWithPostIcons>
  );
}
