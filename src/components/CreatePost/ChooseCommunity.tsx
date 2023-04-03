import PostAs from "./PostAs";
import { TbCircleDotted } from "react-icons/tb";
import { StyledChooseCommunity } from "./StyledCreatePost";

export default function ChooseCommunity() {
  return (
    <StyledChooseCommunity>
      <div>
        <TbCircleDotted />
        <label htmlFor="post-as">Posting as</label>
      </div>
      <PostAs />
    </StyledChooseCommunity>
  );
}
