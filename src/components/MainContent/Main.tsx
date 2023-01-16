import ListingStatistics from "./ListingStatistics";
import NewListingContainer from "./NewListing";
import { SellerBanner } from "./SellerBanner";
import Trends from "./Trends";

export default function MainLandingPage() {
  return (
    <main>
      <NewListingContainer />
      <SellerBanner />
      <NewListingContainer />
      <ListingStatistics />
      <Trends />
    </main>
  );
}
