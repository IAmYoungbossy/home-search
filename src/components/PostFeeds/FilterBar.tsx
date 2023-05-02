import styled from "styled-components";
import { BiChevronDown } from "react-icons/bi";
import { RxViewHorizontal } from "react-icons/rx";
import { iconsArray } from "../../constant/objectConstant";

interface FilterIconsProps {
  icon: JSX.Element;
  name: string;
}

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
    <div key={index}>
      {item.icon}
      <span>{item.name}</span>
    </div>
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
  padding: 12px 7px;
  border: 1px solid #d0d2d4;
  justify-content: space-between;
  background-color: var(--light-bg-color-primary);

  & > div:first-of-type {
    gap: 6px;
    width: 100%;
    display: flex;
    align-items: center;

    & > div {
      gap: 5px;
      display: flex;
      align-items: center;
    }

    & > div:last-child {
      margin-left: auto;
    }

    @media screen and (max-width: 365px) {
      & > div:nth-child(2),
      & > div:nth-child(3),
      & > div:nth-child(4) {
        display: none;
      }
    }
  }

  svg {
    width: 22px;
    height: 22px;
    fill: #2f4f4f96;
  }

  & > div:first-child > div:nth-child(2) > svg {
    fill: none;
    stroke-opacity: 0.5;
  }

  & > div:last-child > svg:first-child {
    fill-opacity: 0.4;
  }
`;
