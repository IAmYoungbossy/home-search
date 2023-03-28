import {
  contextProps,
  IShowPostCard,
  APP_ACTION_TYPES,
} from "../../utilities/types";
import { Outlet } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { Header } from "../Header/Header";
import { useContext, useEffect } from "react";
import PostFeeds from "../PostFeeds/PostFeeds";
import SignInContainer from "../SignIn/SignIn";
import { AppContext } from "../../context/AppContext";
import { StyledSocialPage } from "../Header/StyledHeader";
import {
  collection,
  collectionGroup,
  onSnapshot,
} from "firebase/firestore";

export default function SocialPageLayout() {
  const { dispatch } = useContext(
    AppContext
  ) as contextProps;

  useEffect(() => {
    const postsRef = collectionGroup(db, "POSTS");
    const unSubPosts = onSnapshot(postsRef, (snapshot) => {
      const posts = snapshot.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      })) as IShowPostCard[];
      dispatch({
        type: APP_ACTION_TYPES.postFeed,
        payload: posts,
      });
    });

    return () => {
      unSubPosts();
    };
  }, []);

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
