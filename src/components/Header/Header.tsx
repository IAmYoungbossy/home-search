import {
  Button,
  StyledHeader,
  StyledNavLinks,
  StyledUserIcon,
  StyledCTAButtons,
  StyledUserButton,
  StyledHeaderLogo,
  StyledHeaderLogoAndNav,
  DropDown,
} from "./Header.styled";
import Logo from "../assets/header/Logo.svg";
import { dropdownList } from "./dropdownList";
import { ArrowDownSVG, HeartSVG, UserSVG } from "../assets/header/SvgMarkUp";

export default function Header() {
  return (
    <StyledHeader>
      <HeaderLogoAndNav />
      <CTAButtons />
      <UserIcon />
    </StyledHeader>
  );
}

function HeaderLogoAndNav() {
  return (
    <StyledHeaderLogoAndNav>
      <HeaderLogo />
      <NavLinks />
    </StyledHeaderLogoAndNav>
  );
}

function HeaderLogo() {
  return (
    <StyledHeaderLogo>
      <img src={Logo} alt="Logo" />
    </StyledHeaderLogo>
  );
}

const navLinks = [
  "Buy",
  "Sell",
  "Rent",
  "Mortgage",
  "Find Realtors",
  "My Home",
  "News & Insights",
];

type ListType = { children?: JSX.Element; link: string };

const List = ({ children, link }: ListType) => {
  return (
    <li key={link}>
      <div>
        {link}
        <sup>&reg;</sup>
      </div>
      {children}
    </li>
  );
};

function NavLinks() {
  const showList = (link: string) => {
    if (link === "Find Realtors") return <List link={link} />;
    return (
      <List link={link}>
        <DropDown>{DropDownList({ navLinkName: link })}</DropDown>
      </List>
    );
  };

  return (
    <StyledNavLinks>
      <ul>{navLinks.map(showList)}</ul>
    </StyledNavLinks>
  );
}

const buttonContent = ["Manage Rentals", "Advertise"];

function CTAButtons() {
  return (
    <StyledCTAButtons>
      {buttonContent.map((content) => (
        <Button key={content}>{content}</Button>
      ))}
    </StyledCTAButtons>
  );
}

function UserIcon() {
  return (
    <StyledUserIcon>
      <HeartSVG />
      <UserButton />
    </StyledUserIcon>
  );
}

function UserButton() {
  return (
    <StyledUserButton>
      <UserSVG />
      <ArrowDownSVG />
    </StyledUserButton>
  );
}

type sectionType = { SectionName: string; SectionList: string[] }[];
type sectionListType = { SectionName: string; SectionList: string[] };

const getDropDown = (navLinkName: string) =>
  dropdownList.filter((dropDown) => dropDown.LinkName === navLinkName)[0];

const listItems = (list: string, index: number) => <li key={index}>{list}</li>;

const displaySectionList = (sectionList: sectionListType) => {
  const header = sectionList.SectionName;
  const lists = sectionList.SectionList.map(listItems);
  return (
    <section key={header}>
      <h4>{header}</h4>
      <ul>{lists}</ul>
    </section>
  );
};

const getSectionList = (section: sectionType) =>
  section.map(displaySectionList);

function DropDownList({ navLinkName }: { navLinkName: string }) {
  const dropDownObj = getDropDown(navLinkName);
  if (!dropDownObj) return null;
  const sectionList = dropDownObj.dropDown.map(getSectionList);
  return sectionList;
}
