import Comment from "../Comment/Comment";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import CreatePostPage from "../CreatePost/CreatePost";
import AppDataProvider from "../../context/AppContext";
import SocialPage, { PostPage } from "../SocialPage/SocialPage";

function App() {
  return (
    <div>
      <AppDataProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route index element={<LandingPage />} />
          <Route path="social" element={<SocialPage />}>
            <Route index element={<PostPage />} />
            <Route path="comment" element={<Comment />} />
            <Route path="post" element={<CreatePostPage />} />
          </Route>
        </Routes>
      </AppDataProvider>
    </div>
  );
}

export default App;
