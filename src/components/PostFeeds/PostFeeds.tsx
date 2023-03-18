import * as SC from "./StyledPostFeeds";
import { db } from "../../firebaseConfig";
import AgentCard from "../PostCards/AgentCard";
import FilterBar from "../SocialPage/FilterBar";
import { useLoaderData } from "react-router-dom";
import CreatePost from "../SocialPage/CreatePost";
import { ShieldSVG } from "../assets/Svg/SocialSVG";
import { getAllUserDocs } from "../../firebaseCRUD";
import { ClientCard } from "../PostCards/ClientCard";
import { Fragment, useEffect, useState } from "react";
import SnooBanner from "../assets/socialPage/snoo-home.png";
import HomeBanner from "../assets/socialPage/home-banner.png";
import ShowPosterCardProvider from "../../context/ShowPostCard";
import { postCardProps } from "../../utilities/createPostHelperFn";
import { IShowPostCard } from "../../utilities/types";
import { collection, doc, DocumentData, onSnapshot } from "firebase/firestore";

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

function ShowPostCard(post: IShowPostCard) {
  const [comments, setComments] = useState<DocumentData[]>([]);
  const [downvotes, setDownvotes] = useState<string[]>([]);
  const [upvotes, setUpvotes] = useState<string[]>([]);
  const [likes, setLikes] = useState<string[]>([]);
  const postData = post.data;

  useEffect(() => {
    const postId = post.id as string;
    const posterId = postData.userDocId as string;
    const docRef = doc(db, "USERS", posterId, "POSTS", postId);
    const colRef = collection(
      db,
      "USERS",
      posterId,
      "POSTS",
      postId,
      "Comments"
    );

    const unSubComment = onSnapshot(colRef, (snapshot) => {
      const comments = snapshot.docs.map((doc) => doc.data());
      setComments(comments);
    });
    const unsubDownvotes = onSnapshot(docRef, (snapshot) => {
      setDownvotes(snapshot.data()?.Downvotes);
    });
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

  const params = { post, likes, upvotes, postData, comments, downvotes };
  const { props } = postCardProps(params);

  return post.data.postAsAgent ? (
    <Fragment key={post.id}>
      {upvotes && downvotes && (
        <ShowPosterCardProvider {...props}>
          {post && <AgentCard />}
        </ShowPosterCardProvider>
      )}
    </Fragment>
  ) : (
    <Fragment key={post.id}>
      {upvotes && downvotes && (
        <ShowPosterCardProvider {...props}>
          {post && <ClientCard secondary="" />}
        </ShowPosterCardProvider>
      )}
    </Fragment>
  );
}

function PostCards() {
  const posts = useLoaderData() as IShowPostCard[];
  return <>{posts.length > 0 && posts.map(ShowPostCard)}</>;
}

export async function postLoader() {
  const listOfPosts = await getAllUserDocs();
  return listOfPosts;
}

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
        Your personal Reddit frontpage. Come here to check in with your favorite
        communities.
      </p>
    </div>
  );
}

function Buttons() {
  return (
    <div>
      <SC.StyledButton>Create Post</SC.StyledButton>
      <SC.StyledCommunityButton>Create Community</SC.StyledCommunityButton>
    </div>
  );
}

const userPoliciesAndLang = {
  policy: ["User Agreement", "Privacy Policy"],
  language1: ["English", "Français", "Italiano"],
  language2: ["Deutsch", "Español", "Português"],
  moderation: ["Content Policy", "Moderator Code Of Conduct"],
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
