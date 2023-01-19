import styled from "styled-components";

export const StyledInteractWithPostIcons = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  padding: 14px 14px 14px 41px;
  justify-content: space-between;

  svg {
    width: 20px;
    height: 20px;
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
  border-radius: 5px;
  position: relative;
  padding: 2px 19px 2px 2px;
  margin: -1px 10px 2px 41px;
  border: 1px solid #d6d6d6;
  background-color: #f6f7f887;
  border-top-left-radius: 0;

  p {
    font-size: 0.9rem;
    font-family: "Noto Sans", sans-serif;
  }
`;

export const StyledHouseSpec = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  padding: 5px 16px 0;
  margin: -7px 15px 0 22px;
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;
  justify-content: space-between;
  border-left: 1px solid #ddc8c8;
  border-bottom: 1px solid #ddc8c8;

  & > div {
    flex: 1;
    padding: 3px 5px;
    width: max-content;
    text-align: start;
    border-radius: 20px;
  }

  & > div > h6 {
    min-width: max-content;
  }

  & > div > p {
    min-width: 100%;
    font-size: 14px;
    padding: 3px 0px;
    font-weight: bold;
    border-radius: 5px;
    max-width: max-content;
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

export const StyledClientCard = styled.div`
  width: 100%;
  display: flex;
  max-width: 600px;
  margin: 10px auto;
  background-color: white;
  border: 1px solid #eff1f2;
`;

export const StyledPostDetails = styled.div`
  flex: 1;
`;

export const StyledVoteArrow = styled.div`
  display: flex;
  padding: 10px 9px;
  align-items: center;
  flex-direction: column;
  background-color: #f8f9fa;

  svg {
    display: block;
    width: 20px;
    height: 20px;
  }

  p {
    font-size: 10px;
  }
`;
