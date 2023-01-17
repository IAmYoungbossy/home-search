import { SearchSVG } from "../assets/header/SvgMarkUp";
import HeroImage from "../assets/hp-hero-desktop-xl.webp";
import {
  StyledHero,
  StyledHeroText,
  StyledSearchInputField,
} from "./StyledHero";

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
        <SearchInputField />
      </div>
    </StyledHeroText>
  );
}

export function SearchInputField() {
  return (
    <StyledSearchInputField>
      <input type="search" name="search" placeholder="Surprise, AZ" />
      <button>
        <SearchSVG />
      </button>
    </StyledSearchInputField>
  );
}
