import { useContext } from "react";
import { OriginalPoster } from "./OriginalPoster";
import { HouseDescription } from "./HouseDescription";
import { StyledPostDetails } from "./StyledClientCard";
import PostIconsInteraction from "./PostIconsInteraction";
import { ShowPosterCardProps } from "../../utilities/types";
import { ShowPostCardContext } from "../../context/ShowPostCard";

export interface IPostDetailsProps {
  children?: JSX.Element;
}

export default function PostDetails({
  children,
}: IPostDetailsProps) {
  const { budget } = useContext(
    ShowPostCardContext
  ) as ShowPosterCardProps;

  return (
    <StyledPostDetails>
      <OriginalPoster>
        <p>
          <b>$</b> {budget} || <b>23</b> minutes ago
        </p>
      </OriginalPoster>
      {children}
      <HouseDescription />
      <PostIconsInteraction />
    </StyledPostDetails>
  );
}
