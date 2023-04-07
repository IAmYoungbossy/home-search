import Post from "./Post";
import Check from "./Check";
import Warning from "./Warning";
import PostOptions from "./PostOptions";
import RedditRules from "./RedditRules";
import TitleHeader from "./TitleHeader";
import SignInContainer from "../SignIn/SignIn";
import ChooseCommunity from "./ChooseCommunity";
import { StyledCreatePostPage } from "./StyledCreatePost";
import getAllUserDocs from "../../firebase/firebaseCRUD/getAllUserDocs";

export default function CreatePostPage() {
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
