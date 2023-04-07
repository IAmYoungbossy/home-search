import {
  query,
  where,
  getDocs,
  collection,
} from "firebase/firestore";

import Tags from "./Tags";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import { contextProps } from "../../utilities/types";
import { AppContext } from "../../context/AppContext";
import { StyleActionButtons } from "./StyledCreatePost";
import { preventEmptyFieldSubmition } from "../../utilities/createPostHelperFn";
import { addPostToFirestore } from "../../firebase/firebaseCRUD/addPostToFirestore";

export default function ActionButtons() {
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
          onClick={async () => {
            // Gets current user doc id
            const q = query(
              collection(db, "USERS"),
              where("userId", "==", state.user?.uid)
            );
            const documents = await getDocs(q);
            const userDocId = documents.docs[0].data().docId;

            addPostToFirestore({
              dispatch,
              userDocId,
              postId: state.postId,
              postType: state.postType,
              postDesc: state.post.postDesc,
              imageUrl: state.post.imageURL,
              budget: state.tagButton.Budget,
              postTitle: state.post.postTitle,
              location: state.tagButton.Location,
              postAsAgent: state.post.postAsAgent,
              dealStatus: state.tagButton["Deal Status"],
              apartmentSize: state.tagButton["Apartment Size"],
            });
          }}
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
