import {
  StyledPost,
  StyledDraft,
  StyledCheck,
  StyledMarkdown,
  StyledCreatePost,
  StyledButtonTags,
  StyledPostOptions,
  StyledTitleHeader,
  StyledPostTextArea,
  StyleActionButtons,
  StyledChooseCommunity,
  StyledPostInputFields,
} from "./StyledCreatePost";
import { GrAdd } from "react-icons/gr";
import { BsMic } from "react-icons/bs";
import { BiPoll } from "react-icons/bi";
import { FiLink } from "react-icons/fi";
import { AiOutlineTag } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { TbCircleDotted } from "react-icons/tb";
import { IoImageOutline } from "react-icons/io5";
import { NoteSVG } from "../assets/Svg/SocialSVG";
import { RiErrorWarningLine } from "react-icons/ri";

export default function CreatePost() {
  return (
    <StyledCreatePost>
      <TitleHeader />
      <ChooseCommunity />
      <PostOptions />
      <Post />
      <ButtonTags />
      <ActionButtons />
      <Check />
    </StyledCreatePost>
  );
}

const buttonTagsArray = [
  { svg: <GrAdd />, name: "OC" },
  { svg: <GrAdd />, name: "Spoiler" },
  { svg: <GrAdd />, name: "NSFW" },
  { svg: <AiOutlineTag />, name: "Flair" },
];

function ButtonTags() {
  return (
    <StyledButtonTags>
      {buttonTagsArray.map((item, index) => (
        <button key={index} disabled>
          {item.svg} <span>{item.name}</span>
        </button>
      ))}
    </StyledButtonTags>
  );
}

function Post() {
  return (
    <StyledPost>
      <PostInputFields />
      <Markdown />
      <PostTextArea />
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

function PostTextArea() {
  return (
    <StyledPostTextArea>
      <textarea name="text" id="" cols={10} rows={10}></textarea>
    </StyledPostTextArea>
  );
}

function TitleInput() {
  return <input type="text" name="title" placeholder="Text (Optional)" />;
}

const postOptionsArray = [
  { svg: <NoteSVG />, name: "Post" },
  { svg: <IoImageOutline />, name: "Images & Video" },
  { svg: <FiLink />, name: "Link" },
  { svg: <BiPoll />, name: "Poll" },
  { svg: <BsMic />, name: "Talk" },
];

function PostOptions() {
  return (
    <StyledPostOptions>
      {postOptionsArray.map((item, index) => (
        <button key={index}>
          {item.svg}
          <p>{item.name}</p>
        </button>
      ))}
    </StyledPostOptions>
  );
}

function ChooseCommunity() {
  return (
    <StyledChooseCommunity>
      <div>
        <TbCircleDotted />
        <p>Choose a community</p>
      </div>
      <FiChevronDown />
    </StyledChooseCommunity>
  );
}

function TitleHeader() {
  return (
    <StyledTitleHeader>
      <h2>Create a post</h2>
      <Draft />
    </StyledTitleHeader>
  );
}

function Draft() {
  return (
    <StyledDraft>
      <p>
        DRAFTS <span>0</span>
      </p>
    </StyledDraft>
  );
}

function ActionButtons() {
  return (
    <StyleActionButtons>
      <button>Save Draft</button>
      <button>Post</button>
    </StyleActionButtons>
  );
}

function Check() {
  return (
    <StyledCheck>
      <div>
        <label htmlFor="check">Send me post reply notifications</label>
        <input type="checkbox" name="check" id="check" />
      </div>
      <p>
        Connect accounts to share your post <RiErrorWarningLine />
      </p>
    </StyledCheck>
  );
}
