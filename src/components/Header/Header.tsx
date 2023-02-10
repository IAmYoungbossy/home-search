import { AppContext, AppContextProps } from "../../context/AppContext";
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
import { Fragment, useContext } from "react";
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

export function CTAButtons() {
  return (
    <StyledCTAButtons>
      {buttonContent.map((content) => (
        <Button key={content}>{content}</Button>
      ))}
    </StyledCTAButtons>
  );
}

export function UserIcon() {
  const { handleSignInPageToggle } = useContext(AppContext) as AppContextProps;

  return (
    <StyledUserIcon onClick={handleSignInPageToggle}>
      <HeartSVG />
      <UserButton />
    </StyledUserIcon>
  );
}

export function HeaderLogo() {
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
        <AddRegisteredTradeMark string={link} />
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
        <AddRegisteredTradeMark string={header} />
      </h4>
      <ul>{lists}</ul>
    </section>
  );
}

function listItems(list: string, index: number) {
  return (
    <li key={index}>
      <AddRegisteredTradeMark string={list} />
    </li>
  );
}

export function AddRegisteredTradeMark({ string }: { string: string }) {
  if (string === "hr") return <hr />;
  const wordsToArrayItems = splitWords(string);
  const wordsToEdit = searchWord(wordsToArrayItems);
  const supScript = addSuperScript(wordsToEdit);
  const replaceWithEdited = replaceWithEditedWords(
    supScript,
    wordsToArrayItems
  );
  return <StringToJSX stringArray={replaceWithEdited} />;
}

export function splitWords(string: string) {
  return string.split(" ");
}

export function searchWord(array: string[]) {
  return array
    .map((word, index) => ({ word: word, index: index }))
    .filter(
      (obj) =>
        obj.word.toLowerCase() === "realtor" ||
        obj.word.toLowerCase() === "realtors"
    );
}

type addSuperScriptProps = { word: string; index: number }[];

export function addSuperScript(array: addSuperScriptProps) {
  return array.map((word) => ({
    word: (
      <>
        {word.word}
        <sup>&reg;</sup>
      </>
    ),
    index: word.index,
  }));
}

type supScrptType = { word: JSX.Element; index: number }[];

export function replaceWithEditedWords(
  supScrpt: supScrptType,
  splitWords: string[]
) {
  const splitWordsCopy: (string | JSX.Element)[] = [...splitWords];
  if (supScrpt.length > 0) {
    supScrpt.forEach((item) => {
      splitWordsCopy.splice(item.index, 1, item.word);
    });
  }
  return splitWordsCopy;
}

interface DisplayStringsProps {
  stringArray: (string | JSX.Element)[];
}

export function StringToJSX({ stringArray }: DisplayStringsProps) {
  const getStringsToJSX = (item: string | JSX.Element, index: number) => (
    <Fragment key={index}> {item} </Fragment>
  );

  return <>{stringArray.map(getStringsToJSX)}</>;
}
