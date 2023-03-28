import {
  Fragment,
  useEffect,
  useState,
  useContext,
} from "react";
import {
  doc,
  collection,
  onSnapshot,
  DocumentData,
} from "firebase/firestore";
import {
  contextProps,
  IShowPostCard,
  APP_ACTION_TYPES,
} from "../../utilities/types";
import * as SC from "./StyledPostFeeds";
import { db } from "../../firebaseConfig";
import AgentCard from "../PostCards/AgentCard";
import FilterBar from "../SocialPage/FilterBar";
import { useLoaderData } from "react-router-dom";
import CreatePost from "../SocialPage/CreatePost";
import { ShieldSVG } from "../assets/Svg/SocialSVG";
import { getAllUserDocs } from "../../firebaseCRUD";
import { ClientCard } from "../PostCards/ClientCard";
import { AppContext } from "../../context/AppContext";
import SnooBanner from "../assets/socialPage/snoo-home.png";
import HomeBanner from "../assets/socialPage/home-banner.png";
import ShowPosterCardProvider from "../../context/ShowPostCard";
import { postCardProps } from "../../utilities/createPostHelperFn";

export default function PostFeeds() {
  return (
    <SC.StyledPostFeeds>
      <Feeds />
      <SideBar />
    </SC.StyledPostFeeds>
  );
}

function Feeds() {
  return (
    <div>
      <CreatePost />
      <FilterBar />
      <PostCards />
    </div>
  );
}

function SideBar() {
  return (
    <div>
      <RedditPremium />
      <CreateCard />
      <RedditPolicies />
    </div>
  );
}

function ShowPostCard({ post }: { post: IShowPostCard }) {
  const postData = post.data;
  const [comments, setComments] = useState<DocumentData[]>(
    []
  );
  const [downvotes, setDownvotes] = useState<string[]>([]);
  const [upvotes, setUpvotes] = useState<string[]>([]);
  const [likes, setLikes] = useState<string[]>([]);

  useEffect(() => {
    const postId = post.id as string;
    const posterId = postData.userDocId as string;
    const docRef = doc(
      db,
      "USERS",
      posterId,
      "POSTS",
      postId
    );
    const colRef = collection(
      db,
      "USERS",
      posterId,
      "POSTS",
      postId,
      "Comments"
    );

    const unSubComment = onSnapshot(colRef, (snapshot) => {
      const comments = snapshot.docs.map((doc) =>
        doc.data()
      );
      setComments(comments);
    });
    const unsubDownvotes = onSnapshot(
      docRef,
      (snapshot) => {
        setDownvotes(snapshot.data()?.Downvotes);
      }
    );
    const unsubUpvotes = onSnapshot(docRef, (snapshot) => {
      setUpvotes(snapshot.data()?.Upvotes);
    });
    const unsubLike = onSnapshot(docRef, (snapshot) => {
      setLikes(snapshot.data()?.Likes);
    });

    return () => {
      unsubLike();
      unsubUpvotes();
      unSubComment();
      unsubDownvotes();
    };
  }, [db]);

  const params = {
    post,
    likes,
    upvotes,
    postData,
    comments,
    downvotes,
  };
  const { props } = postCardProps(params);

  return (
    <Fragment key={post.id}>
      {upvotes && downvotes && (
        <ShowPosterCardProvider {...props}>
          {post &&
            (post.data.postAsAgent ? (
              <AgentCard />
            ) : (
              <ClientCard secondary="" />
            ))}
        </ShowPosterCardProvider>
      )}
    </Fragment>
  );
}

function PostCards() {
  const {
    state: { postFeed },
    dispatch,
  } = useContext(AppContext) as contextProps;
  const posts = useLoaderData() as IShowPostCard[];

  useEffect(() => {
    dispatch({
      type: APP_ACTION_TYPES.postFeed,
      payload: posts,
    });
  }, [db]);

  return (
    <>
      {postFeed.map((post) => (
        <ShowPostCard
          post={post}
          key={post.id}
        />
      ))}
    </>
  );
}

export const postLoader = async () =>
  await getAllUserDocs();

function RedditPremium() {
  return (
    <SC.StyledRedditPremium>
      <div>
        <div>
          <ShieldSVG />
        </div>
        <PremiumText />
      </div>
      <button>Try Now</button>
    </SC.StyledRedditPremium>
  );
}

function PremiumText() {
  return (
    <div>
      <p>Reddit Premium</p>
      <p>The best Reddit experience, with monthly Coins</p>
    </div>
  );
}

function CreateCard() {
  return (
    <SC.StyledCreateCard>
      <HomeBannerImage />
      <SnooBannerImage />
      <PromoText />
      <Buttons />
    </SC.StyledCreateCard>
  );
}

function HomeBannerImage() {
  return (
    <div>
      <img
        src={HomeBanner}
        alt="home-banner"
      />
    </div>
  );
}

function SnooBannerImage() {
  return (
    <div>
      <div>
        <img
          src={SnooBanner}
          alt="snoo-banner"
        />
      </div>
      <div>Home</div>
    </div>
  );
}

function PromoText() {
  return (
    <div>
      <p>
        Your personal Reddit frontpage. Come here to check
        in with your favorite communities.
      </p>
    </div>
  );
}

function Buttons() {
  return (
    <div>
      <SC.StyledButton>Create Post</SC.StyledButton>
      <SC.StyledCommunityButton>
        Create Community
      </SC.StyledCommunityButton>
    </div>
  );
}

const userPoliciesAndLang = {
  policy: ["User Agreement", "Privacy Policy"],
  language1: ["English", "Français", "Italiano"],
  language2: ["Deutsch", "Español", "Português"],
  moderation: [
    "Content Policy",
    "Moderator Code Of Conduct",
  ],
};

function RedditPolicies() {
  return (
    <SC.StyledRedditPolicies>
      <PoliciesAndAgreemeents />
      <ChooseLanguage />
      <p>Reddit Inc © 2023. All rights reserved</p>
    </SC.StyledRedditPolicies>
  );
}

function PoliciesAndAgreemeents() {
  return (
    <div>
      <PolicyList array={userPoliciesAndLang.policy} />
      <PolicyList array={userPoliciesAndLang.moderation} />
    </div>
  );
}

function ChooseLanguage() {
  return (
    <div>
      <PolicyList array={userPoliciesAndLang.language1} />
      <PolicyList array={userPoliciesAndLang.language2} />
    </div>
  );
}

function PolicyList({ array }: { array: string[] }) {
  return (
    <div>
      <ul>
        {array["map"]((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
