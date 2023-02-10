import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MainLandingPage from "../MainContent/Main";
import SignInContainer from "../SignIn/SignIn";

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
