import { useContext } from "react";
import Comment from "../Comment/Comment";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import { AppContext } from "../../context/AppContext";
import CreatePostPage from "../CreatePost/CreatePost";
import SocialPage, { PostPage } from "../SocialPage/SocialPage";
import { btnTagsOnClick } from "../../utilities/createPostHelperFn";
import { contextProps } from "../../utilities/typesAndInitialStateObj";

function App() {
  const { dispatch } = useContext(AppContext) as contextProps;

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        btnTagsOnClick("App", false, dispatch);
      }}
    >
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="social" element={<SocialPage />}>
          <Route index element={<PostPage />} />
          <Route path="comment" element={<Comment />} />
          <Route path="post" element={<CreatePostPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
