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

const StyledHouseSpec = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > div {
    flex: 1;
    padding: 3px 5px;
    border-radius: 20px;
  }

  & > div > p {
    font-size: 13px;
    text-align: center;
    min-width: max-content;
  }

  & > div > p:first-of-type {
    margin: 0 auto;
    font-size: 11px;
    color: #550000;
    padding: 3px 10px;
    border-radius: 5px;
    max-width: max-content;
    min-width: max-content;
    border: 1px solid #80808033;
    background-color: #f8f9fa;
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
