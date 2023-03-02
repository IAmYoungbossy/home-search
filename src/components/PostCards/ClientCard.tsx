import { User } from "firebase/auth";
import * as SC from "./StyledClientCard";
import { db } from "../../firebaseConfig";
import { TfiComment } from "react-icons/tfi";
import { FaUserCircle } from "react-icons/fa";
import { doc, onSnapshot } from "firebase/firestore";
import { AppContext } from "../../context/AppContext";
import { useContext, useEffect, useState } from "react";
import { HeartSaveSVG } from "../assets/header/SvgMarkUp";
import { contextProps } from "../../utilities/typesAndInitialStateObj";
import {
  downvote,
  IlikeOrUnlike,
  likeOrUnlike,
  upvote,
} from "../../firebaseCRUD";
import { ArrowDownSVG, ArrowUpSVG } from "../assets/socialPage/SocialSVG";

interface IPost {
  children?: JSX.Element;
  secondary?: string;
}
interface IPostDetails extends IPost {
  postDesc?: string;
  budget?: number;
}
interface IClientCard extends IPost, IPostDetails, IlikeOrUnlike {
  secondary?: string;
  apartmentSize?: string;
}
interface IPostDetailsProps extends IPostDetails, IlikeOrUnlike {}

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

interface IPostCard extends IPost, IPostDetails, IlikeOrUnlike {}

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
      <VoteArrow
        primary="#f8f9fa"
        secondary={secondary}
        postId={postId}
        userId={userId}
      />
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
  userId?: string;
  postId?: string;
  primary?: string;
  secondary?: string;
}

export function VoteArrow({
  userId,
  postId,
  primary,
  secondary,
}: VoteArrowProps) {
  const { user } = useContext(AppContext) as contextProps;
  const [upvotes, setUpvotes] = useState<string[]>([]);

  useEffect(() => {
    const postDocId = postId as string;
    const posterDocId = userId as string;
    const docRef = doc(db, "USERS", posterDocId, "POSTS", postDocId);

    const unsub = onSnapshot(docRef, (snapshot) => {
      setUpvotes(snapshot.data()?.Upvotes);
    });

    return () => unsub();
  }, [db]);

  return (
    <SC.StyledVoteArrow primary={primary} secondary={secondary}>
      <ArrowUpSVG
        onClick={() => {
          (async () =>
            await upvote({
              user: user as User,
              userId,
              postId,
            }))();
        }}
      />
      <p>{upvotes.length < 1 ? "Vote" : upvotes.length}</p>
      <ArrowDownSVG
        onClick={() => {
          (async () =>
            await downvote({
              user: user as User,
              userId,
              postId,
            }))();
        }}
      />
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

function InteractWithPostIcons({ userId, postId }: IlikeOrUnlike) {
  const { user } = useContext(AppContext) as contextProps;
  const [likes, setLikes] = useState<string[]>([]);

  useEffect(() => {
    const postDocId = postId as string;
    const posterDocId = userId as string;
    const docRef = doc(db, "USERS", posterDocId, "POSTS", postDocId);

    const unsub = onSnapshot(docRef, (snapshot) => {
      setLikes(snapshot.data()?.Likes);
    });

    return () => unsub();
  }, [db]);

  return (
    <SC.StyledInteractWithPostIcons>
      <div>
        <TfiComment /> 1 Comment
      </div>
      <div
        onClick={() => {
          (async () =>
            await likeOrUnlike({
              user: user as User,
              userId,
              postId,
            }))();
        }}
      >
        <HeartSaveSVG /> {likes.length} Save
      </div>
    </SC.StyledInteractWithPostIcons>
  );
}
