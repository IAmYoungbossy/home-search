import { Route, Routes } from "react-router-dom";
import SocialPage from "../SocialPage/SocialPage";
import LandingPage from "../LandingPage/LandingPage";
import AppDataProvider from "../../context/AppContext";

function App() {
  return (
    <div>
      <AppDataProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/social" element={<SocialPage />} />
        </Routes>
      </AppDataProvider>
    </div>
  );
}

export default App;
