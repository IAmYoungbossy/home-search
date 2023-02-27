import * as SC from "./StyledClientCard";
import { TfiComment } from "react-icons/tfi";
import { FaUserCircle } from "react-icons/fa";
import { HeartSaveSVG } from "../assets/header/SvgMarkUp";
import { ArrowDownSVG, ArrowUpSVG } from "../assets/socialPage/SocialSVG";

interface IPost {
  children: JSX.Element;
  secondary?: string;
}
interface IPostDetails extends IPost {
  postDesc?: string;
  budget?: number;
}
interface IClientCard extends IPost, IPostDetails {
  secondary?: string;
  apartmentSize: string;
}

export function ClientCard({
  budget,
  postDesc,
  secondary,
  apartmentSize,
}: IClientCard) {
  return (
    <PostCard secondary={secondary} postDesc={postDesc} budget={budget}>
      <HouseSpec apartmentSize={apartmentSize} />
    </PostCard>
  );
}

interface IPostCard extends IPost, IPostDetails {}

export default function PostCard({
  budget,
  children,
  postDesc,
  secondary,
}: IPostCard) {
  return (
    <SC.StyledPostCard>
      <VoteArrow primary="#f8f9fa" secondary={secondary} />
      <PostDetails postDesc={postDesc} budget={budget}>
        <SC.StyledHouseSpec>{children}</SC.StyledHouseSpec>
      </PostDetails>
    </SC.StyledPostCard>
  );
}

export function HouseSpec({ apartmentSize }: { apartmentSize: string }) {
  return <h3>Looking for {apartmentSize}.</h3>;
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

function PostDetails({ children, postDesc, budget }: IPostDetails) {
  return (
    <SC.StyledPostDetails>
      <OriginalPoster>
        <p>{budget} || 23 minutes ago</p>
      </OriginalPoster>
      {children}
      <Description postDesc={postDesc} />
      <InteractWithPostIcons />
    </SC.StyledPostDetails>
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

export function Description({ postDesc }: { postDesc?: string }) {
  return (
    <SC.StyledDescription>
      <p>{postDesc}</p>
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
