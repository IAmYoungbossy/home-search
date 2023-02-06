import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #2b2b2b;
  color: var(--social-light-font-color-primary);

  & > div {
    gap: 50px;
    display: flex;
    margin: 0 auto;
    padding: 30px 0;
    max-width: 1280px;
    flex-direction: column;
  }
`;

export const StyledDisclosures = styled.div`
  padding: 20px 0;
  background-color: #f7f7f7;
  border-top: 1px solid #2b2b2b30;

  small {
    width: 100%;
    margin: 0 auto;
    display: block;
    max-width: 1280px;
  }
  h5 {
    color: blue;
    text-decoration: underline;
  }
`;

export const StyledSocialIcons = styled.div`
  & > ul {
    gap: 10px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
  }

  li {
    width: 40px;
    height: 40px;
    display: flex;
    list-style: none;
    color: #2b2b2b;
    border-radius: 5px;
    align-items: center;
    background-color: #f7f7f7;
  }

  svg {
    width: 26px;
    margin: auto;
    height: 26px;
    display: block;
  }
`;

export const StyledFooterLinks = styled.div`
  & > ul {
    gap: 10px;
    display: flex;
  }

  p {
    color: #f4b630;
    margin-top: 50px;
  }

  li {
    list-style: none;
  }
`;

export const StyledGetTheApp = styled.div`
  color: #2b2b2b;
  div {
    display: flex;
  }

  img {
    width: 150px;
    height: 60px;
  }

  & > div > img {
    width: 150px;
    height: 44px;
  }

  h5 {
    color: #f7f7f7;
    margin-bottom: 30px;
    margin-bottom: 30px;
    text-shadow: 1px 1px 10px black;
  }
`;
