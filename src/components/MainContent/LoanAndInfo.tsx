import LocalHelpImage from "../assets/hp-local-desktop.jpg";
import MortgageImage from "../assets/hp-hero-mortgage-desktop.jpg";

export default function LoanAndInfo() {
  return <div></div>;
}

function Loan() {
  return <div></div>;
}

function LoanImage() {
  return (
    <div>
      <img src={MortgageImage} alt="People Around" />
    </div>
  );
}

function LoanDetails() {
  return (
    <div>
      <div>
        <h2>Need a home loan? Get pre-approved</h2>
        <p>
          Find a lender who can offer competitive mortgage rates and help you
          with pre-approval.
        </p>
        <button>Get pre-approved now</button>
      </div>
      <small>Advertising disclosure</small>
    </div>
  );
}

function LocalInfo() {
  return <div></div>;
}

function LocalInfoImage() {
  return (
    <div>
      <img src={LocalHelpImage} alt="Happy family" />
    </div>
  );
}

function LocalinfoDetails() {
  return (
    <div>
      <h2>Get Local Info</h2>
      <p>
        Does it have pet-friendly rentals? How are the schools? Get important
        local information on the area you're most interested in.
      </p>
    </div>
  );
}
