import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { ArrowDownSVG, ArrowUpSVG } from "../assets/socialPage/SocialSVG";

export default function ClientCard() {
  return (
    <StyledClientCard>
      <VoteArrow />
      <PostDetails />
    </StyledClientCard>
  );
}

function PostDetails() {
  return (
    <StyledPostDetails>
      <OriginalPoster />
      <HouseSpec />
      <Description />
    </StyledPostDetails>
  );
}

function VoteArrow() {
  return (
    <StyledVoteArrow>
      <ArrowUpSVG />
      <p>Vote</p>
      <ArrowDownSVG />
    </StyledVoteArrow>
  );
}

function OriginalPoster() {
  return (
    <StyledOriginalPoster>
      <FaUserCircle />
      <div>
        <p>Letam Bossman Barinua</p>
        <p>23 minutes ago</p>
      </div>
    </StyledOriginalPoster>
  );
}

function HouseSpec() {
  return (
    <StyledHouseSpec>
      <div>
        <p>Looking For</p>
        <p>2 Bedrooms</p>
      </div>
      <div>
        <p>Budget</p>
        <p>N600,000</p>
      </div>
      <div>
        <p>Location</p>
        <p>Port Harcourt</p>
      </div>
      <div>
        <p>Agent Logistics</p>
        <p>Paid</p>
      </div>
    </StyledHouseSpec>
  );
}

function Description() {
  return (
    <StyledDescription>
      <p>
        Hello guys, it'll be nice if I can get an apartment around Ada George
        area where there is federal light or Apara link road off NTA Road
        Mgboaba. Thanks.
      </p>
    </StyledDescription>
  );
}

const StyledDescription = styled.div`
  z-index: 2;
  padding: 2px;
  border-top: none;
  border-radius: 5px;
  position: relative;
  padding: 2px 19px 2px 2px;
  background-color: white;
  margin: -1px 10px 2px 41px;
  border: 1px solid #d6d4d4;
  border-top-left-radius: 0;
`;

const StyledHouseSpec = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  padding: 5px 16px 0;
  margin: -7px 15px 0 22px;
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;
  justify-content: space-between;
  border-left: 1px solid #ddc8c8;
  border-bottom: 1px solid #ddc8c8;

  & > div {
    padding: 3px 5px;
    width: max-content;
    text-align: start;
    border-radius: 20px;
  }

  & > div > p {
    font-size: 13px;
    color: #414244;
    min-width: max-content;
  }

  & > div > p:first-of-type {
    min-width: 100%;
    font-size: 11px;
    color: #757677;
    padding: 3px 0px;
    font-weight: bold;
    border-radius: 5px;
    max-width: max-content;
  }

  & > div > p:last-of-type {
    font-family: "IBM Plex Sans", sans-serif;
  }
`;

const StyledOriginalPoster = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  padding: 10px 10px 5px;

  p {
    font-size: 13px;
  }

  & > div > p:last-child {
    color: gray;
    display: block;
    font-size: 10px;
  }

  svg {
    display: block;
    width: 24px;
    height: 24px;
  }
`;

const StyledClientCard = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  max-width: 600px;
  margin: 10px auto;
  background-color: white;
`;

const StyledPostDetails = styled.div`
  flex: 1;
`;

const StyledVoteArrow = styled.div`
  display: flex;
  padding: 10px 9px;
  align-items: center;
  flex-direction: column;
  background-color: #f8f9fa;

  svg {
    display: block;
    width: 20px;
    height: 20px;
  }

  p {
    font-size: 10px;
  }
`;
