import FilterBar from "./FilterBar";
import CreatePost from "./CreatePost";
import AgentCard from "../PostCards/AgentCard";
import { ClientCard } from "../PostCards/ClientCard";
import { HeaderSocial } from "../App/HeaderSocialPage/HeaderSocialPage";
import { StyledSocialPage } from "../App/HeaderSocialPage/StyledHeaderSocialPage";

export default function SocialPage() {
  return (
    <StyledSocialPage>
      <HeaderSocial />
      <main>
        <CreatePost />
        <FilterBar />
        <ClientCard />
        <AgentCard />
        <ClientCard />
        <AgentCard />
        <ClientCard />
        <AgentCard />
      </main>
    </StyledSocialPage>
  );
}
