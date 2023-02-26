import {
  StyledButton,
  StyledPostFeeds,
  StyledCreateCard,
  StyledRedditPremium,
  StyledRedditPolicies,
  StyledCommunityButton,
} from "./StyledPostFeeds";
import AgentCard from "../PostCards/AgentCard";
import FilterBar from "../SocialPage/FilterBar";
import CreatePost from "../SocialPage/CreatePost";
import { ShieldSVG } from "../assets/Svg/SocialSVG";
import { ClientCard } from "../PostCards/ClientCard";
import SnooBanner from "../assets/socialPage/snoo-home.png";
import HomeBanner from "../assets/socialPage/home-banner.png";
import { getAllUserDocs } from "../../firebaseCRUD";

export default function PostFeeds() {
  const g = async () => {
    const userDocs = await getAllUserDocs();
    console.log(userDocs);
  };
  g();
  return (
    <StyledPostFeeds>
      <Feeds />
      <SideBar />
    </StyledPostFeeds>
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

function PostCards() {
  return (
    <>
      <ClientCard />
      <AgentCard />
      <ClientCard />
      <AgentCard />
      <ClientCard />
      <AgentCard />
    </>
  );
}

function RedditPremium() {
  return (
    <StyledRedditPremium>
      <div>
        <div>
          <ShieldSVG />
        </div>
        <PremiumText />
      </div>
      <button>Try Now</button>
    </StyledRedditPremium>
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
    <StyledCreateCard>
      <HomeBannerImage />
      <SnooBannerImage />
      <PromoText />
      <Buttons />
    </StyledCreateCard>
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
      <StyledButton>Create Post</StyledButton>
      <StyledCommunityButton>Create Community</StyledCommunityButton>
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
    <StyledRedditPolicies>
      <PoliciesAndAgreemeents />
      <ChooseLanguage />
      <p>Reddit Inc © 2023. All rights reserved</p>
    </StyledRedditPolicies>
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
