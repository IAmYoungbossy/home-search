import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import SocialPageLayout, {
  SocialPage,
} from "../SocialPage/SocialPage";

import CreatePostPage, {
  editPostLoader,
} from "../CreatePost/CreatePost";

import { useContext } from "react";
import { postLoader } from "../Cards/PostCards";
import { contextProps } from "../../utilities/types";
import { AppContext } from "../../context/AppContext";
import Comment, { commentLoader } from "../Comment/Comment";
import { onClickToggleButtonTags } from "../../utilities/helper";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<SocialPageLayout />}
    >
      <Route
        index
        element={<SocialPage />}
        loader={postLoader}
      />
      <Route
        path="edit-post/:id"
        element={<CreatePostPage />}
        loader={editPostLoader}
      />
      <Route
        path="create-post"
        element={<CreatePostPage />}
      />
      <Route
        path="comment/:id"
        element={<Comment />}
        loader={commentLoader}
      />
    </Route>
  ),
  { basename: "/home-search" }
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
