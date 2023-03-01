import * as SC from "./StyledPostFeeds";
import { useEffect, useState } from "react";
import AgentCard from "../PostCards/AgentCard";
import FilterBar from "../SocialPage/FilterBar";
import CreatePost from "../SocialPage/CreatePost";
import { DocumentData } from "firebase/firestore";
import { ShieldSVG } from "../assets/Svg/SocialSVG";
import { getAllUserDocs } from "../../firebaseCRUD";
import { ClientCard } from "../PostCards/ClientCard";
import SnooBanner from "../assets/socialPage/snoo-home.png";
import HomeBanner from "../assets/socialPage/home-banner.png";

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

interface ICardProps {
  budget: string;
  postId: string;
  Likes: string[];
  location: string;
  postDesc: string;
  imageUrl: string;
  postTitle: string;
  Upvotes: string[];
  userDocId: string;
  dealStatus: string;
  postAsAgent: boolean;
  apartmentSize: string;
}

interface IShowPostCard {
  data: DocumentData | ICardProps;
  id: string;
}

const showPostCard = (post: IShowPostCard) => {
  const postData = post.data;
  if (post.data.postAsAgent) {
    return (
      <AgentCard
        key={postData.postId}
        postId={postData.postId}
        budget={postData.budget}
        bgImage={postData.imageUrl}
        userId={postData.userDocId}
        location={postData.location}
        postDesc={postData.postDesc}
        postTitle={postData.postTitle}
        dealStatus={postData.dealStatus}
        apartmentSize={postData.apartmentSize}
      />
    );
  } else {
    return (
      <ClientCard
        secondary=""
        key={postData.postId}
        postId={postData.postId}
        budget={postData.budget}
        userId={postData.userDocId}
        postDesc={postData.postDesc}
        apartmentSize={postData.apartmentSize}
      />
    );
  }
};

function PostCards() {
  const [postList, setPostList] = useState<IShowPostCard[]>([]);
  useEffect(() => {
    (async () => {
      const h = await getAllUserDocs();
      setPostList(h);
      console.log(postList);
    })();
  }, []);
  return <>{postList.length > 0 && postList.map(showPostCard)}</>;
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
      <img src={HomeBanner} alt="home-banner" />
    </div>
  );
}

function SnooBannerImage() {
  return (
    <div>
      <div>
        <img src={SnooBanner} alt="snoo-banner" />
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
