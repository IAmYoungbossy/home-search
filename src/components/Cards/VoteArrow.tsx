import {
  contextProps,
  ShowPosterCardProps,
} from "../../utilities/types";
import { useContext } from "react";
import { User } from "firebase/auth";
import {
  ArrowUpSVG,
  ArrowDownSVG,
} from "../assets/socialPage/SocialSVG";
import { IClientCard } from "./ClientCard";
import { postReaction } from "../../firebaseCRUD";
import { StyledVoteArrow } from "./StyledClientCard";
import { AppContext } from "../../context/AppContext";
import { ShowPostCardContext } from "../../context/ShowPostCard";

export interface VoteArrowProps extends IClientCard {
  primary?: string;
}

export function VoteArrow({
  primary,
  secondary,
}: VoteArrowProps) {
  const {
    state: { user },
  } = useContext(AppContext) as contextProps;

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
    <StyledVoteArrow
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
    </StyledVoteArrow>
  );
}
