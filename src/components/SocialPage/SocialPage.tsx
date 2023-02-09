// import Comment from "../Comment/Comment";
import PostFeeds from "../PostFeeds/PostFeeds";
import SignInContainer from "../SignIn/SignIn";
// import CreatePostPage from "../CreatePost/CreatePost";
import { HeaderSocial } from "../HeaderSocialPage/HeaderSocialPage";
import SocialPageDataProvider from "../../context/socialPageContext";
import { StyledSocialPage } from "../HeaderSocialPage/StyledHeaderSocialPage";

export default function SocialPage() {
  return (
    <StyledSocialPage>
      <SocialPageDataProvider>
        <HeaderSocial />
        <main>
          <PostFeeds />
          {/* <CreatePostPage /> */}
          {/* <Comment /> */}
          <SignInContainer />
        </main>
      </SocialPageDataProvider>
    </StyledSocialPage>
  );
}
