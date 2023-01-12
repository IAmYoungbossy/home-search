import Logo from "../assets/header/Logo.svg";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  padding: 2px;
  align-items: center;
  justify-content: space-around;
`;

export default function Header() {
  return (
    <StyledHeader>
      <HeaderLogoAndNav />
      <CTAButtons />
      <UserIcon />
    </StyledHeader>
  );
}

// Header logo and Nav links container
const StyledHeaderLogoAndNav = styled.div`
  display: flex;
  align-items: center;

  & > div:first-of-type {
    margin-right: 30px;
  }
`;
function HeaderLogoAndNav() {
  return (
    <StyledHeaderLogoAndNav>
      <HeaderLogo />
      <NavLinks />
    </StyledHeaderLogoAndNav>
  );
}

// Header Logo components
const StyledHeaderLogo = styled.div`
  & > img {
    width: 150px;
    cursor: pointer;
  }
`;
function HeaderLogo() {
  return (
    <StyledHeaderLogo>
      <img src={Logo} alt="Logo" />
    </StyledHeaderLogo>
  );
}

// Nav links components
const navLinks = [
  "Buy",
  "Sell",
  "Rent",
  "Mortgage",
  "Find Realtors",
  "My Home",
  "News & Insights",
];
const StyledNavLinks = styled.nav`
  & > ul {
    gap: 1px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > li {
      padding: 0 8px;
      cursor: pointer;
      font-size: 14px;
      list-style: none;
      position: relative;
      font-family: Roboto, sans-serif;
    }

    & > li > sup {
      top: -2px;
      font-size: 11px;
      position: absolute;
    }
  }
`;
function NavLinks() {
  const showList = (link: string) => {
    if (link === "Find Realtors")
      return (
        <li key={link}>
          {link}
          <sup>&reg;</sup>
        </li>
      );
    return <li key={link}>{link}</li>;
  };

  return (
    <StyledNavLinks>
      <ul>{navLinks.map(showList)}</ul>
    </StyledNavLinks>
  );
}

// Call To Action component
const StyledCTAButtons = styled.div`
  gap: 20px;
  display: flex;
  width: min-content;
  align-items: center;
  justify-content: space-between;
`;
const Button = styled.button`
  cursor: pointer;
  padding: 6px 12px;
  width: max-content;
  border-radius: 5px;
  border: 1px solid #a0a0a0;
  background-color: transparent;

  &:hover {
    background-color: #f4f4f4;
  }
`;
const buttonContent = ["Manage Rentals", "Advertise"];

function CTAButtons() {
  return (
    <StyledCTAButtons>
      {buttonContent.map((content) => (
        <Button key={content}>{content}</Button>
      ))}
    </StyledCTAButtons>
  );
}

// User account
const StyledUserIcon = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function UserIcon() {
  return (
    <StyledUserIcon>
      <HeartSVG />
      <UserButton />
    </StyledUserIcon>
  );
}

function UserButton() {
  return (
    <StyledUserButton>
      <UserSVG />
      <ArrowDown />
    </StyledUserButton>
  );
}

// SVG Icons
const StyledUserButton = styled(Button)`
  width: 80px;
  display: flex;
  padding: 2px 10px;
  align-items: center;
  border-radius: 20px;
  justify-content: space-evenly;
  &:hover {
    background: none;
    svg {
      path {
        fill: red;
      }
      &:hover {
        fill: red;
      }
    }
  }
`;

const StyledHeartSVG = styled.div`
  & > svg {
    path {
      &:hover {
        fill: red;
      }
    }
    &:hover {
      fill: red;
    }
  }
`;

function HeartSVG() {
  return (
    <StyledHeartSVG>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        version="1.1"
        viewBox="0 0 91 91"
        xmlSpace="preserve"
      >
        <path d="M64.666 30.208c-2.195-1.816-5.014-2.814-7.936-2.814-3.375 0-6.642 1.342-8.962 3.686-.417.422-.808.875-1.175 1.367-2.841-3.781-7.588-5.721-12.283-4.863-3.896.707-6.959 2.848-9.098 6.359-3.018 4.957-3.265 9.738-.73 14.211 1.355 2.393 3.113 4.725 5.375 7.129 4.143 4.404 9.047 8.584 15.434 13.15.408.293.845.441 1.301.441.702 0 1.176-.355 1.411-.529 5.763-4.115 10.29-7.908 14.248-11.943 2.21-2.252 4.718-5.02 6.552-8.477.786-1.477 1.682-3.465 1.629-5.736-.118-4.887-2.057-8.918-5.766-11.981zm1.135 16.123c-1.633 3.074-3.937 5.611-5.977 7.689-3.66 3.732-7.845 7.264-13.238 11.158-5.869-4.246-10.412-8.145-14.252-12.229-2.073-2.203-3.674-4.32-4.895-6.475-1.933-3.41-1.718-6.832.678-10.764 1.612-2.648 3.9-4.258 6.802-4.785a9.298 9.298 0 011.674-.152c3.44 0 6.487 1.9 8.208 5.199l.292.551c.3.563.918.883 1.528.898a1.698 1.698 0 001.497-.951c.604-1.232 1.263-2.188 2.067-3.002 1.686-1.701 4.071-2.678 6.545-2.678 2.133 0 4.182.723 5.771 2.037 2.956 2.441 4.438 5.531 4.533 9.439.033 1.475-.604 2.881-1.233 4.065z"></path>
      </svg>
    </StyledHeartSVG>
  );
}

function UserSVG() {
  return (
    <StyledHeartSVG>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 28 28"
      >
        <path
          fill="#000"
          fillRule="evenodd"
          d="M14 2c-3.36 0-6.11 2.674-6.11 6.007 0 2.143 1.136 4.013 2.84 5.075-4.774 1.443-8.31 5.932-8.724 10.995-.09 1.096.81 1.923 1.81 1.923h20.367c1.001 0 1.9-.826 1.81-1.923-.413-5.063-3.95-9.553-8.724-10.995 1.704-1.063 2.84-2.933 2.84-5.075 0-3.333-2.751-6.007-6.11-6.007zM9.74 8.007c0-2.281 1.892-4.159 4.26-4.159 2.367 0 4.258 1.878 4.258 4.16 0 2.28-1.891 4.158-4.259 4.158-2.367 0-4.258-1.877-4.258-4.159zM4.95 24.152c-.586 0-1.051-.506-.94-1.082.931-4.786 5.088-8.622 9.99-8.622s9.059 3.836 9.99 8.622c.111.576-.354 1.082-.94 1.082H4.95z"
          clipRule="evenodd"
        ></path>
      </svg>
    </StyledHeartSVG>
  );
}

function ArrowDown() {
  return (
    <StyledHeartSVG>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        className="bi bi-chevron-down"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"
        ></path>
      </svg>
    </StyledHeartSVG>
  );
}
