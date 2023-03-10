import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { useContext } from "react";
import { postLoader } from "../PostFeeds/PostFeeds";
import { AppContext } from "../../context/AppContext";
import Comment, { commentLoader } from "../Comment/Comment";
import { contextProps } from "../../utilities/typesAndInitialStateObj";
import SocialPageLayout, { SocialPage } from "../SocialPage/SocialPage";
import CreatePostPage, { editPostLoader } from "../CreatePost/CreatePost";
import LandingPage, { LandingPageLayout } from "../LandingPage/LandingPage";
import { onClickToggleButtonTags } from "../../utilities/createPostHelperFn";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LandingPageLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="social" element={<SocialPageLayout />}>
        <Route index element={<SocialPage />} loader={postLoader} />
        <Route
          path="edit/:id"
          element={<CreatePostPage />}
          loader={editPostLoader}
        />
        <Route path="post" element={<CreatePostPage />} />
        <Route
          path="comment/:id"
          element={<Comment />}
          loader={commentLoader}
        />
      </Route>
    </Route>
  )
);

function App() {
  const { dispatch } = useContext(AppContext) as contextProps;

  return (
    <div onClick={() => onClickToggleButtonTags(dispatch)}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
