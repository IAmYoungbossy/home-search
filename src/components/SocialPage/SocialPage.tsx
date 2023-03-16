import { Outlet } from "react-router-dom";
import PostFeeds from "../PostFeeds/PostFeeds";
import SignInContainer from "../SignIn/SignIn";
import { Header } from "../Header/Header";
import { StyledSocialPage } from "../Header/StyledHeader";

export default function SocialPageLayout() {
  return (
    <StyledSocialPage>
      <Header />
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
