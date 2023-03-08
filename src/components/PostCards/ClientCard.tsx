import { User } from "firebase/auth";
import { Link } from "react-router-dom";
import { SlLike } from "react-icons/sl";
import * as SC from "./StyledClientCard";
import { db } from "../../firebaseConfig";
import { BiComment } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { AppContext } from "../../context/AppContext";
import { useContext, useEffect, useState } from "react";
import { IlikeOrUnlike, postReaction } from "../../firebaseCRUD";
import {
  APP_ACTION_TYPES,
  contextProps,
} from "../../utilities/typesAndInitialStateObj";
import { ArrowDownSVG, ArrowUpSVG } from "../assets/socialPage/SocialSVG";
import { collection, doc, DocumentData, onSnapshot } from "firebase/firestore";
import { BsThreeDots } from "react-icons/bs";

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

export interface VoteArrowProps {
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
  const [downvotes, setDownvotes] = useState<string[]>([]);
  const [upvotes, setUpvotes] = useState<string[]>([]);

  const togglevotesColor = (votes: string[]) => {
    if (votes.includes(user?.uid as string)) return true;
    return false;
  };

  useEffect(() => {
    const postDocId = postId as string;
    const posterDocId = userId as string;
    const docRef = doc(db, "USERS", posterDocId, "POSTS", postDocId);

    const unsubUpvotes = onSnapshot(docRef, (snapshot) => {
      setUpvotes(snapshot.data()?.Upvotes);
    });
    const unsubDownvotes = onSnapshot(docRef, (snapshot) => {
      setDownvotes(snapshot.data()?.Downvotes);
    });

    return () => {
      unsubUpvotes();
      unsubDownvotes();
    };
  }, [db]);

  return (
    <SC.StyledVoteArrow
      primary={primary}
      secondary={secondary}
      upvoted={togglevotesColor(upvotes)}
      downvoted={togglevotesColor(downvotes)}
    >
      <div>
        <ArrowUpSVG
          onClick={() => {
            (async () =>
              await postReaction({
                userId,
                postId,
                voteType: "upvote",
                user: user as User,
              }))();
          }}
        />
      </div>
      <p>{upvotes.length - downvotes.length}</p>
      <div>
        <ArrowDownSVG
          onClick={() => {
            (async () =>
              await postReaction({
                userId,
                postId,
                user: user as User,
                voteType: "downvote",
              }))();
          }}
        />
      </div>
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
      <OriginalPoster postId={postId}>
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
  postId?: string;
  children?: JSX.Element;
}

export function OriginalPoster({ postId, children }: OriginalPosterProps) {
  return (
    <SC.StyledOriginalPoster>
      <FaUserCircle />
      <div>
        <PosterNameAndEditButtons postId={postId} />
        {children}
      </div>
    </SC.StyledOriginalPoster>
  );
}

function PosterNameAndEditButtons({ postId }: { postId?: string }) {
  const [toggleButtons, setToggleButtons] = useState(false);

  return (
    <SC.StyledPosterNameAndEditButtons>
      <p>Letam Bossman Barinua</p>{" "}
      <div>
        <BsThreeDots
          onClick={(e) => {
            e.stopPropagation();
            setToggleButtons(toggleButtons ? false : true);
          }}
        />
        {toggleButtons && (
          <EditAndDeleteButtons
            postId={postId}
            toggleButtons={toggleButtons}
            setToggleButtons={setToggleButtons}
          />
        )}
      </div>
    </SC.StyledPosterNameAndEditButtons>
  );
}

interface IEditAndDeleteButtons {
  postId?: string;
  toggleButtons: boolean;
  setToggleButtons: React.Dispatch<React.SetStateAction<boolean>>;
}

function EditAndDeleteButtons({
  postId,
  toggleButtons,
  setToggleButtons,
}: IEditAndDeleteButtons) {
  useEffect(() => {
    const removeButtons = () => setToggleButtons(false);
    document.addEventListener("click", removeButtons);

    return () => {
      document.removeEventListener("click", removeButtons);
    };
  }, [toggleButtons]);

  return (
    <SC.StyledEditAndDeleteButtons onClick={(e) => e.stopPropagation()}>
      <li>
        <button>Edit Post</button>
      </li>
      <li>
        <button>Delete Post</button>
      </li>
    </SC.StyledEditAndDeleteButtons>
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
  const [comments, setComments] = useState<DocumentData[]>([]);

  useEffect(() => {
    const postDocId = postId as string;
    const posterDocId = userId as string;
    const docRef = doc(db, "USERS", posterDocId, "POSTS", postDocId);
    const collectionRef = collection(
      db,
      "USERS",
      posterDocId,
      "POSTS",
      postDocId,
      "Comments"
    );

    const unsub = onSnapshot(docRef, (snapshot) => {
      setLikes(snapshot.data()?.Likes);
    });
    const unSubCollectionRef = onSnapshot(collectionRef, (snapshot) => {
      const comments = snapshot.docs.map((doc) => doc.data());
      setComments(comments);
    });

    return () => {
      unsub();
      unSubCollectionRef();
    };
  }, [db]);

  const toggleLikeColor = () => {
    if (likes.includes(user?.uid as string)) return true;
    return false;
  };

  return (
    <SC.StyledInteractWithPostIcons liked={toggleLikeColor()}>
      <div>
        <Link to={`comment/${postId as string}`}>
          <BiComment /> {comments.length} Comment
        </Link>
      </div>
      <div
        onClick={() => {
          (async () =>
            await postReaction({
              userId,
              postId,
              voteType: "like",
              user: user as User,
            }))();
        }}
      >
        <SlLike /> {likes.length} Like
      </div>
    </SC.StyledInteractWithPostIcons>
  );
}
