import { SearchInputField } from "../Hero/Hero";
import LocalHelpImage from "../assets/hp-local-desktop.jpg";
import MortgageImage from "../assets/hp-hero-mortgage-desktop.jpg";
import { StyledImage, StyledDetails, StyledWrapper } from "./StyledLoanAndInfo";

export default function LoanAndInfo() {
  return (
    <div>
      <Loan />
      <LocalInfo />
    </div>
  );
}

function Loan() {
  return (
    <StyledWrapper>
      <StyledImage bgImage={MortgageImage} />
      <LoanDetails />
    </StyledWrapper>
  );
}

function LoanDetails() {
  return (
    <StyledDetails>
      <div>
        <h2>Need a home loan? Get pre-approved</h2>
        <p>
          Find a lender who can offer competitive mortgage rates and help you
          with pre-approval.
        </p>
        <button>Get pre-approved now</button>
      </div>
      <small>Advertising disclosure</small>
    </StyledDetails>
  );
}

function LocalInfo() {
  return (
    <StyledWrapper>
      <LocalinfoDetails />
      <StyledImage bgImage={LocalHelpImage} />
    </StyledWrapper>
  );
}

function LocalinfoDetails() {
  return (
    <StyledDetails>
      <div>
        <h2>Get Local Info</h2>
        <p>
          Does it have pet-friendly rentals? How are the schools? Get important
          local information on the area you're most interested in.
        </p>
        <SearchInputField />
      </div>
    </StyledDetails>
  );
}
