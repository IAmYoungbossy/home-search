import styled from "styled-components";

export const StyledInteractWithPostIcons = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  margin: -3px 31px 0 23px;
  padding: 5px 14px 6px 0px;
  border-top-left-radius: 5px;
  border-top: 1px solid #d6d6d6;

  svg {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }

  & > div {
    gap: 5px;
    display: flex;
    align-items: center;
  }

  & > div > svg:last-of-type > g > path:first-of-type {
    fill: transparent;
  }

  & > div > svg:last-of-type > g > path:first-of-type:hover {
    fill: #ff000021;
  }
`;

export const StyledDescription = styled.div`
  z-index: 2;
  border-top: none;
  position: relative;
  padding: 2px 19px 2px 22px;
  margin: -1px 31px 2px 22px;
  border: 1px solid #d6d6d6;

  p {
    font-size: 0.9rem;
    font-family: "Noto Sans", sans-serif;
  }
`;

export const StyledHouseSpec = styled.div`
  padding: 5px 0px 0 20px;
  margin: -7px 31px 0 22px;
  border-left: 1px solid #ddc8c8;
  border-bottom: 1px solid #ddc8c8;

  & > div {
    flex: 1;
    padding: 3px 0px;
  }

  h4 {
    padding: 5px 0;
  }

  & > div > p {
    font-family: "IBM Plex Sans", sans-serif;
  }
`;

export const StyledOriginalPoster = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  padding: 10px 10px 5px;

  p {
    font-size: 13px;
  }

  & > div > p:last-child {
    color: gray;
    display: block;
    font-size: 10px;
  }

  svg {
    display: block;
    width: 24px;
    height: 24px;
  }
`;

export const StyledPostCard = styled.div`
  width: 100%;
  display: flex;
  max-width: var(--social-max-width);
  margin: 10px 0;
  background-color: white;
  border: 1px solid #eff1f2;
`;

export const StyledPostDetails = styled.div`
  flex: 1;
`;

export const StyledVoteArrow = styled.div<{
  primary?: string;
  secondary?: string;
}>`
  display: flex;
  align-items: center;
  padding: ${({ primary }) => (primary ? "10px 9px" : "0")};
  flex-direction: ${({ primary }) => (primary ? "column" : "row")};
  background-color: ${({ primary, secondary }) =>
    !primary || secondary ? "transparent" : primary};

  svg {
    display: block;
    width: 20px;
    height: 20px;
  }

  p {
    font-size: 10px;
  }
`;
