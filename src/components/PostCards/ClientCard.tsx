import { User } from "firebase/auth";
import { Link } from "react-router-dom";
import { SlLike } from "react-icons/sl";
import * as SC from "./StyledClientCard";
import { db } from "../../firebaseConfig";
import { BiComment } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { AppContext } from "../../context/AppContext";
import { useContext, useEffect, useState } from "react";
import { IlikeOrUnlike, postReaction } from "../../firebaseCRUD";
import {
  contextProps,
  ShowPosterCardProps,
} from "../../utilities/typesAndInitialStateObj";
import { ArrowDownSVG, ArrowUpSVG } from "../assets/socialPage/SocialSVG";
import { collection, doc, DocumentData, onSnapshot } from "firebase/firestore";
import { ShowPostCardContext } from "../../context/ShowPostCard";

interface IClientCard {
  secondary?: string;
}

interface IPostDetailsProps {
  children?: JSX.Element;
}

interface IPost extends IClientCard, IPostDetailsProps {}

export function ClientCard({ secondary }: IClientCard) {
  const { apartmentSize } = useContext(
    ShowPostCardContext
  ) as ShowPosterCardProps;
  return (
    <PostCard secondary={secondary}>
      <HouseSpec apartmentSize={apartmentSize} />
    </PostCard>
  );
}

interface IPostCard extends IPost, IlikeOrUnlike {}

export default function PostCard({ children, secondary }: IPostCard) {
  return (
    <SC.StyledPostCard>
      <VoteArrow primary="#f8f9fa" secondary={secondary} />
      <PostDetails>
        <SC.StyledHouseSpec>{children}</SC.StyledHouseSpec>
      </PostDetails>
    </SC.StyledPostCard>
  );
}

export function HouseSpec({ apartmentSize }: { apartmentSize?: string }) {
  return <h3>Looking for {apartmentSize}.</h3>;
}

export interface VoteArrowProps {
  primary?: string;
  secondary?: string;
}

export function VoteArrow({ primary, secondary }: VoteArrowProps) {
  const { userId, postId } = useContext(
    ShowPostCardContext
  ) as ShowPosterCardProps;
  const [downvotes, setDownvotes] = useState<string[]>([]);
  const { user } = useContext(AppContext) as contextProps;
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

function PostDetails({ children }: IPostDetailsProps) {
  const { budget } = useContext(ShowPostCardContext) as ShowPosterCardProps;
  return (
    <SC.StyledPostDetails>
      <OriginalPoster>
        <p>
          <b>$</b> {budget} || <b>23</b> minutes ago
        </p>
      </OriginalPoster>
      {children}
      <Description />
      <InteractWithPostIcons />
    </SC.StyledPostDetails>
  );
}

interface OriginalPosterProps extends IPostDetailsProps {}

export function OriginalPoster({ children }: OriginalPosterProps) {
  return (
    <SC.StyledOriginalPoster>
      <FaUserCircle />
      <div>
        <PosterNameAndEditButtons />
        {children}
      </div>
    </SC.StyledOriginalPoster>
  );
}

function PosterNameAndEditButtons() {
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
            toggleButtons={toggleButtons}
            setToggleButtons={setToggleButtons}
          />
        )}
      </div>
    </SC.StyledPosterNameAndEditButtons>
  );
}

interface IEditAndDeleteButtons {
  toggleButtons: boolean;
  setToggleButtons: React.Dispatch<React.SetStateAction<boolean>>;
}

function EditAndDeleteButtons({
  toggleButtons,
  setToggleButtons,
}: IEditAndDeleteButtons) {
  const { postId } = useContext(ShowPostCardContext) as ShowPosterCardProps;

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
        <button>
          <Link to={`edit/${postId as string}`}>Edit Post</Link>
        </button>
      </li>
      <li>
        <button>Delete Post</button>
      </li>
    </SC.StyledEditAndDeleteButtons>
  );
}

export function Description() {
  const { postDesc } = useContext(ShowPostCardContext) as ShowPosterCardProps;
  return (
    <SC.StyledDescription>
      <p>{postDesc}</p>
    </SC.StyledDescription>
  );
}

function InteractWithPostIcons() {
  const { userId, postId } = useContext(
    ShowPostCardContext
  ) as ShowPosterCardProps;
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
