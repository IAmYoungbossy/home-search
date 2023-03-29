import { useContext } from "react";
import { StyledDescription } from "./StyledClientCard";
import { ShowPosterCardProps } from "../../utilities/types";
import { ShowPostCardContext } from "../../context/ShowPostCard";

export function ApartmentSize({
  apartmentSize,
}: {
  apartmentSize?: string;
}) {
  return <h3>Looking for {apartmentSize}.</h3>;
}

export function HouseDescription() {
  const { postDesc } = useContext(
    ShowPostCardContext
  ) as ShowPosterCardProps;
  return (
    <StyledDescription>
      <p>{postDesc}</p>
    </StyledDescription>
  );
}
