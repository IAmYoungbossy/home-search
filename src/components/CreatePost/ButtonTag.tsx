import {
  isAlwaysActive,
  toggleDealStatus,
  updateTagButtonsState,
} from "../../utilities/helper";
import { useContext } from "react";
import { contextProps } from "../../utilities/types";
import { AppContext } from "../../context/AppContext";
import { StyledButtonTags } from "./StyledCreatePost";

export interface IButtonTag {
  item: {
    name: string;
    svg: JSX.Element;
  };
}

export default function ButtonTag({ item }: IButtonTag) {
  const { state, dispatch } = useContext(
    AppContext
  ) as contextProps;

  const dealStatus = state.tagButton["Deal Status"];

  const handleButtonState = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    updateTagButtonsState(item.name, true, dispatch);
    toggleDealStatus({ e, dealStatus, dispatch });
  };

  return (
    <StyledButtonTags disabled={isAlwaysActive(item, state)}>
      <button
        onClick={handleButtonState}
        disabled={isAlwaysActive(item, state)}
      >
        {item.svg}{" "}
        <span>
          {item.name !== "Deal Status" ? item.name : dealStatus}
        </span>
      </button>
    </StyledButtonTags>
  );
}
