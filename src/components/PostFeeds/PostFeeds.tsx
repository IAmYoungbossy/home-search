import { Fragment } from "react";
import * as SC from "./StyledPostFeeds";
import AgentCard from "../PostCards/AgentCard";
import FilterBar from "../SocialPage/FilterBar";
import { useLoaderData } from "react-router-dom";
import CreatePost from "../SocialPage/CreatePost";
import { ShieldSVG } from "../assets/Svg/SocialSVG";
import { getAllUserDocs } from "../../firebaseCRUD";
import { ClientCard } from "../PostCards/ClientCard";
import SnooBanner from "../assets/socialPage/snoo-home.png";
import HomeBanner from "../assets/socialPage/home-banner.png";
import ShowPosterCardProvider from "../../context/ShowPostCard";
import { IShowPostCard } from "../../utilities/typesAndInitialStateObj";

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
  const postData = post.data;
  if (post.data.postAsAgent) {
    return (
      <Fragment key={post.id}>
        {post.id && (
          <ShowPosterCardProvider
            postId={post.id}
            budget={postData.budget}
            bgImage={postData.imageUrl}
            userId={postData.userDocId}
            location={postData.location}
            postDesc={postData.postDesc}
            postTitle={postData.postTitle}
            dealStatus={postData.dealStatus}
            apartmentSize={postData.apartmentSize}
          >
            <AgentCard />
          </ShowPosterCardProvider>
        )}
      </Fragment>
    );
  } else {
    return (
      <Fragment key={post.id}>
        {post.id && (
          <ShowPosterCardProvider
            postId={post.id}
            budget={postData.budget}
            userId={postData.userDocId}
            postDesc={postData.postDesc}
            apartmentSize={postData.apartmentSize}
          >
            <ClientCard secondary="" />
          </ShowPosterCardProvider>
        )}
      </Fragment>
    );
  }
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
  language1: ["English", "Fran??ais", "Italiano"],
  language2: ["Deutsch", "Espa??ol", "Portugu??s"],
  moderation: ["Content Policy", "Moderator Code Of Conduct"],
};

function RedditPolicies() {
  return (
    <SC.StyledRedditPolicies>
      <PoliciesAndAgreemeents />
      <ChooseLanguage />
      <p>Reddit Inc ?? 2023. All rights reserved</p>
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
