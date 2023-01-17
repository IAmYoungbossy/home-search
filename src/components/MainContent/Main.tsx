import DiscountCard from "./DiscountCard";
import ListingStatistics from "./ListingStatistics";
import LoanAndInfo from "./LoanAndInfo";
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
      <DiscountCard />
      <LoanAndInfo />
    </main>
  );
}
