import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { useContext } from "react";
import Comment from "../Comment/Comment";
import { AppContext } from "../../context/AppContext";
import CreatePostPage from "../CreatePost/CreatePost";
import SocialPage, { PostPage } from "../SocialPage/SocialPage";
import { contextProps } from "../../utilities/typesAndInitialStateObj";
import LandingPage, { LandingPageLayout } from "../LandingPage/LandingPage";
import { onClickToggleButtonTags } from "../../utilities/createPostHelperFn";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LandingPageLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="social" element={<SocialPage />}>
        <Route index element={<PostPage />} />
        <Route path="comment" element={<Comment />} />
        <Route path="post" element={<CreatePostPage />} />
      </Route>
    </Route>
  )
);

function App() {
  const { dispatch } = useContext(AppContext) as contextProps;

  return (
    <div onClick={(e) => onClickToggleButtonTags(dispatch, e)}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
