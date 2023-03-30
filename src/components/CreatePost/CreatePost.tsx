import {
  getAllUserDocs,
  addPostToFirestore,
  uploadFileToStorage,
} from "../../firebaseCRUD";
import { useContext } from "react";
import { GrAdd } from "react-icons/gr";
import { BsMic } from "react-icons/bs";
import { BiPoll } from "react-icons/bi";
import { Link } from "react-router-dom";
import { FiLink } from "react-icons/fi";
import * as SC from "./StyledCreatePost";
import { GiCheckMark } from "react-icons/gi";
import { AiOutlineTag } from "react-icons/ai";
import SignInContainer from "../SignIn/SignIn";
import { TbCircleDotted } from "react-icons/tb";
import { IoImageOutline } from "react-icons/io5";
import { NoteSVG } from "../assets/Svg/SocialSVG";
import { BsFillCameraFill } from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri";
import { contextProps } from "../../utilities/types";
import { AppContext } from "../../context/AppContext";
import { RuleSVG } from "../assets/socialPage/SocialSVG";
import * as Helper from "../../utilities/createPostHelperFn";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";

export default function CreatePostPage() {
  return (
    <>
      <SC.StyledCreatePostPage>
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
      </SC.StyledCreatePostPage>
      <SignInContainer />
    </>
  );
}

export async function editPostLoader() {
  const listOfPosts = await getAllUserDocs();
  return listOfPosts;
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
    <SC.StyledRedditRules>
      <RedditRulesHeader />
      {redditRulesArr.map((rule, index) => (
        <div key={index}>
          {index + 1} {rule}
        </div>
      ))}
    </SC.StyledRedditRules>
  );
}

function RedditRulesHeader() {
  return (
    <SC.StyledRedditRulesHeader>
      <RuleSVG /> <h4>Posting to Reddit</h4>
    </SC.StyledRedditRulesHeader>
  );
}

export function Warning() {
  return (
    <div>
      <SC.StyledWarning>
        Please be mindful of reddit's{" "}
        <span>content policy</span> and practice good
        <span>reddiquette</span>.
      </SC.StyledWarning>
    </div>
  );
}

const tagsContent = [
  { svg: <GrAdd />, name: "Budget" },
  { svg: <GrAdd />, name: "Apartment Size" },
  { svg: <GrAdd />, name: "Location" },
  { svg: <AiOutlineTag />, name: "Deal Status" },
];

interface IButtonTag {
  item: {
    svg: JSX.Element;
    name: string;
  };
}

const tagsArray = tagsContent.map((item) => (
  <BtnAndInput
    key={item.name}
    item={item}
  />
));

function ButtonTags() {
  return (
    <SC.StyledButtonTagsContainer>
      {tagsArray}
    </SC.StyledButtonTagsContainer>
  );
}

function BtnAndInput({ item }: IButtonTag) {
  const { state } = useContext(AppContext) as contextProps;
  return (
    <>
      {Helper.toggleBtnAndInputField(
        item.name,
        state.buttonTagsToggle
      ) && <ButtonTag item={item} />}
      {!Helper.toggleBtnAndInputField(
        item.name,
        state.buttonTagsToggle
      ) && <InputTag name={item.name} />}
    </>
  );
}

function ButtonTag({ item }: IButtonTag) {
  const { state, dispatch } = useContext(
    AppContext
  ) as contextProps;
  const dealStatus = state.tagButton["Deal Status"];

  return (
    <SC.StyledButtonTags
      disabled={Helper.makeBudgetBtnAlwaysActive(
        item,
        state
      )}
    >
      <button
        disabled={Helper.makeBudgetBtnAlwaysActive(
          item,
          state
        )}
        onClick={(e) => {
          e.stopPropagation();
          Helper.btnTagsOnClick(item.name, true, dispatch);
          Helper.toggleDealStatus({
            e,
            dealStatus,
            dispatch,
          });
        }}
      >
        {item.svg}{" "}
        <span>
          {item.name !== "Deal Status"
            ? item.name
            : dealStatus}
        </span>
      </button>
    </SC.StyledButtonTags>
  );
}

function InputTag({ name }: { name: string }) {
  const { state, dispatch } = useContext(
    AppContext
  ) as contextProps;

  return (
    <SC.StyledInputTag>
      <input
        placeholder={name}
        type={Helper.setInputType(name)}
        onClick={(e) => e.stopPropagation()}
        value={
          Helper.inputValue(state, name) as string | number
        }
        onChange={(e) =>
          Helper.updateStateObj(e, name, dispatch)
        }
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          Helper.btnTagsOnClick(name, false, dispatch);
        }}
      >
        <GiCheckMark />
      </button>
    </SC.StyledInputTag>
  );
}

function Post() {
  const { state } = useContext(AppContext) as contextProps;

  return (
    <SC.StyledPost>
      <PostInputFields />
      {!state.uploadImage && <Markdown />}
      {!state.uploadImage && <PostTextArea />}
      {state.uploadImage && <UploadImage />}
      <ButtonTags />
      <ActionButtons />
    </SC.StyledPost>
  );
}

