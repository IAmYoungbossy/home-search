import { Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { AppContext } from "../context/AppContext";
import { Header } from "../components/Header/Header";
import { sortPostByCreatedAt } from "../utilities/helper";
import { contextProps, IShowPostCard } from "../utilities/types";
import { collectionGroup, onSnapshot } from "firebase/firestore";
import { StyledSocialPage } from "../components/Header/StyledHeader";

export default function HomeSearchLayout() {
  const { dispatch } = useContext(AppContext) as contextProps;

  /*********************************************************
   ** Listens to Posts collection for any changes in its ***
   ** documents and update in realtime *********************
   *********************************************************/
  useEffect(() => {
    const postsRef = collectionGroup(db, "POSTS");

    const unSubPosts = onSnapshot(postsRef, (snapshot) => {
      // Gets all Posts from each users' POST subcollection
      const posts = snapshot.docs.map((doc) => ({
        data: doc.data(),
        id: doc.id,
      })) as IShowPostCard[];

      // Sorts in reverse chronological order
      sortPostByCreatedAt(posts, dispatch);
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
