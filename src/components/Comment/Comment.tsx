import {
  ClientCard,
  VoteArrowProps,
  OriginalPoster,
} from "../PostCards/ClientCard";
import * as SC from "./StyledComment";
import { SlLike } from "react-icons/sl";
import { db } from "../../firebaseConfig";
import AgentCard from "../PostCards/AgentCard";
import {
  Icomment,
  contextProps,
  IShowPostCard,
} from "../../utilities/typesAndInitialStateObj";
import { AiFillCaretDown } from "react-icons/ai";
import { collection, doc, DocumentData, onSnapshot } from "firebase/firestore";
import { AppContext } from "../../context/AppContext";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useLoaderData, useParams } from "react-router-dom";
import { RedditRules, Warning } from "../CreatePost/CreatePost";
import { addComment, getAllUserDocs, postReaction } from "../../firebaseCRUD";
import { useState, useContext, Fragment, useEffect } from "react";
import { ArrowDownSVG, ArrowUpSVG } from "../assets/socialPage/SocialSVG";
import { User } from "firebase/auth";

export default function Comment() {
  const [comments, setComments] = useState<
    {
      data: DocumentData;
    }[]
  >([]);
  const { id } = useParams();
  const posts = useLoaderData() as IShowPostCard[];
  const postObj = posts.filter((post) => post.data.postId === id)[0];

  useEffect(() => {
    const postDocId = postObj.data.postId as string;
    const posterDocId = postObj.data.userDocId as string;
    const docRef = collection(
      db,
      "USERS",
      posterDocId,
      "POSTS",
      postDocId,
      "Comments"
    );

    const unsub = onSnapshot(docRef, (snapshot) => {
      const comments = snapshot.docs.map((comment) => ({
        data: comment.data(),
      }));
      console.log(comments);
      setComments(comments);
    });

    return () => unsub();
  }, [db]);

  return (
    <SC.StyledComment>
      <div>
        {!postObj.data.postAsAgent && (
          <ClientCard
            secondary="white"
            key={postObj.data.postId}
            postId={postObj.data.postId}
            budget={postObj.data.budget}
            userId={postObj.data.userDocId}
            postDesc={postObj.data.postDesc}
            apartmentSize={postObj.data.apartmentSize}
          />
        )}
        {postObj.data.postAsAgent && (
          <AgentCard
            secondary="white"
            key={postObj.data.postId}
            postId={postObj.data.postId}
            budget={postObj.data.budget}
            bgImage={postObj.data.imageUrl}
            userId={postObj.data.userDocId}
            location={postObj.data.location}
            postDesc={postObj.data.postDesc}
            postTitle={postObj.data.postTitle}
            dealStatus={postObj.data.dealStatus}
            apartmentSize={postObj.data.apartmentSize}
          />
        )}
        <TextArea
          postId={postObj.data.postId}
          userId={postObj.data.userDocId}
        />
        {comments.map((comment, index) => (
          <Fragment key={index}>
            <CommentCard
              commentIndex={index}
              postId={postObj.data.postId}
              userId={postObj.data.userDocId}
              commentId={comment.data.commentId}
              comment={comment.data.commentText}
            />
          </Fragment>
        ))}
      </div>
      <div>
        <div>
          <RedditRules />
          <Warning />
        </div>
      </div>
    </SC.StyledComment>
  );
}

export async function commentLoader() {
  const listOfPosts = await getAllUserDocs();
  return listOfPosts;
}

interface ICommentVote {
  userId: string;
  postId: string;
  commentId: string;
  commentIndex: number;
}

interface ICommentCard extends ICommentVote {
  comment: string;
}

function CommentCard({
  userId,
  postId,
  comment,
  commentIndex,
  commentId,
}: ICommentCard) {
  return (
    <SC.StyledcommentCard>
      <OriginalPoster />
      <CommentBox
        userId={userId}
        postId={postId}
        comment={comment}
        commentId={commentId}
        commentIndex={commentIndex}
      />
    </SC.StyledcommentCard>
  );
}

