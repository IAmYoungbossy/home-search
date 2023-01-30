import styled from "styled-components";
import AgentCard from "../PostCards/AgentCard";
import FilterBar from "../SocialPage/FilterBar";
import CreatePost from "../SocialPage/CreatePost";
import { ShieldSVG } from "../assets/Svg/SocialSVG";
import { ClientCard } from "../PostCards/ClientCard";

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
