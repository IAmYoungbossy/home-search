import { HeaderSocial } from "../App/HeaderSocialPage/HeaderSocialPage";
import { StyledSocialPage } from "../App/HeaderSocialPage/StyledHeaderSocialPage";
import CreatePost from "./CreatePost";
import FilterBar from "./FilterBar";

export default function SocialPage() {
  return (
    <StyledSocialPage>
      <HeaderSocial />
      <main>
        <CreatePost />
        <FilterBar />
      </main>
    </StyledSocialPage>
  );
}
