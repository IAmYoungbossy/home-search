import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { useContext } from "react";

import CreateOrEditPost, {
  editPostLoader,
} from "../../pages/CreateOrEditPost";
import { postLoader } from "../Cards/PostCards";
import { HomeSearch } from "../../pages/HomeSearch";
import { contextProps } from "../../utilities/types";
import { AppContext } from "../../context/AppContext";
import Comment, { commentLoader } from "../../pages/Comment";
import HomeSearchLayout from "../../Layouts/HomeSearchLayout";
import { onClickToggleButtonTags } from "../../utilities/helper";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<HomeSearchLayout />}
    >
      <Route
        index
        element={<HomeSearch />}
        loader={postLoader}
      />
      <Route
        path="edit-post/:id"
        element={<CreateOrEditPost />}
        loader={editPostLoader}
      />
      <Route
        path="create-post"
        element={<CreateOrEditPost />}
      />
      <Route
        path="comment/:id"
        element={<Comment />}
        loader={commentLoader}
      />
    </Route>
  ),
  { basename: "/" }
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
