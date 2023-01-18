import { IoMdRocket } from "react-icons/io";
import { BsGearWide } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { BsArrowBarUp } from "react-icons/bs";
import { HiOutlineFire } from "react-icons/hi";
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

const StyledFilterIcons = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
`;

const StyledFilterBar = styled(StyledFilterIcons)`
  max-width: 600px;
  margin: 10px auto;
  padding: 12px 20px;
  background-color: white;
  border: 1px solid #d0d2d4;
  justify-content: space-between;

  div {
    gap: 10px;
    display: flex;
    max-width: 340px;
    align-items: center;
    justify-content: space-between;
  }

  svg {
    width: 25px;
    height: 25px;
  }
`;
