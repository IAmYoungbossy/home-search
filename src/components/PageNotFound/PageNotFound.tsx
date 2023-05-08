import { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledPageNotFound = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const PageNotFound = () => {
  useEffect(() => {
    document.title = "Home Search | 404";
  }, []);

  return (
    <StyledPageNotFound>
      <h2>Oops, 404 Page Not Found</h2>
      <small>
        It's man's land please go <Link to="/">Home</Link>
      </small>
    </StyledPageNotFound>
  );
};

export default PageNotFound;
