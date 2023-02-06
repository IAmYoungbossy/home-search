import styled from "styled-components";

const listingStats = [
  { title: "Completed Deal", number: 74 },
  { title: "Total Comments", number: 1274 },
  { title: "Looking For Home", number: 274 },
  { title: "Total Vendors' Posts", number: 847 },
];

type showStatsType = { title: string; number: number };

const StyledListingStatistics = styled.div`
  width: 100%;
  margin: 40px auto;
  max-width: 1280px;

  h2 {
    color: var(--footer-bg-color);
  }

  p {
    color: #4e5a62;
    font-size: 1rem;
  }

  h4 {
    color: #68a4df;
    font-size: 2rem;
  }

  & > div {
    display: flex;
    margin-top: 20px;
    text-align: center;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export default function ListingStatistics() {
  const showStats = (stats: showStatsType) => (
    <div key={stats.title}>
      <h4>{stats.number}</h4>
      <p>{stats.title}</p>
    </div>
  );

  return (
    <StyledListingStatistics>
      <h2>Let the numbers do the talking.</h2>
      <div>{listingStats.map(showStats)}</div>
    </StyledListingStatistics>
  );
}
