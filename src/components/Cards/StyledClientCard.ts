import styled from "styled-components";

export const StyledInteractWithPostIcons = styled.div<{
  liked: boolean;
}>`
  gap: 10px;
  display: flex;
  align-items: center;
  margin: 0 31px 0 23px;
  padding: 5px 14px 6px 0px;

  a {
    all: unset;
    gap: 5px;
    display: flex;
    align-items: center;
    color: darkslategrey;
    text-decoration: none;
  }

  svg {
    width: 18px;
    height: 18px;
    opacity: 0.6;
    cursor: pointer;
  }

  & > div:last-of-type > svg {
    stroke-width: 20;
    color: ${({ liked }) => (liked ? "red" : "black")};
  }

  & > div {
    gap: 5px;
    display: flex;
    align-items: center;
    color: darkslategrey;
  }

  @media screen and (max-width: 350px) {
    span {
      display: none;
    }
  }
`;

export const StyledDescription = styled.div`
  z-index: 2;
  border-top: none;
  position: relative;
  padding: 2px 19px 2px 22px;
  margin: -1px 31px 2px 22px;
  border: 1px solid var(--interact-with-post-border-color);

  p {
    font-size: 13px;
    color: var(--social-dark-font-color);
    font-family: var(--social-noto-sans-font-family);
  }
`;

export const StyledHouseSpec = styled.div`
  z-index: 3;
  position: relative;
  padding: 5px 0px 0 20px;
  margin: -7px 31px -2px 22px;
  background: var(--light-bg-color-primary);
  border-left: 1px solid var(--interact-with-post-border-color);
  border-bottom: 1px solid var(--interact-with-post-border-color);

  & > div {
    flex: 1;
    padding: 3px 0px;
  }

  h3 {
    color: #222;
    font-size: 15px;
    padding: 0 0 5px;
    color: darkslategrey;
    font-family: var(--social-ibm-plex-sans-font-family);
  }

  & > div > p {
    font-family: var(--social-ibm-plex-sans-font-family);
  }
`;

export const StyledOriginalPoster = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  padding: 0px 10px 5px 9px;

  p {
    font-size: 13px;
    color: darkslategrey;
  }

  & > div > p:last-child {
    color: gray;
    display: block;
    font-size: 10px;
  }

  svg {
    width: 24px;
    height: 24px;
    fill: #c7cdcf;
    display: block;
    margin-left: 1px;
  }
`;

export const StyledPostCard = styled.div`
  width: 100%;
  display: flex;
  margin: 10px 0;
  background-color: var(--light-bg-color-primary);
  border: 1px solid var(--social-page-outline-color);
`;

export const StyledPostDetails = styled.div`
  flex: 1;
  position: relative;
`;

export const StyledVoteArrow = styled.div<{
  primary?: string;
  secondary?: string;
  upvoted?: boolean;
  downvoted?: boolean;
}>`
  display: flex;
  align-items: center;
  padding: ${({ primary }) => (primary ? "10px 9px" : "0")};
  flex-direction: ${({ primary }) =>
    primary ? "column" : "row"};
  background-color: ${({ primary, secondary }) =>
    !primary || secondary ? "transparent" : primary};

  svg {
    display: block;
    width: 20px;
    height: 20px;
    opacity: 0.5;
    cursor: pointer;
  }

  & > div:first-of-type {
    color: ${({ upvoted }) => (upvoted ? "red" : "black")};
  }

  & > div:last-of-type {
    color: ${({ downvoted }) => (downvoted ? "blue" : "black")};
  }

  p {
    font-size: 10px;
  }
`;

export const StyledPosterName = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;

  & > div {
    position: relative;
  }

  & > div > svg {
    fill: red;
    cursor: pointer;
    margin-left: 0px;
  }

  small {
    color: #a72727;
  }
`;

export const StyledEditAndDeleteButtons = styled.ul`
  top: 17px;
  z-index: 4;
  left: -62px;
  padding: 5px;
  width: max-content;
  border-radius: 5px;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 3px 3px 4px 0px #00000033;

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    width: 100%;
    border: none;
    color: #00528f;
    font-size: 12px;
    cursor: pointer;
    font-weight: 600;
    padding: 2px 5px;
    border-radius: 5px;
    outline: 1px solid #0079d3;
    background-color: transparent;

    &:hover {
      color: white;
      background-color: #0079d3;
    }
  }

  li {
    list-style: none;
    margin: 5px 0;
  }

  & > li:last-of-type > button {
    color: #962800;
    border-radius: 5px;
    outline: 1px solid #ff4500;

    &:hover {
      color: white;
      background-color: #ff4500;
    }
  }
`;
