import { useContext } from "react";
import { contextProps } from "../../utilities/types";
import { AppContext } from "../../context/AppContext";
import { StyledPostTextArea } from "./StyledCreatePost";
import { handleInputChange } from "../../utilities/helper";

export default function PostTextArea() {
  const { state, dispatch } = useContext(
    AppContext
  ) as contextProps;

  return (
    <StyledPostTextArea>
      <textarea
        id=""
        cols={10}
        rows={10}
        name="text"
        value={state.post.postDesc}
        placeholder="Enter description here."
        onChange={(e) => handleInputChange(e, dispatch)}
      ></textarea>
    </StyledPostTextArea>
  );
}
