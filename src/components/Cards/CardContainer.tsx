import PostDetails, { IPostDetailsProps } from "./PostDetails";
import {
  StyledPostCard,
  StyledHouseSpec,
} from "./StyledClientCard";
import { VoteArrow } from "./VoteArrow";
import { IClientCard } from "./ClientCard";
import { IlikeOrUnlike } from "../../firebase/firebaseCRUD/postDetails";

interface IPostCard
  extends IPostDetailsProps,
    IClientCard,
    IlikeOrUnlike {}

export default function CardContainer({
  children,
  secondary,
}: IPostCard) {
  return (
    <StyledPostCard>
      <VoteArrow
        primary="#f8f9fa"
        secondary={secondary}
      />
      <PostDetails>
        <StyledHouseSpec>{children}</StyledHouseSpec>
      </PostDetails>
    </StyledPostCard>
  );
}
