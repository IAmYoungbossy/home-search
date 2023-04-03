import { StyledCheck } from "./StyledCreatePost";
import { RiErrorWarningLine } from "react-icons/ri";

export default function Check() {
  return (
    <StyledCheck>
      <div>
        <input
          type="checkbox"
          name="check"
          id="check"
        />
        <label htmlFor="check">
          Send me post reply notifications
        </label>
      </div>
      <p>
        Connect accounts to share your post{" "}
        <RiErrorWarningLine />
      </p>
    </StyledCheck>
  );
}
