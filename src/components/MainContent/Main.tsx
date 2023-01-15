import NewListingContainer from "./NewListing";
import { SellerBanner } from "./SellerBanner";

export default function MainLandingPage() {
  return (
    <main>
      <NewListingContainer />
      <SellerBanner />
      <NewListingContainer />
    </main>
  );
}
