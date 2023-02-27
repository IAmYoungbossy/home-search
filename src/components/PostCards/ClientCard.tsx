import * as SC from "./StyledClientCard";
import { TfiComment } from "react-icons/tfi";
import { FaUserCircle } from "react-icons/fa";
import { HeartSaveSVG } from "../assets/header/SvgMarkUp";
import { ArrowDownSVG, ArrowUpSVG } from "../assets/socialPage/SocialSVG";

interface PostCardProps {
  children: JSX.Element;
  secondary?: string;
}

export function ClientCard({ secondary }: { secondary?: string }) {
  return (
    <PostCard secondary={secondary}>
      <HouseSpec />
    </PostCard>
  );
}

export default function PostCard({ children, secondary }: PostCardProps) {
  return (
    <SC.StyledPostCard>
      <VoteArrow primary="#f8f9fa" secondary={secondary} />
      <PostDetails>
        <SC.StyledHouseSpec>{children}</SC.StyledHouseSpec>
      </PostDetails>
    </SC.StyledPostCard>
  );
}

function PostDetails({ children }: PostCardProps) {
  return (
    <SC.StyledPostDetails>
      <OriginalPoster>
        <p>Budget N600,000 || 23 minutes ago</p>
      </OriginalPoster>
      {children}
      <Description />
      <InteractWithPostIcons />
    </SC.StyledPostDetails>
  );
}

interface VoteArrowProps {
  primary?: string;
  secondary?: string;
}

export function VoteArrow({ primary, secondary }: VoteArrowProps) {
  return (
    <SC.StyledVoteArrow primary={primary} secondary={secondary}>
      <ArrowUpSVG />
      <p>Vote</p>
      <ArrowDownSVG />
    </SC.StyledVoteArrow>
  );
}

interface OriginalPosterProps {
  children?: JSX.Element;
}

export function OriginalPoster({ children }: OriginalPosterProps) {
  return (
    <SC.StyledOriginalPoster>
      <FaUserCircle />
      <div>
        <p>Letam Bossman Barinua</p>
        {children}
      </div>
    </SC.StyledOriginalPoster>
  );
}

const houseInfo = {
  budget: "N600,000",
  house: "2 Bedrooms",
  location: "Port Harcourt",
};

export function HouseSpec() {
  return <h3>Looking for a {houseInfo.house} appartment.</h3>;
}

export function Description() {
  return (
    <SC.StyledDescription>
      <p>
        Hello guys, it'll be nice if I can get an apartment around Ada George
        area where there is federal light or Apara link road off NTA Road
        Mgboaba. Thanks.
      </p>
    </SC.StyledDescription>
  );
}

function InteractWithPostIcons() {
  return (
    <SC.StyledInteractWithPostIcons>
      <div>
        <TfiComment /> 1 Comment
      </div>
      <div>
        <HeartSaveSVG /> Save
      </div>
    </SC.StyledInteractWithPostIcons>
  );
}
