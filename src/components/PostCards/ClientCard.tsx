import {
  StyledHouseSpec,
  StyledVoteArrow,
  StyledClientCard,
  StyledDescription,
  StyledPostDetails,
  StyledOriginalPoster,
  StyledInteractWithPostIcons,
} from "./StyledClientCard";
import { TfiComment } from "react-icons/tfi";
import { FaUserCircle } from "react-icons/fa";
import { HeartSaveSVG } from "../assets/header/SvgMarkUp";
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
      <InteractWithPostIcons />
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

const houseSpecArray = [
  {
    tag: "Looking For",
    value: "2 Bedrooms",
  },
  {
    tag: "Budget",
    value: "N600,000",
  },
  {
    tag: "Location",
    value: "Port Harcourt",
  },
  {
    tag: "Agent Logistics",
    value: "Paid",
  },
];

function HouseSpec() {
  return (
    <StyledHouseSpec>
      {houseSpecArray.map((tag, index) => (
        <div key={index}>
          <h6>{tag.tag}</h6>
          <p>{tag.value}</p>
        </div>
      ))}
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

function InteractWithPostIcons() {
  return (
    <StyledInteractWithPostIcons>
      <div>
        <TfiComment /> 1 Comment
      </div>
      <div>
        Save <HeartSaveSVG />
      </div>
    </StyledInteractWithPostIcons>
  );
}
