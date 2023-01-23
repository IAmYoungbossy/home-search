import { GrAdd } from "react-icons/gr";
import { BsMic } from "react-icons/bs";
import styled from "styled-components";
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
        <div key={index}>
          {item.svg}
          <p>{item.name}</p>
        </div>
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

const StyledCheck = styled.div`
  padding: 20px 10px;
  background-color: #f6f7f8;

  div {
    gap: 5px;
    display: flex;
  }
`;

const StyleActionButtons = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: flex-end;
  background-color: white;

  button {
    padding: 4px 8px;
    border-radius: 20px;
    background-color: transparent;
  }

  & > button:last-child {
    background-color: #1c1c1c;
  }
`;

const StyledTitleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 18px;
    font-family: "IBMPlexsans";
  }
`;

const StyledDraft = styled.div`
  color: #1181d4;
  padding: 4px 8px;
  border-radius: 20px;

  &:hover {
    background-color: #cbd0d6;
  }

  span {
    padding: 2px;
    color: white;
    background-color: #878a8c;
  }
`;

const StyledPostOptions = styled.div`
  width: 100%;
  display: flex;
  font-size: 14px;
  max-width: 600px;
  overflow-x: auto;
  margin-top: 10px;
  background-color: white;
  font-family: "IBMPlanSans", Arial, sans-serif;

  div {
    flex: 1;
    gap: 5px;
    display: flex;
    padding: 15px 17px;
    align-items: center;
    min-width: max-content;
    justify-content: flex-start;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const StyledChooseCommunity = styled.div`
  display: flex;
  max-width: 250px;
  padding: 5px 10px;
  align-items: center;
  background-color: white;
  justify-content: space-between;

  & > div {
    gap: 10px;
    display: flex;
    align-items: center;
  }

  svg {
    font-size: 24px;
  }
`;

const StyledButtonTags = styled.div`
  gap: 10px;
  width: 100%;
  display: flex;
  padding: 15px 10px 15px;
  background-color: white;
  border-bottom: 1px solid grey;

  button {
    gap: 5px;
    display: flex;
    outline: none;
    padding: 5px 12px;
    border-radius: 20px;
    border: 1px solid grey;
    background-color: transparent;
  }
`;

const StyledMarkdown = styled.div`
  display: flex;
  padding: 5px 0;
  font-size: 12px;
  margin-top: 10px;
  align-items: center;
  border: 1px solid grey;
  background-color: #f6f7f8;
  justify-content: space-between;
  border-bottom: none;

  p {
    padding: 4px 8px;
    border-radius: 20px;
    &:hover {
      background-color: #1c1c1c24;
    }
  }

  h3 {
    gap: 5px;
    display: flex;
    align-items: center;
  }

  svg {
    width: 15px;
    height: 15px;
  }
`;

const StyledPostTextArea = styled.div`
  width: 100%;

  textarea {
    width: 100%;
    padding: 5px;
    resize: vertical;
    border-top: none;
  }
`;

const StyledPostInputFields = styled.div`
  width: 100%;

  input {
    width: 100%;
  }
`;

const StyledCreatePost = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 50px auto;
`;

const StyledPost = styled.div`
  padding: 0 15px 15px;
  background-color: white;
`;
