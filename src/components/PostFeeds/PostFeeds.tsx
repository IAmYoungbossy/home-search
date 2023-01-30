import styled from "styled-components";
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

const StyledRedditPolicies = styled.div`
  top: 8px;
  width: 100%;
  font-size: 12px;
  color: #1a1a1b;
  margin-top: 15px;
  position: sticky;
  border-radius: 5px;
  padding: 0 12px 12px;
  background-color: white;
  font-family: "Noto Sans", Arial, sans-serif;

  & > div {
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid var(--social-border-color);

    div {
      flex: 1;
    }
  }

  li {
    list-style: none;
    margin: 2px 0 6px;
  }

  p {
    margin-top: 10px;
  }
`;

const StyledButton = styled.button`
  padding: 8px;
  border: none;
  margin: 10px;
  color: white;
  font-weight: 700;
  border-radius: 20px;
  border: 1px solid #0079d3;
  background-color: #0079d3;
`;

const StyledCommunityButton = styled(StyledButton)`
  color: #0079d3;
  background-color: transparent;
`;

const StyledCreateCard = styled.div`
  width: 100%;
  margin-top: 15px;
  border-radius: 5px;
  padding-bottom: 5px;
  background-color: white;

  & > div:first-child {
    display: flex;

    img {
      width: 100%;
    }
  }

  & > div:nth-child(2) {
    display: flex;
    padding: 0 12px;
    margin-top: -10.5px;

    & > div:first-child {
      img {
        width: 40px;
      }
    }

    & > div:last-child {
      font-size: 16px;
      color: #1c1c1c;
      font-weight: 600;
      padding: 33px 0 0 10px;
      font-family: "IBM Plex Sans", Arial, sans-serif;
    }
  }

  & > div:nth-child(3) {
    margin-bottom: 15px;
    padding: 10px 18px 0px 12px;

    p {
      font-size: 14px;
      color: #1c1c1c;
      padding-bottom: 15px;
      font-family: "Noto Sans", Arial, sans-serif;
      border-bottom: 1px solid var(--social-border-color);
    }
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;
  }
`;

const StyledRedditPremium = styled.div`
  margin-top: 20px;
  border-radius: 5px;
  padding: 8px 12px 10px;
  background-color: white;

  button {
    width: 100%;
    border: none;
    padding: 8px;
    color: white;
    font-weight: 700;
    border-radius: 20px;
    background-color: #ff4500;
  }

  & > div {
    display: flex;
    margin: 0 0 8px;

    p {
      font-size: 12px;
      color: #1a1a1b;
      font-weight: 600;
      font-family: "IBM Plex Sans", Arial, sans-serif;
    }

    & > div:first-of-type {
      display: flex;
    }

    & > div:last-child > p:first-child {
      font-size: 13px;
      margin: 2px 4px;
    }

    svg {
      display: block;
      margin: auto 12px auto 0;
    }
  }
`;

const StyledPostFeeds = styled.div`
  gap: 24px;
  display: flex;
  margin: 0 auto;
  max-width: 976px;
  width: fit-content;

  & > div:last-child {
    width: 312px;
  }
`;
