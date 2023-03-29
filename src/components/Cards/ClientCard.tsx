import GetPosterName, {
  IGetPosterName,
} from "./GetPostName";
import { useContext } from "react";
import { VoteArrow } from "./VoteArrow";
import * as SC from "./StyledClientCard";
import { FaUserCircle } from "react-icons/fa";
import { IlikeOrUnlike } from "../../firebaseCRUD";
import PostIconsInteraction from "./PostIconsInteraction";
import { ShowPosterCardProps } from "../../utilities/types";
import { ShowPostCardContext } from "../../context/ShowPostCard";

export interface IClientCard {
  secondary?: string;
}

interface IPostDetailsProps {
  children?: JSX.Element;
}

interface IPost extends IClientCard, IPostDetailsProps {}

export function ClientCard({ secondary }: IClientCard) {
  const { apartmentSize } = useContext(
    ShowPostCardContext
  ) as ShowPosterCardProps;
  return (
    <PostCard secondary={secondary}>
      <HouseSpec apartmentSize={apartmentSize} />
    </PostCard>
  );
}

interface IPostCard extends IPost, IlikeOrUnlike {}

export default function PostCard({
  children,
  secondary,
}: IPostCard) {
  return (
    <SC.StyledPostCard>
      <VoteArrow
        primary="#f8f9fa"
        secondary={secondary}
      />
      <PostDetails>
        <SC.StyledHouseSpec>{children}</SC.StyledHouseSpec>
      </PostDetails>
    </SC.StyledPostCard>
  );
}

export function HouseSpec({
  apartmentSize,
}: {
  apartmentSize?: string;
}) {
  return <h3>Looking for {apartmentSize}.</h3>;
}

function PostDetails({ children }: IPostDetailsProps) {
  const { budget } = useContext(
    ShowPostCardContext
  ) as ShowPosterCardProps;
  return (
    <SC.StyledPostDetails>
      <OriginalPoster>
        <p>
          <b>$</b> {budget} || <b>23</b> minutes ago
        </p>
      </OriginalPoster>
      {children}
      <Description />
      <PostIconsInteraction />
    </SC.StyledPostDetails>
  );
}

interface OriginalPosterProps
  extends IPostDetailsProps,
    IGetPosterName {}

export function OriginalPoster({
  children,
  commentId,
  commentPostId,
  commentUserId,
}: OriginalPosterProps) {
  return (
    <SC.StyledOriginalPoster>
      <FaUserCircle />
      <div>
        <GetPosterName
          commentId={commentId}
          commentPostId={commentPostId}
          commentUserId={commentUserId}
        />
        {children}
      </div>
    </SC.StyledOriginalPoster>
  );
}

export function Description() {
  const { postDesc } = useContext(
    ShowPostCardContext
  ) as ShowPosterCardProps;
  return (
    <SC.StyledDescription>
      <p>{postDesc}</p>
    </SC.StyledDescription>
  );
}
