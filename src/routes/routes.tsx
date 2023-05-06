import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import CreateOrEditPost, {
  editPostLoader,
} from "../pages/CreateOrEditPost";
import { HomeSearch } from "../pages/HomeSearch";
import Comment, { commentLoader } from "../pages/Comment";
import HomeSearchLayout from "../Layouts/HomeSearchLayout";
import PageNotFound from "../components/PageNotFound/PageNotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<HomeSearchLayout />}
    >
      <Route
        index
        element={<HomeSearch />}
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
      <Route
        path="*"
        element={<PageNotFound />}
      />
    </Route>
  ),
  { basename: "/" }
);

export default router;
