// import Comment from "../Comment/Comment";
import PostFeeds from "../PostFeeds/PostFeeds";
// import CreatePostPage from "../CreatePost/CreatePost";
import { HeaderSocial } from "../App/HeaderSocialPage/HeaderSocialPage";
import { StyledSocialPage } from "../App/HeaderSocialPage/StyledHeaderSocialPage";

export default function SocialPage() {
  return (
    <StyledSocialPage>
      <HeaderSocial />
      <main>
        <PostFeeds />
        {/* <CreatePostPage /> */}
        {/* <Comment /> */}
      </main>
    </StyledSocialPage>
  );
}
