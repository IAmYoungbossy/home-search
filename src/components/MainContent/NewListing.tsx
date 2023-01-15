import { HeartSaveSVG } from "../assets/header/SvgMarkUp";
import House1 from "../assets/house.webp";

export default function NewListing() {
  return (
    <div>
      <ImageContainer />
    </div>
  );
}

function ImageContainer() {
  return (
    <div>
      <img src={House1} alt="House" />
      <HeartSaveSVG />
    </div>
  );
}
