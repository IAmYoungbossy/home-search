import { useContext } from "react";
import { StyledPostAs } from "./StyledCreatePost";
import { contextProps } from "../../utilities/types";
import { AppContext } from "../../context/AppContext";
import { onChangeSetPostAs } from "../../utilities/createPostHelperFn";

export default function PostAs() {
  const { state, dispatch } = useContext(
    AppContext
  ) as contextProps;

  return (
    <StyledPostAs
      id="post-as"
      name="post-as"
      value={state.post.postAsAgent ? "agent" : "client"}
      onChange={(e) => onChangeSetPostAs(e, dispatch)}
    >
      <option value="client">a Client</option>
      <option value="agent">an Agent</option>
    </StyledPostAs>
  );
}
