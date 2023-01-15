import { StyledSellerBanner } from "./StyledSellerBanner";
import SellerBannerImage from "../assets/seller-banner-desktop-1x.jpg";

export function SellerBanner() {
  return (
    <StyledSellerBanner>
      <div>
        <h2>Let's find the right selling option for you</h2>
        <p>Get your home's value and see selling options</p>
        <button>Start exploring</button>
      </div>
      <div>
        <img src={SellerBannerImage} alt="Seller Banner" />
      </div>
    </StyledSellerBanner>
  );
}
