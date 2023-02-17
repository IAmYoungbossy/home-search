import {
  Button,
  StyledTag,
  StyledPost,
  StyledDraft,
  StyledCheck,
  StyledPostAs,
  StyledWarning,
  StyledMarkdown,
  StyledInputTag,
  StyledButtonTags,
  StyledUplaodImage,
  StyledPostOptions,
  StyledTitleHeader,
  StyledRedditRules,
  StyledPostTextArea,
  StyleActionButtons,
  StyledCreatePostPage,
  StyledChooseCommunity,
  StyledPostInputFields,
  StyledRedditRulesHeader,
  StyledButtonTagsContainer,
} from "./StyledCreatePost";
import { useContext } from "react";
import { GrAdd } from "react-icons/gr";
import { BsMic } from "react-icons/bs";
import { BiPoll } from "react-icons/bi";
import { FiLink } from "react-icons/fi";
import { GiCheckMark } from "react-icons/gi";
import { AiOutlineTag } from "react-icons/ai";
import SignInContainer from "../SignIn/SignIn";
import { TbCircleDotted } from "react-icons/tb";
import { IoImageOutline } from "react-icons/io5";
import { NoteSVG } from "../assets/Svg/SocialSVG";
import { RiErrorWarningLine } from "react-icons/ri";
import { RuleSVG } from "../assets/socialPage/SocialSVG";
import {
  showTags,
  inputValue,
  handleInput,
  setInputType,
  setButtonState,
  updateStateObj,
  btnTagsOnClick,
  toggleDealStatus,
  onChangeSetPostAs,
  handleInputChange,
  toggleBtnAndInputField,
  makeBudgetBtnAlwaysActive,
  preventEmptyFieldSubmition,
} from "../../utilities/createPostHelperFn";
import { AppContext } from "../../context/AppContext";
import { contextProps } from "../../utilities/typesAndInitialStateObj";

export default function CreatePostPage() {
  return (
    <>
      <StyledCreatePostPage>
        <div>
          <TitleHeader />
          <ChooseCommunity />
          <PostOptions />
          <Post />
          <Check />
        </div>
        <div>
          <RedditRules />
          <Warning />
        </div>
      </StyledCreatePostPage>
      <SignInContainer />
    </>
  );
}

const redditRulesArr = [
  "Remember the human",
  "Behave like you would in real life",
  "Look for the original source of content",
  "Search for duplicates before posting",
  "Read the community's rules",
];

export function RedditRules() {
  return (
    <StyledRedditRules>
      <RedditRulesHeader />
      {redditRulesArr.map((rule, index) => (
        <div key={index}>
          {index + 1} {rule}
        </div>
      ))}
    </StyledRedditRules>
  );
}

function RedditRulesHeader() {
  return (
    <StyledRedditRulesHeader>
      <RuleSVG /> <h4>Posting to Reddit</h4>
    </StyledRedditRulesHeader>
  );
}

export function Warning() {
  return (
    <div>
      <StyledWarning>
        Please be mindful of reddit's <span>content policy</span> and practice
        good
        <span>reddiquette</span>.
      </StyledWarning>
    </div>
  );
}

const tagsContent = [
  { svg: <GrAdd />, name: "Budget" },
  { svg: <GrAdd />, name: "Location" },
  { svg: <GrAdd />, name: "Apartment Size" },
  { svg: <AiOutlineTag />, name: "Deal Status" },
];

interface IButtonTag {
  item: {
    svg: JSX.Element;
    name: string;
  };
}

const tagsArray = tagsContent.map((item) => (
  <BtnAndInput key={item.name} item={item} />
));

function ButtonTags() {
  return <StyledButtonTagsContainer>{tagsArray}</StyledButtonTagsContainer>;
}

function BtnAndInput({ item }: IButtonTag) {
  const { state } = useContext(AppContext) as contextProps;
  return (
    <>
      {toggleBtnAndInputField(item.name, state.buttonTagsToggle) && (
        <ButtonTag item={item} />
      )}
      {!toggleBtnAndInputField(item.name, state.buttonTagsToggle) && (
        <InputTag name={item.name} />
      )}
    </>
  );
}