function PostInputFields() {
  return (
    <SC.StyledPostInputFields>
      <TitleInput />
    </SC.StyledPostInputFields>
  );
}

function Markdown() {
  return (
    <SC.StyledMarkdown>
      <h3>
        Markdown <RiErrorWarningLine />
      </h3>
      <p>Switch to Fancy Paint Editor</p>
    </SC.StyledMarkdown>
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
      onChange={(e) => Helper.handleInput(e, dispatch)}
    />
  );
}

function Tags() {
  const { state } = useContext(AppContext) as contextProps;
  const {
    tagButton,
    showBudget,
    showLocation,
    showApartment,
    buttonTagsToggle,
  } = Helper.showTags(state);

  return (
    <SC.StyledTag>
      {!buttonTagsToggle.dealStatus &&
        state.post.postAsAgent && <div>Deal Open</div>}
      {showBudget && <div>${tagButton.Budget}</div>}
      {showLocation && <div>{tagButton.Location}</div>}
      {showApartment && (
        <div>{tagButton["Apartment Size"]}</div>
      )}
    </SC.StyledTag>
  );
}

function PostTextArea() {
  const { state, dispatch } = useContext(
    AppContext
  ) as contextProps;

  return (
    <SC.StyledPostTextArea>
      <textarea
        id=""
        cols={10}
        rows={10}
        name="text"
        value={state.post.postDesc}
        placeholder="Enter description here."
        onChange={(e) =>
          Helper.handleInputChange(e, dispatch)
        }
      ></textarea>
    </SC.StyledPostTextArea>
  );
}

function UploadImage() {
  const { dispatch } = useContext(
    AppContext
  ) as contextProps;
  const fileTypes = [
    "image/png",
    "image/jpeg",
    "image/webp",
    "image/jpeg",
  ];

  const uploadImage = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    let file = e.target.files?.item(0);
    if (file && fileTypes.includes(file.type)) {
      uploadFileToStorage({ file, dispatch });
    }
  };
  return (
    <SC.StyledUplaodImage>
      <div>
        <label htmlFor="image">
          <BsFillCameraFill /> <p>Click to upload image</p>
        </label>
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          onChange={uploadImage}
        />
      </div>
      <ProgressBar />
    </SC.StyledUplaodImage>
  );
}

function ProgressBar() {
  const { state } = useContext(AppContext) as contextProps;
  return (
    <SC.StyledProgressBar width={state.uploadProgress} />
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
  const { state, dispatch } = useContext(
    AppContext
  ) as contextProps;

  return (
    <SC.StyledPostOptions post={state.uploadImage}>
      {postOptionsArray.map((item, index) => (
        <button
          key={index}
          disabled={Helper.disableButton(item.name, state)}
          onClick={Helper.toggleTextarea.bind(
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
    </SC.StyledPostOptions>
  );
}

function ChooseCommunity() {
  return (
    <SC.StyledChooseCommunity>
      <div>
        <TbCircleDotted />
        <label htmlFor="post-as">Posting as</label>
      </div>
      <PostAs />
    </SC.StyledChooseCommunity>
  );
}

function PostAs() {
  const { state, dispatch } = useContext(
    AppContext
  ) as contextProps;

  return (
    <SC.StyledPostAs
      id="post-as"
      name="post-as"
      value={state.post.postAsAgent ? "agent" : "client"}
      onChange={(e) =>
        Helper.onChangeSetPostAs(e, dispatch)
      }
    >
      <option value="client">a Client</option>
      <option value="agent">an Agent</option>
    </SC.StyledPostAs>
  );
}

function TitleHeader() {
  return (
    <SC.StyledTitleHeader>
      <h2>Create a post</h2>
      <Draft />
    </SC.StyledTitleHeader>
  );
}

function Draft() {
  return (
    <SC.StyledDraft>
      <p>
        DRAFTS <span>0</span>
      </p>
    </SC.StyledDraft>
  );
}

function ActionButtons() {
  const { state, dispatch } = useContext(
    AppContext
  ) as contextProps;
  const allFieldsFilled =
    Helper.preventEmptyFieldSubmition(state);

  return (
    <SC.StyleActionButtons bg={allFieldsFilled}>
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
            const userDocId =
              documents.docs[0].data().docId;

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
              apartmentSize:
                state.tagButton["Apartment Size"],
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
    </SC.StyleActionButtons>
  );
}

function Check() {
  return (
    <SC.StyledCheck>
      <div>
        <input
          type="checkbox"
          name="check"
          id="check"
        />
        <label htmlFor="check">
          Send me post reply notifications
        </label>
      </div>
      <p>
        Connect accounts to share your post{" "}
        <RiErrorWarningLine />
      </p>
    </SC.StyledCheck>
  );
}
