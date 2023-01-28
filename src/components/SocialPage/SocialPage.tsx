// import FilterBar from "./FilterBar";
// import AgentCard from "../PostCards/AgentCard";
// import { ClientCard } from "../PostCards/ClientCard";
import { HeaderSocial } from "../App/HeaderSocialPage/HeaderSocialPage";
import { StyledSocialPage } from "../App/HeaderSocialPage/StyledHeaderSocialPage";
import Comment from "../Comment/Comment";
// import CreatePostPage from "../CreatePost/CreatePost";
// import CreatePost from "./CreatePost";

export default function SocialPage() {
  return (
    <StyledSocialPage>
      <HeaderSocial />
      <main>
        {/* <CreatePost />
        <FilterBar />
        <ClientCard />
        <AgentCard />
        <ClientCard />
        <AgentCard />
        <ClientCard />
        <AgentCard /> */}
        {/* <CreatePostPage /> */}
        <Comment />
      </main>
    </StyledSocialPage>
  );
}
