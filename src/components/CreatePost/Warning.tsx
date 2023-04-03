import { StyledWarning } from "./StyledCreatePost";

export default function Warning() {
  return (
    <div>
      <StyledWarning>
        Please be mindful of reddit's{" "}
        <span>content policy</span> and practice good
        <span>reddiquette</span>.
      </StyledWarning>
    </div>
  );
}
