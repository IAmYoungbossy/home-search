import { Outlet } from "react-router-dom";
import PostFeeds from "../PostFeeds/PostFeeds";
import SignInContainer from "../SignIn/SignIn";
import { HeaderSocial } from "../HeaderSocialPage/HeaderSocialPage";
import { StyledSocialPage } from "../HeaderSocialPage/StyledHeaderSocialPage";

export default function SocialPageLayout() {
  return (
    <StyledSocialPage>
      <HeaderSocial />
      <main>
        <Outlet />
      </main>
    </StyledSocialPage>
  );
}

export function SocialPage() {
  return (
    <>
      <PostFeeds />
      <SignInContainer />
    </>
  );
}
