import { User } from "firebase/auth";
import { SlLike } from "react-icons/sl";
import { db } from "../../firebaseConfig";
import { postReaction } from "../../firebaseCRUD";
import { contextProps } from "../../utilities/types";
import { AppContext } from "../../context/AppContext";
import { useContext, useEffect, useState } from "react";
import { StyledReactionButtons } from "./StyledComment";
import {
  doc,
  DocumentData,
  onSnapshot,
} from "firebase/firestore";
import {
  ArrowDownSVG,
  ArrowUpSVG,
} from "../assets/socialPage/SocialSVG";

export interface ICommentReactions {
  userId: string;
  postId: string;
  commentId: string;
  commentIndex: number;
  comment: DocumentData;
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
  comment,
  commentId,
  commentIndex,
}: ICommentReactions) {
  const {
    state: { user },
  } = useContext(AppContext) as contextProps;

  // Use an object for the initial state of votes.
  const [votes, setVotes] =
    useState<IVotes>(votesInitalObj);

  const toggleVotesColor = (
    voteType: "upvotes" | "downvotes" | "likes"
  ) => {
    return votes[voteType].includes(user?.uid as string);
  };

  useEffect(() => {
    // Construct the document reference for the comment.
    const docRef = doc(
      db,
      "USERS",
      userId as string,
      "POSTS",
      postId as string,
      "Comments",
      commentId as string
    );

    // Subscribe to the changes of the comment document and update the state.
    const unsubVotes = onSnapshot(docRef, (snapshot) => {
      const data = snapshot.data();
      setVotes({
        likes: data?.Likes || [],
        upvotes: data?.Upvotes || [],
        downvotes: data?.Downvotes || [],
      });
    });

    // Unsubscribe from the snapshot listener when the component is unmounted.
    return () => {
      unsubVotes();
    };
  }, [db, comment]);

  const handleVote = async (
    voteType: "upvote" | "downvote" | "like"
  ) => {
    // Call the postReaction function with the parameters passed to this component.
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
          <ArrowUpSVG
            onClick={() => handleVote("upvote")}
          />
          {/* Calculate the vote count by subtracting the number of downvotes from the number of upvotes. */}
          <p>
            {votes.upvotes.length - votes.downvotes.length}
          </p>
          <ArrowDownSVG
            onClick={() => handleVote("downvote")}
          />
        </li>
        <li>
          <SlLike onClick={() => handleVote("like")} />
          {/* Display the number of likes. */}
          {votes.likes.length} Like
        </li>
      </ul>
    </StyledReactionButtons>
  );
}
