import { useContext } from "react";
import {
  inputValue,
  setInputType,
  updateStateObj,
  updateTagButtonsState,
} from "../../utilities/createPostHelperFn";
import { GiCheckMark } from "react-icons/gi";
import { StyledInputTag } from "./StyledCreatePost";
import { contextProps } from "../../utilities/types";
import { AppContext } from "../../context/AppContext";

export default function InputTag({ name }: { name: string }) {
  const { state, dispatch } = useContext(
    AppContext
  ) as contextProps;

  return (
    <StyledInputTag>
      <input
        placeholder={name}
        type={setInputType(name)}
        onClick={(e) => e.stopPropagation()}
        value={inputValue(state, name) as string | number}
        onChange={(e) => updateStateObj(e, name, dispatch)}
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          updateTagButtonsState(name, false, dispatch);
        }}
      >
        <GiCheckMark />
      </button>
    </StyledInputTag>
  );
}
