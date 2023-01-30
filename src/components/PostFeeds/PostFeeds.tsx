import AgentCard from "../PostCards/AgentCard";
import FilterBar from "../SocialPage/FilterBar";
import CreatePost from "../SocialPage/CreatePost";
import { ClientCard } from "../PostCards/ClientCard";

export default function PostFeeds() {
  return (
    <>
      <CreatePost />
      <FilterBar />
      <ClientCard />
      <AgentCard />
      <ClientCard />
      <AgentCard />
      <ClientCard />
      <AgentCard />
    </>
  );
}
