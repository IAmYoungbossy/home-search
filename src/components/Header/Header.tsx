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
import { Fragment } from "react";
import Logo from "../assets/header/Logo.svg";
import { dropdownList } from "./dropdownList";
import { ArrowDownSVG, HeartSVG, UserSVG } from "../assets/header/SvgMarkUp";

export default function Header() {
  return (
    <StyledHeader>
      <div>
        <HeaderLogoAndNav />
        <CTAButtons />
        <UserIcon />
      </div>
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

function NavLinks() {
  const showList = (link: string) => {
    return (
      <List link={link} key={link}>
        <DropDown>
          <div>{DropDownList({ navLinkName: link })}</div>
        </DropDown>
      </List>
    );
  };

  return (
    <StyledNavLinks>
      <ul>{navLinks.map(showList)}</ul>
    </StyledNavLinks>
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

type ListType = { children?: JSX.Element; link: string };
type sectionType = { SectionName: string; SectionList: string[] }[];
type sectionListType = { SectionName: string; SectionList: string[] };

function List({ children, link }: ListType) {
  return (
    <li key={link}>
      <div>
        <Registered string={link} />
      </div>
      {children}
    </li>
  );
}

function DropDownList({ navLinkName }: { navLinkName: string }) {
  const dropDownObj = getDropDown(navLinkName);
  if (!dropDownObj) return null;
  const sectionList = dropDownObj.dropDown.map(getSectionList);
  return sectionList;
}

function getDropDown(navLinkName: string) {
  return dropdownList.filter(
    (dropDown) => dropDown.LinkName === navLinkName
  )[0];
}

function getSectionList(section: sectionType) {
  return section.map(displaySectionList);
}

function displaySectionList(sectionList: sectionListType) {
  const header = sectionList.SectionName;
  const lists = sectionList.SectionList.map(listItems);
  return (
    <section key={header}>
      <h4>
        <Registered string={header} />
      </h4>
      <ul>{lists}</ul>
    </section>
  );
}

function listItems(list: string, index: number) {
  return (
    <li key={index}>
      <Registered string={list} />
    </li>
  );
}

export function Registered({ string }: { string: string }) {
  const wordArr: { word: string; index: number }[] = [];
  if (string === "hr") return <hr />;
  const stringArr = string.split(" ");
  const stringArrCopy: (string | JSX.Element)[] = [...stringArr];
  stringArrCopy.forEach((word, index) => {
    if (
      typeof word === "string" &&
      (word.toLowerCase() === "realtor" || word.toLowerCase() === "realtors")
    ) {
      wordArr.push({ word, index });
    }
  });
  if (wordArr.length > 0) {
    wordArr.forEach((item) => {
      stringArrCopy.splice(
        item.index,
        1,
        <>
          {item.word}
          <sup>&reg;</sup>
        </>
      );
    });
    return (
      <>
        {stringArrCopy.map((item, index) => {
          return <Fragment key={index}> {item} </Fragment>;
        })}
      </>
    );
  }
  return (
    <>
      {stringArrCopy.map((item, index) => {
        return <Fragment key={index}> {item} </Fragment>;
      })}
    </>
  );
}
