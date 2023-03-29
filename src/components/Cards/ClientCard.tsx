import { useContext } from "react";
import CardContainer from "./CardContainer";
import { ApartmentSize } from "./HouseDescription";
import { ShowPosterCardProps } from "../../utilities/types";
import { ShowPostCardContext } from "../../context/ShowPostCard";

export interface IClientCard {
  secondary?: string;
}

export function ClientCard({ secondary }: IClientCard) {
  const { apartmentSize } = useContext(
    ShowPostCardContext
  ) as ShowPosterCardProps;

  return (
    <CardContainer secondary={secondary}>
      <ApartmentSize apartmentSize={apartmentSize} />
    </CardContainer>
  );
}
