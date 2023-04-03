import { useContext } from "react";
import {
  disableButton,
  toggleTextarea,
} from "../../utilities/createPostHelperFn";
import { contextProps } from "../../utilities/types";
import { AppContext } from "../../context/AppContext";
import { StyledPostOptions } from "./StyledCreatePost";
import { postOptionsArray } from "../../constant/objectConstant";

export default function PostOptions() {
  const { state, dispatch } = useContext(
    AppContext
  ) as contextProps;

  return (
    <StyledPostOptions post={state.uploadImage}>
      {postOptionsArray.map((item, index) => (
        <button
          key={index}
          disabled={disableButton(item.name, state)}
          onClick={toggleTextarea.bind(
            null,
            item.name,
            state,
            dispatch
          )}
        >
          {item.svg}
          <p>{item.name}</p>
        </button>
      ))}
    </StyledPostOptions>
  );
}
