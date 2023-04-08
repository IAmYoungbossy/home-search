import InputTag from "./InputTag";
import { useContext } from "react";
import ButtonTag, { IButtonTag } from "./ButtonTag";
import { contextProps } from "../../utilities/types";
import { AppContext } from "../../context/AppContext";
import { BUTTON_TAGS } from "../../constant/objectConstant";
import { StyledButtonTagsContainer } from "./StyledCreatePost";
import { toggleBtnAndInputField } from "../../utilities/createPostHelperFn";

export function DisplayButtonTags() {
  return (
    <StyledButtonTagsContainer>
      {BUTTON_TAGS.map((item) => (
        <ToggleBtweenButtonAndInput
          key={item.name}
          item={item}
        />
      ))}
    </StyledButtonTagsContainer>
  );
}

function ToggleBtweenButtonAndInput({ item }: IButtonTag) {
  const { state } = useContext(AppContext) as contextProps;
  return (
    <>
      {toggleBtnAndInputField(
        item.name,
        state.buttonTagsToggle
      ) ? (
        <ButtonTag item={item} />
      ) : (
        <InputTag name={item.name} />
      )}
    </>
  );
}
