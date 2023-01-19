import { IoMdRocket } from "react-icons/io";
import { BsGearWide } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { BsArrowBarUp } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { HiOutlineFire } from "react-icons/hi";
import { RxViewHorizontal } from "react-icons/rx";
import styled from "styled-components";

interface FilterIconsProps {
  icon: JSX.Element;
  name: string;
}

const iconsArray = [
  { icon: <IoMdRocket />, name: "Best" },
  { icon: <HiOutlineFire />, name: "Hot" },
  { icon: <BsGearWide />, name: "New" },
  { icon: <BsArrowBarUp />, name: "Top" },
  { icon: <BsThreeDots />, name: "" },
];

export default function FilterBar() {
  const filterList = iconsArray.map(filterIcons);
  return (
    <StyledFilterBar>
      <div>{filterList}</div>
      <PageView />
    </StyledFilterBar>
  );
}

function filterIcons(item: FilterIconsProps, index: number) {
  return (
    <StyledFilterIcons key={index}>
      {item.icon}
      <span>{item.name}</span>
    </StyledFilterIcons>
  );
}

function PageView() {
  return (
    <StyledPageView>
      <RxViewHorizontal />
      <BiChevronDown />
    </StyledPageView>
  );
}

const StyledFilterIcons = styled.div`
  gap: 5px;
  display: flex;
  align-items: center;
`;

const StyledPageView = styled(StyledFilterIcons)`
  gap: 8px;
  width: auto;
  justify-content: flex-end;
`;

const StyledFilterBar = styled(StyledFilterIcons)`
  max-width: 600px;
  margin: 10px auto;
  padding: 12px 7px;
  background-color: white;
  border: 1px solid #d0d2d4;
  justify-content: space-between;

  & > div:first-of-type {
    gap: 6px;
    width: 100%;
    display: flex;
    max-width: 340px;
    align-items: center;
    justify-content: space-between;
  }

  svg {
    width: 22px;
    height: 22px;
  }
`;
