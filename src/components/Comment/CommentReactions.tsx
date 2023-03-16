import { User } from "firebase/auth";
import { SlLike } from "react-icons/sl";
import { db } from "../../firebaseConfig";
import { postReaction } from "../../firebaseCRUD";
import { doc, onSnapshot } from "firebase/firestore";
import { AppContext } from "../../context/AppContext";
import { useContext, useEffect, useState } from "react";
import { StyledReactionButtons } from "./StyledComment";
import { contextProps } from "../../utilities/typesAndInitialStateObj";
import { ArrowDownSVG, ArrowUpSVG } from "../assets/socialPage/SocialSVG";

export interface ICommentReaction {
  userId: string;
  postId: string;
  commentId: string;
  commentIndex: number;
}

interface IVotes {
  likes: string[];
  upvotes: string[];
  downvotes: string[];
}

const votesInitalObj = {
  likes: [],
  upvotes: [],
  downvotes: [],
};

export function CommentReactions({
  userId,
  postId,
  commentId,
  commentIndex,
}: ICommentReaction) {
  const { user } = useContext(AppContext) as contextProps;
  const [votes, setVotes] = useState<IVotes>(votesInitalObj);

  const toggleVotesColor = (voteType: "upvotes" | "downvotes" | "likes") => {
    return votes[voteType].includes(user?.uid as string);
  };

  useEffect(() => {
    const postDocId = postId as string;
    const posterDocId = userId as string;
    const docRef = doc(
      db,
      "USERS",
      posterDocId,
      "POSTS",
      postDocId,
      "Comments",
      commentId
    );

    const unsubVotes = onSnapshot(docRef, (snapshot) => {
      const data = snapshot.data();
      setVotes({
        likes: data?.Likes || [],
        upvotes: data?.Upvotes || [],
        downvotes: data?.Downvotes || [],
      });
    });

    return () => {
      unsubVotes();
    };
  }, [db]);

  const handleVote = async (voteType: "upvote" | "downvote" | "like") => {
    await postReaction({
      userId,
      postId,
      commentId,
      commentIndex,
      voteType,
      user: user as User,
    });
  };

  return (
    <StyledReactionButtons>
      <ul>
        <li>
          <ArrowUpSVG onClick={() => handleVote("upvote")} />
          <p>{votes.upvotes.length - votes.downvotes.length}</p>
          <ArrowDownSVG onClick={() => handleVote("downvote")} />
        </li>
        <li>
          <SlLike onClick={() => handleVote("like")} />
          {votes.likes.length} Like
        </li>
      </ul>
    </StyledReactionButtons>
  );
}
