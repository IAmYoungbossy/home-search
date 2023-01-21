import {
  StyledPostCard,
  StyledHouseSpec,
  StyledVoteArrow,
  StyledDescription,
  StyledPostDetails,
  StyledOriginalPoster,
  StyledInteractWithPostIcons,
} from "./StyledClientCard";
import { TfiComment } from "react-icons/tfi";
import { FaUserCircle } from "react-icons/fa";
import { HeartSaveSVG } from "../assets/header/SvgMarkUp";
import { ArrowDownSVG, ArrowUpSVG } from "../assets/socialPage/SocialSVG";

interface PostCardProps {
  children: JSX.Element;
}

export function ClientCard() {
  return (
    <PostCard>
      <HouseSpec />
    </PostCard>
  );
}

export default function PostCard({ children }: PostCardProps) {
  return (
    <StyledPostCard>
      <VoteArrow />
      <PostDetails>
        <StyledHouseSpec>{children}</StyledHouseSpec>
      </PostDetails>
    </StyledPostCard>
  );
}

function PostDetails({ children }: PostCardProps) {
  return (
    <StyledPostDetails>
      <OriginalPoster />
      {children}
      <Description />
      <InteractWithPostIcons />
    </StyledPostDetails>
  );
}

export function VoteArrow() {
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
        <p>Budget N600,000 || 23 minutes ago</p>
      </div>
    </StyledOriginalPoster>
  );
}

const houseInfo = {
  budget: "N600,000",
  house: "2 Bedrooms",
  location: "Port Harcourt",
};

export function HouseSpec() {
  return <h4>Looking for a {houseInfo.house} appartment.</h4>;
}

export function Description() {
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
        <HeartSaveSVG /> Save
      </div>
    </StyledInteractWithPostIcons>
  );
}
