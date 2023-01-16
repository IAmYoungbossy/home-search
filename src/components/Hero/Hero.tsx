import { StyledHero, StyledHeroText } from "./StyledHero";
import HeroImage from "../assets/hp-hero-desktop-xl.webp";
import { SearchSVG } from "../assets/header/SvgMarkUp";

export default function Hero() {
  return (
    <StyledHero bgImage={HeroImage}>
      <HeroText />
    </StyledHero>
  );
}

const heroLinks = [
  "BUY",
  "RENT",
  "SELL",
  "PRE-APPROVAL",
  "JUST SOLD",
  "HOME VALUE",
];

function HeroText() {
  return (
    <StyledHeroText>
      <div>
        <h1>To each their home.</h1>
        <p>Let's find a home that's perfect for you</p>
        <ul>
          {heroLinks.map((link) => (
            <li key={link}>{link}</li>
          ))}
        </ul>
        <div>
          <input type="search" name="search" placeholder="Surprise, AZ" />
          <button>
            <SearchSVG />
          </button>
        </div>
      </div>
    </StyledHeroText>
  );
}
