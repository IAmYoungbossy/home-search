import {
  Button,
  StyledPost,
  StyledDraft,
  StyledCheck,
  StyledPostAs,
  StyledWarning,
  StyledMarkdown,
  StyledInputTag,
  StyledButtonTags,
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
import { APP_ACTION_TYPES } from "../../reducer/appReducer";
import {
  inputValue,
  setInputType,
  dispatchType,
  setButtonState,
  btnTagsOnClick,
  toggleDealStatus,
  toggleBtnAndInputField,
  makeBudgetBtnAlwaysActive,
} from "../../utilities/createPostHelperFn";
import { AppContext, contextProps } from "../../context/AppContext";

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
      <input type="button" value="" />
      <button
        disabled={makeBudgetBtnAlwaysActive(item, state)}
        onClick={(e) => {
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
  const updateStateObj = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    const updatedObj = {
      payload: e.target.value,
      type: dispatchType(APP_ACTION_TYPES, name) as string,
    };
    dispatch(updatedObj);
  };

  return (
    <StyledInputTag>
      <input
        placeholder={name}
        type={setInputType(name)}
        onChange={(e) => updateStateObj(e, name)}
        value={inputValue(state, name) as string | number}
      />
      <button onClick={btnTagsOnClick.bind(null, name, false, dispatch)}>
        <GiCheckMark />
      </button>
    </StyledInputTag>
  );
}

function Post() {
  return (
    <StyledPost>
      <PostInputFields />
      <Markdown />
      <PostTextArea />
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updateObj = {
      type: APP_ACTION_TYPES.POST.POST_TITLE,
      payload: e.target.value,
    };
    dispatch(updateObj);
  };

  return (
    <input
      type="text"
      name="title"
      onChange={handleInputChange}
      placeholder="Title"
      value={state.post.postTitle}
    />
  );
}

function PostTextArea() {
  const { state, dispatch } = useContext(AppContext) as contextProps;

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updateObj = {
      type: APP_ACTION_TYPES.POST.POST_BODY,
      payload: e.target.value,
    };
    dispatch(updateObj);
  };

  return (
    <StyledPostTextArea>
      <textarea
        id=""
        cols={10}
        rows={10}
        name="text"
        value={state.post.postBody}
        onChange={handleInputChange}
        placeholder="Text (Optional)"
      ></textarea>
    </StyledPostTextArea>
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

  const onChangeSetPostAs = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const postAsValue = {
      type: APP_ACTION_TYPES.POST.POST_AS_AGENT,
      payload: e.target.value === "client" ? false : true,
    };
    dispatch(postAsValue);
  };

  return (
    <StyledPostAs name="post-as" id="post-as" onChange={onChangeSetPostAs}>
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

  const postBody = state.post.postBody;
  const postTitle = state.post.postTitle;
  const postTitleAndPostBodyFilled =
    postBody.length > 0 &&
    postTitle.length > 0 &&
    postBody.trim() !== "" &&
    postTitle.trim() !== "";

  return (
    <StyleActionButtons bg={postTitleAndPostBodyFilled}>
      <button>Save Draft</button>
      <button onClick={() => console.log(state)}>Post</button>
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
