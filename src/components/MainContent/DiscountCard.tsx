import { StyledCardDetails, StyledDiscountCard } from "./StyledDiscountCard";
import { StyledImageContainer } from "./StyledNewListing";
import { uniqueList } from "./uniqueList";

export default function DiscountCard() {
  const cardList = (card: { imageUrl: string; title: string }) => (
    <div key={card.title}>
      <ImageContainer path={card.imageUrl} />
      <CardDetails details={card.title} />
    </div>
  );
  return (
    <StyledDiscountCard>
      <div>{uniqueList.map(cardList)}</div>
    </StyledDiscountCard>
  );
}

function ImageContainer({ path }: { path: string }) {
  return (
    <StyledImageContainer>
      <img src={path} alt="Discounted Properties" />
    </StyledImageContainer>
  );
}

function CardDetails({ details }: { details: string }) {
  return (
    <StyledCardDetails>
      <p>{details}</p>
    </StyledCardDetails>
  );
}
