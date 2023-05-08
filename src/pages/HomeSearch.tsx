import { useEffect } from "react";
import PostFeeds from "../components/PostFeeds/PostFeeds";
import SignInContainer from "../components/SignIn/SignInContainer";

export function HomeSearch() {
  useEffect(() => {
    document.title = "Home Search | Home";
  }, []);

  return (
    <>
      <PostFeeds />
      <SignInContainer />
    </>
  );
}
