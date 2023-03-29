import { useContext } from "react";
import { VoteArrow } from "./VoteArrow";
import * as SC from "./StyledClientCard";
import { IlikeOrUnlike } from "../../firebaseCRUD";
import { ShowPosterCardProps } from "../../utilities/types";
import { ShowPostCardContext } from "../../context/ShowPostCard";
import PostDetails, {
  IPostDetailsProps,
} from "./PostDetails";

export interface IClientCard {
  secondary?: string;
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
