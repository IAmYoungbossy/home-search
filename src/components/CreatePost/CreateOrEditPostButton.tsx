import Tags from "./Tags";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { contextProps } from "../../utilities/types";
import { AppContext } from "../../context/AppContext";
import { StyleActionButtons } from "./StyledCreatePost";
import { preventEmptyFieldSubmition } from "../../utilities/helper";
import { AddPostToDB } from "../../firebase/firebaseCRUD/addPostToFirestore";

export default function CreateOrEditPostButton() {
  const { state, dispatch } = useContext(
    AppContext
  ) as contextProps;

  const allFieldsFilled = preventEmptyFieldSubmition(state);

  return (
    <StyleActionButtons bg={allFieldsFilled}>
      <Tags />
      <div>
        <button>Save Draft</button>
        <button
          onClick={AddPostToDB.bind(null, state, dispatch)}
        >
          <Link to="/">
            {state.postType === "create"
              ? "Create Post"
              : "Save Edit"}
          </Link>
        </button>
      </div>
    </StyleActionButtons>
  );
}
