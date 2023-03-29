import {
  postReaction,
  IlikeOrUnlike,
} from "../../firebaseCRUD";
import {
  contextProps,
  ShowPosterCardProps,
} from "../../utilities/types";
import { User } from "firebase/auth";
import { Link } from "react-router-dom";
import { SlLike } from "react-icons/sl";
import * as SC from "./StyledClientCard";
import { BiComment } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { AppContext } from "../../context/AppContext";
import { useContext } from "react";
import { ShowPostCardContext } from "../../context/ShowPostCard";
import {
  ArrowDownSVG,
  ArrowUpSVG,
} from "../assets/socialPage/SocialSVG";
import GetPosterName, {
  IGetPosterName,
} from "./GetPostName";

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

export default function PostCard({
  children,
  secondary,
}: IPostCard) {
  return (
    <SC.StyledPostCard>
      <VoteArrow
        primary="#f8f9fa"
        secondary={secondary}
      />
      <PostDetails>
        <SC.StyledHouseSpec>{children}</SC.StyledHouseSpec>
      </PostDetails>
    </SC.StyledPostCard>
  );
}

export function HouseSpec({
  apartmentSize,
}: {
  apartmentSize?: string;
}) {
  return <h3>Looking for {apartmentSize}.</h3>;
}

export interface VoteArrowProps extends IClientCard {
  primary?: string;
}

export function VoteArrow({
  primary,
  secondary,
}: VoteArrowProps) {
  const { user } = useContext(AppContext) as contextProps;
  const { userId, postId, upvotes, downvotes } = useContext(
    ShowPostCardContext
  ) as ShowPosterCardProps;
  const votesCount = () =>
    upvotes && downvotes
      ? upvotes.length - downvotes.length
      : null;

  const togglevotesColor = (votes: string[]) => {
    if (votes && votes.includes(user?.uid as string))
      return true;
    return false;
  };

  return (
    <SC.StyledVoteArrow
      primary={primary}
      secondary={secondary}
      upvoted={togglevotesColor(upvotes as string[])}
      downvoted={togglevotesColor(downvotes as string[])}
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
      <p>{votesCount()}</p>
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
  const { budget } = useContext(
    ShowPostCardContext
  ) as ShowPosterCardProps;
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

interface OriginalPosterProps
  extends IPostDetailsProps,
    IGetPosterName {}

export function OriginalPoster({
  children,
  commentId,
  commentPostId,
  commentUserId,
}: OriginalPosterProps) {
  return (
    <SC.StyledOriginalPoster>
      <FaUserCircle />
      <div>
        <GetPosterName
          commentId={commentId}
          commentPostId={commentPostId}
          commentUserId={commentUserId}
        />
        {children}
      </div>
    </SC.StyledOriginalPoster>
  );
}

export function Description() {
  const { postDesc } = useContext(
    ShowPostCardContext
  ) as ShowPosterCardProps;
  return (
    <SC.StyledDescription>
      <p>{postDesc}</p>
    </SC.StyledDescription>
  );
}

function InteractWithPostIcons() {
  const { userId, postId, likes, comments } = useContext(
    ShowPostCardContext
  ) as ShowPosterCardProps;
  const { user } = useContext(AppContext) as contextProps;

  const toggleLikeColor = () => {
    if (likes?.includes(user?.uid as string)) return true;
    return false;
  };

  return (
    <SC.StyledInteractWithPostIcons
      liked={toggleLikeColor()}
    >
      <div>
        <Link to={`/comment/${postId as string}`}>
          <BiComment /> {comments?.length} Comment
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
        <SlLike /> {likes && likes.length} Like
      </div>
    </SC.StyledInteractWithPostIcons>
  );
}
