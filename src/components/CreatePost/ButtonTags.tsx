import {
  StyledButtonTags,
  StyledButtonTagsContainer,
} from "./StyledCreatePost";
import InputTag from "./InputTag";
import { useContext } from "react";
import {
  btnTagsOnClick,
  toggleDealStatus,
  toggleBtnAndInputField,
  isAlwaysActive,
} from "../../utilities/createPostHelperFn";
import { contextProps } from "../../utilities/types";
import { AppContext } from "../../context/AppContext";
import { tagsContent } from "../../constant/objectConstant";

interface IButtonTag {
  item: {
    svg: JSX.Element;
    name: string;
  };
}

const tagsArray = tagsContent.map((item) => (
  <BtnAndInput
    key={item.name}
    item={item}
  />
));

export function ButtonTags() {
  return (
    <StyledButtonTagsContainer>
      {tagsArray}
    </StyledButtonTagsContainer>
  );
}

export default function BtnAndInput({ item }: IButtonTag) {
  const { state } = useContext(AppContext) as contextProps;
  return (
    <>
      {toggleBtnAndInputField(
        item.name,
        state.buttonTagsToggle
      ) && <ButtonTag item={item} />}
      {!toggleBtnAndInputField(
        item.name,
        state.buttonTagsToggle
      ) && <InputTag name={item.name} />}
    </>
  );
}

function ButtonTag({ item }: IButtonTag) {
  const { state, dispatch } = useContext(
    AppContext
  ) as contextProps;
  const dealStatus = state.tagButton["Deal Status"];

  return (
    <StyledButtonTags disabled={isAlwaysActive(item, state)}>
      <button
        disabled={isAlwaysActive(item, state)}
        onClick={(e) => {
          e.stopPropagation();
          btnTagsOnClick(item.name, true, dispatch);
          toggleDealStatus({
            e,
            dealStatus,
            dispatch,
          });
        }}
      >
        {item.svg}{" "}
        <span>
          {item.name !== "Deal Status" ? item.name : dealStatus}
        </span>
      </button>
    </StyledButtonTags>
  );
}