function CommentBox({
  userId,
  postId,
  comment,
  commentIndex,
  commentId,
}: ICommentCard) {
  return (
    <SC.StyledCommentBox>
      <p>{comment}</p>
      <CommentVote
        postId={postId}
        userId={userId}
        commentId={commentId}
        commentIndex={commentIndex}
      />
    </SC.StyledCommentBox>
  );
}

function CommentVote({
  userId,
  postId,
  commentIndex,
  commentId,
}: ICommentVote) {
  const [downvotes, setDownvotes] = useState<string[]>([]);
  const { user } = useContext(AppContext) as contextProps;
  const [upvotes, setUpvotes] = useState<string[]>([]);
  const [likes, setLikes] = useState<string[]>([]);

  const togglevotesColor = (votes: string[]) => {
    if (votes.includes(user?.uid as string)) return true;
    return false;
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

    const unsubUpvotes = onSnapshot(docRef, (snapshot) => {
      setUpvotes(snapshot.data()?.Upvotes);
    });
    const unsubDownvotes = onSnapshot(docRef, (snapshot) => {
      setDownvotes(snapshot.data()?.Downvotes);
    });
    const unsubLikes = onSnapshot(docRef, (snapshot) => {
      setLikes(snapshot.data()?.Likes);
    });

    return () => {
      unsubLikes();
      unsubUpvotes();
      unsubDownvotes();
    };
  }, [db]);
  return (
    <SC.StyledReactionButtons>
      <ul>
        <li>
          <ArrowUpSVG
            onClick={() => {
              (async () =>
                await postReaction({
                  userId,
                  postId,
                  commentId,
                  commentIndex,
                  voteType: "upvote",
                  user: user as User,
                }))();
            }}
          />
          <p>{upvotes.length - downvotes.length}</p>
          <ArrowDownSVG
            onClick={() => {
              (async () =>
                await postReaction({
                  userId,
                  postId,
                  commentId,
                  commentIndex,
                  user: user as User,
                  voteType: "downvote",
                }))();
            }}
          />
        </li>
        <SlLike
          onClick={() => {
            (async () =>
              await postReaction({
                userId,
                postId,
                commentId,
                commentIndex,
                voteType: "like",
                user: user as User,
              }))();
          }}
        />{" "}
        {likes.length} Like
      </ul>
    </SC.StyledReactionButtons>
  );
}

interface IRichTextEditor {
  userId: string;
  postId: string;
  textValue?: string;
}

interface ITextArea extends IRichTextEditor {}

export function TextArea({ postId, userId }: ITextArea) {
  const [textValue, setTextValue] = useState("");

  return (
    <SC.StyledTextArea>
      <CommentAs />
      <textarea
        cols={30}
        rows={10}
        id="textbox"
        name="textbox"
        value={textValue}
        placeholder="What are your thought?"
        onChange={(e) => setTextValue(e.target.value)}
      ></textarea>
      <RichTextEditor textValue={textValue} postId={postId} userId={userId} />
      <SortBy />
    </SC.StyledTextArea>
  );
}

function CommentAs() {
  return (
    <SC.StyledCommentAs>
      <p>
        Comment as <span>Severe-Cheek2859</span>
      </p>
    </SC.StyledCommentAs>
  );
}

function SortBy() {
  return (
    <SC.StyledSortBy>
      <h6>
        Sort By: Best <AiFillCaretDown />
      </h6>
      <hr />
    </SC.StyledSortBy>
  );
}

function RichTextEditor({ userId, postId, textValue }: IRichTextEditor) {
  const { user } = useContext(AppContext) as contextProps;
  const name = user?.displayName as string;
  const textareaValue = textValue as string;
  const handleAddComment = () => {
    if (textareaValue.length < 1) return;
    (async () => {
      await addComment({ name, userId, postId, comment: textareaValue });
    })();
  };

  return (
    <SC.StyledRichTextEditor bgColor={textareaValue.length > 0 ? true : false}>
      <div>
        <AiOutlineQuestionCircle />
        <p>Switch to Fancy Pants Editor</p>
      </div>
      <button onClick={handleAddComment}>Comment</button>
    </SC.StyledRichTextEditor>
  );
}
