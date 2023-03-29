import {
  policies,
  promoText,
} from "../../constant/textConstant";
import * as SC from "./StyledPostFeeds";
import PostCards from "../PostCards/PostCards";
import FilterBar from "../SocialPage/FilterBar";
import CreatePost from "../SocialPage/CreatePost";
import { ShieldSVG } from "../assets/Svg/SocialSVG";
import SnooBanner from "../assets/socialPage/snoo-home.png";
import HomeBanner from "../assets/socialPage/home-banner.png";

const Feeds = () => (
  <div>
    <CreatePost />
    <FilterBar />
    <PostCards />
  </div>
);

type PolicyType = { array: string[] };

const PolicyList = ({ array }: PolicyType) => (
  <div>
    <ul>
      {array["map"]((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const Agreements = () => (
  <div>
    <PolicyList array={policies.policy} />
    <PolicyList array={policies.moderation} />
  </div>
);

const ChooseLanguage = () => (
  <div>
    <PolicyList array={policies.language1} />
    <PolicyList array={policies.language2} />
  </div>
);

const RedditPolicies = () => (
  <SC.StyledRedditPolicies>
    <Agreements />
    <ChooseLanguage />
    <p>Reddit Inc © 2023. All rights reserved</p>
  </SC.StyledRedditPolicies>
);

const PromoText = () => (
  <div>
    <p>{promoText}</p>
  </div>
);

const SnooBannerImage = () => (
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

const HomeBannerImage = () => (
  <div>
    <img
      src={HomeBanner}
      alt="home-banner"
    />
  </div>
);

const Buttons = () => (
  <div>
    <SC.StyledButton>Create Post</SC.StyledButton>
    <SC.StyledCommunityButton>
      Create Community
    </SC.StyledCommunityButton>
  </div>
);

const CreateCard = () => (
  <SC.StyledCreateCard>
    <HomeBannerImage />
    <SnooBannerImage />
    <PromoText />
    <Buttons />
  </SC.StyledCreateCard>
);

const PremiumText = () => (
  <div>
    <p>Reddit Premium</p>
    <p>The best Reddit experience, with monthly Coins</p>
  </div>
);

const RedditPremium = () => (
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

const SideBar = () => (
  <div>
    <RedditPremium />
    <CreateCard />
    <RedditPolicies />
  </div>
);

const PostFeeds = () => (
  <SC.StyledPostFeeds>
    <Feeds />
    <SideBar />
  </SC.StyledPostFeeds>
);

export default PostFeeds;
