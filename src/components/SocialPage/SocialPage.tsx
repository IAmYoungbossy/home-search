import {
  onSnapshot,
  collectionGroup,
} from "firebase/firestore";
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

export default function SocialPageLayout() {
  const { dispatch } = useContext(
    AppContext
  ) as contextProps;

  /********************************************************
   ** Listens to Posts collection for any changes in its ***
   ** documents and update in realtime *********************
   *********************************************************/
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
  }, [db, dispatch]);

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
