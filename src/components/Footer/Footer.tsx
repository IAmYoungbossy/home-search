import {
  StyledFooter,
  StyledGetTheApp,
  StyledSocialIcons,
  StyledFooterLinks,
  StyledDisclosures,
} from "./StyledFooter";
import {
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaLinkedinIn,
} from "react-icons/fa";
import { footerLinksArray } from "./footerLinks";
import ApplePlay from "../assets/footer/google-play-store-badge-en.svg";
import GooglePlay from "../assets/footer/download-on-the-app-store-badge_us.svg";

const socialIconsArray = [
  <FaFacebook />,
  <FaTwitter />,
  <FaInstagram />,
  <FaLinkedinIn />,
  <FaPinterest />,
  <FaYoutube />,
];

export default function Footer() {
  return (
    <>
      <Disclosures />
      <StyledFooter>
        <div>
          <SocialIcons />
          <FooterLinks />
          <GetTheApp />
        </div>
      </StyledFooter>
    </>
  );
}

function Disclosures() {
  return (
    <StyledDisclosures>
      <small>
        <h5>Advertising Disclosure.</h5>
        <p>
          Presented by Mortgage Research Center, LLC. A mortgage licensee. NMLS
          ID 1907. Equal Housing Opportunity.
        </p>
      </small>
    </StyledDisclosures>
  );
}

function SocialIcons() {
  return (
    <StyledSocialIcons>
      <ul>
        {socialIconsArray.map((icon, index) => (
          <li key={index}>{icon}</li>
        ))}
      </ul>
    </StyledSocialIcons>
  );
}

function FooterLinks() {
  return (
    <StyledFooterLinks>
      <ul>
        {footerLinksArray.map((link, index) => (
          <li key={index}>{link}</li>
        ))}
      </ul>
      <p>Do Not Sell My Personal Information</p>
    </StyledFooterLinks>
  );
}

function GetTheApp() {
  return (
    <StyledGetTheApp>
      <h5>GET THE APP</h5>
      <div>
        <img src={ApplePlay} alt="Download on Apple Play" />
        <img src={GooglePlay} alt="Download on Google Play" />
      </div>
    </StyledGetTheApp>
  );
}
