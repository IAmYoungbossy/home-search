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

export default function PostFeeds() {
  return (
    <StyledPostFeeds>
      <div>
        <CreatePost />
        <FilterBar />
        <ClientCard />
        <AgentCard />
        <ClientCard />
        <AgentCard />
        <ClientCard />
        <AgentCard />
      </div>
      <div>
        <RedditPremium />
        <CreateCard />
        <RedditPolicies />
      </div>
    </StyledPostFeeds>
  );
}

function RedditPremium() {
  return (
    <StyledRedditPremium>
      <div>
        <div>
          <ShieldSVG />
        </div>
        <div>
          <p>Reddit Premium</p>
          <p>The best Reddit experience, with monthly Coins</p>
        </div>
      </div>
      <button>Try Now</button>
    </StyledRedditPremium>
  );
}

function CreateCard() {
  return (
    <StyledCreateCard>
      <div>
        <img src={HomeBanner} alt="home-banner" />
      </div>
      <div>
        <div>
          <img src={SnooBanner} alt="snoo-banner" />
        </div>
        <div>Home</div>
      </div>
      <div>
        <p>
          Your personal Reddit frontpage. Come here to check in with your
          favorite communities.
        </p>
      </div>
      <div>
        <StyledButton>Create Post</StyledButton>
        <StyledCommunityButton>Create Community</StyledCommunityButton>
      </div>
    </StyledCreateCard>
  );
}

const userPoliciesAndLang = {
  policy: ["User Agreement", "Privacy Policy"],
  moderation: ["Content Policy", "Moderator Code Of Conduct"],
  language1: ["English", "Français", "Italiano"],
  language2: ["Deutsch", "Español", "Português"],
};

function RedditPolicies() {
  return (
    <StyledRedditPolicies>
      <div>
        <PolicyList array={userPoliciesAndLang.policy} />
        <PolicyList array={userPoliciesAndLang.moderation} />
      </div>
      <div>
        <PolicyList array={userPoliciesAndLang.language1} />
        <PolicyList array={userPoliciesAndLang.language2} />
      </div>
      <p>Reddit Inc © 2023. All rights reserved</p>
    </StyledRedditPolicies>
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
