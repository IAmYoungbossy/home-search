import {
  StyledPost,
  StyledMarkdown,
  StyledPostInputFields,
} from "./StyledCreatePost";
import { useContext } from "react";
import UploadImage from "./UploadImage";
import PostTextArea from "./PostTextArea";
import { DisplayButtonTags } from "./DisplayButtonTags";
import CreateOrEditPostButton from "./CreateOrEditPostButton";
import { RiErrorWarningLine } from "react-icons/ri";
import { contextProps } from "../../utilities/types";
import { AppContext } from "../../context/AppContext";
import { handleInput } from "../../utilities/helper";

export default function Post() {
  const { state } = useContext(AppContext) as contextProps;

  return (
    <StyledPost>
      {state.post.postAsAgent && <PostInputFields />}
      {!state.uploadImage && <Markdown />}
      {!state.uploadImage && <PostTextArea />}
      {state.uploadImage && <UploadImage />}
      <DisplayButtonTags />
      <CreateOrEditPostButton />
    </StyledPost>
  );
}

function PostInputFields() {
  return (
    <StyledPostInputFields>
      <TitleInput />
    </StyledPostInputFields>
  );
}

function Markdown() {
  return (
    <StyledMarkdown>
      <h3>
        Markdown <RiErrorWarningLine />
      </h3>
      <p>Switch to Fancy Paint Editor</p>
    </StyledMarkdown>
  );
}

function TitleInput() {
  const { state, dispatch } = useContext(
    AppContext
  ) as contextProps;

  return (
    <input
      type="text"
      name="title"
      placeholder="Title"
      value={state.post.postTitle}
      onChange={(e) => handleInput(e, dispatch)}
    />
  );
}
