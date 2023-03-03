import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import SignInContainer from "../SignIn/SignIn";
import MainLandingPage from "../MainContent/Main";

export const LandingPageLayout = () => <Outlet />;

export default function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <MainLandingPage />
      <Footer />
      <SignInContainer />
    </>
  );
}
