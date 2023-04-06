import enGB from "date-fns/locale/en-GB";
import { OriginalPoster } from "./OriginalPoster";
import { formatDistanceToNow } from "date-fns/esm";
import { HouseDescription } from "./HouseDescription";
import { StyledPostDetails } from "./StyledClientCard";
import { useContext, useEffect, useState } from "react";
import PostIconsInteraction from "./PostIconsInteraction";
import { ShowPosterCardProps } from "../../utilities/types";
import { ShowPostCardContext } from "../../context/ShowPostCard";

export interface IPostDetailsProps {
  children?: JSX.Element;
}

export default function PostDetails({
  children,
}: IPostDetailsProps) {
  const [date, setDate] = useState<Date>(new Date());
  const { budget, createdAt } = useContext(
    ShowPostCardContext
  ) as ShowPosterCardProps;

  useEffect(() => {
    if (createdAt) {
      const timestamp = createdAt;
      const date = new Date(
        timestamp.seconds * 1000 +
          timestamp.nanoseconds / 1000000
      );
      setDate(date);
    }
  }, [createdAt]);

  return (
    <StyledPostDetails>
      <OriginalPoster>
        <p>
          <b>$</b> {budget} ||{" "}
          {formatDistanceToNow(date, {
            locale: enGB,
            addSuffix: true,
            includeSeconds: true,
          })}
        </p>
      </OriginalPoster>
      {children}
      <HouseDescription />
      <PostIconsInteraction />
    </StyledPostDetails>
  );
}
