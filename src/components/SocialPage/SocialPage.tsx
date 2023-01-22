// import FilterBar from "./FilterBar";
// import CreatePost from "./CreatePost";
import { HeaderSocial } from "../App/HeaderSocialPage/HeaderSocialPage";
import { ClientCard } from "../PostCards/ClientCard";
import { StyledSocialPage } from "../App/HeaderSocialPage/StyledHeaderSocialPage";
import Comment from "../Comment/Comment";
// import AgentCard from "../PostCards/AgentCard";

export default function SocialPage() {
  return (
    <StyledSocialPage>
      <HeaderSocial />
      <main>
        {/* <CreatePost />
        <FilterBar /> */}
        <ClientCard />
        <Comment />
        {/* <AgentCard /> */}
      </main>
    </StyledSocialPage>
  );
}