function ButtonTag({ item }: IButtonTag) {
  const { state, dispatch } = useContext(AppContext) as contextProps;
  const dealStatus = state.tagButton["Deal Status"];

  return (
    <StyledButtonTags disabled={makeBudgetBtnAlwaysActive(item, state)}>
      <button
        disabled={makeBudgetBtnAlwaysActive(item, state)}
        onClick={(e) => {
          e.stopPropagation();
          btnTagsOnClick(item.name, true, dispatch);
          toggleDealStatus({ e, dealStatus, dispatch });
        }}
      >
        {item.svg}{" "}
        <span>{item.name !== "Deal Status" ? item.name : dealStatus}</span>
      </button>
    </StyledButtonTags>
  );
}

function InputTag({ name }: { name: string }) {
  const { state, dispatch } = useContext(AppContext) as contextProps;

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
          btnTagsOnClick(name, false, dispatch);
        }}
      >
        <GiCheckMark />
      </button>
    </StyledInputTag>
  );
}

function Post() {
  return (
    <StyledPost>
      <PostInputFields />
      {/* <Markdown /> */}
      {/* <PostTextArea /> */}
      <UploadImage />
      <ButtonTags />
      <ActionButtons />
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
  const { state, dispatch } = useContext(AppContext) as contextProps;

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

function Tags() {
  const { state } = useContext(AppContext) as contextProps;
  const {
    showBudget,
    showLocation,
    showApartment,
    buttonTagsToggle,
    tagButton,
  } = showTags(state);

  return (
    <StyledTag>
      {!buttonTagsToggle.dealStatus && <div>Deal Open</div>}
      {showBudget && <div>${tagButton.Budget}</div>}
      {showLocation && <div>{tagButton.Location}</div>}
      {showApartment && <div>{tagButton["Apartment Size"]}</div>}
    </StyledTag>
  );
}

function PostTextArea() {
  const { state, dispatch } = useContext(AppContext) as contextProps;

  return (
    <StyledPostTextArea>
      <textarea
        id=""
        cols={10}
        rows={10}
        name="text"
        value={state.post.postBody}
        placeholder="Enter description here."
        onChange={(e) => handleInputChange(e, dispatch)}
      ></textarea>
    </StyledPostTextArea>
  );
}

function UploadImage() {
  return (
    <StyledUplaodImage>
      <div>
        <label htmlFor="image">Click to upload image</label>
        <input type="file" name="image" id="image" accept="image/*" />
      </div>
    </StyledUplaodImage>
  );
}

const postOptionsArray = [
  { svg: <NoteSVG />, name: "Post" },
  { svg: <IoImageOutline />, name: "Images & Video" },
  { svg: <FiLink />, name: "Link" },
  { svg: <BiPoll />, name: "Poll" },
  { svg: <BsMic />, name: "Talk" },
];

function PostOptions() {
  const { state } = useContext(AppContext) as contextProps;

  return (
    <StyledPostOptions>
      {postOptionsArray.map((item, index) => (
        <Button
          disabled={
            item.name === "Images & Video" ? setButtonState(state) : true
          }
          key={index}
        >
          {item.svg}
          <p>{item.name}</p>
        </Button>
      ))}
    </StyledPostOptions>
  );
}

function ChooseCommunity() {
  return (
    <StyledChooseCommunity>
      <div>
        <TbCircleDotted />
        <label htmlFor="post-as">Posting as</label>
      </div>
      <PostAs />
    </StyledChooseCommunity>
  );
}

function PostAs() {
  const { dispatch } = useContext(AppContext) as contextProps;

  return (
    <StyledPostAs
      id="post-as"
      name="post-as"
      onChange={(e) => onChangeSetPostAs(e, dispatch)}
    >
      <option value="client">a Client</option>
      <option value="agent">an Agent</option>
    </StyledPostAs>
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
  const { state } = useContext(AppContext) as contextProps;
  const allFieldsFilled = preventEmptyFieldSubmition(state);

  return (
    <StyleActionButtons bg={allFieldsFilled}>
      <Tags />
      <div>
        <button>Save Draft</button>
        <button onClick={() => console.log(state)}>Post</button>
      </div>
    </StyleActionButtons>
  );
}

function Check() {
  return (
    <StyledCheck>
      <div>
        <input type="checkbox" name="check" id="check" />
        <label htmlFor="check">Send me post reply notifications</label>
      </div>
      <p>
        Connect accounts to share your post <RiErrorWarningLine />
      </p>
    </StyledCheck>
  );
}
