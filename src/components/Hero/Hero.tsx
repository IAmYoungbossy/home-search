import { StyledHero } from "./StyledHero";
import HeroImage from "../assets/hp-hero-desktop-xl.webp";

export default function Hero() {
  return (
    <StyledHero>
      <img src={HeroImage} alt="Lanscape of beautiful houses" />
    </StyledHero>
  );
}
