import Post from "../components/CreatePost/Post";
import Check from "../components/CreatePost/Check";
import Warning from "../components/CreatePost/Warning";
import SignInContainer from "../components/SignIn/SignIn";
import PostOptions from "../components/CreatePost/PostOptions";
import RedditRules from "../components/CreatePost/RedditRules";
import TitleHeader from "../components/CreatePost/TitleHeader";
import getAllUserDocs from "../firebase/firebaseCRUD/getAllUserDocs";
import ChooseCommunity from "../components/CreatePost/ChooseCommunity";
import { StyledCreatePostPage } from "../components/CreatePost/StyledCreatePost";

export default function CreateOrEditPost() {
  return (
    <>
      <StyledCreatePostPage>
        <div>
          <TitleHeader />
          <ChooseCommunity />
          <PostOptions />
          <Post />
          <Check />
        </div>
        <div>
          <RedditRules />
          <Warning />
        </div>
      </StyledCreatePostPage>
      <SignInContainer />
    </>
  );
}

export async function editPostLoader() {
  const listOfPosts = await getAllUserDocs();
  return listOfPosts;
}
