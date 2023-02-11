// import Comment from "../Comment/Comment";
import PostFeeds from "../PostFeeds/PostFeeds";
import SignInContainer from "../SignIn/SignIn";
// import CreatePostPage from "../CreatePost/CreatePost";
import { HeaderSocial } from "../HeaderSocialPage/HeaderSocialPage";
import { StyledSocialPage } from "../HeaderSocialPage/StyledHeaderSocialPage";
import { Outlet } from "react-router-dom";

export default function SocialPage() {
  return (
    <StyledSocialPage>
      <HeaderSocial />
      <main>
        <Outlet />
      </main>
    </StyledSocialPage>
  );
}

export function PostPage() {
  return (
    <>
      <PostFeeds />
      <SignInContainer />
    </>
  );
}
