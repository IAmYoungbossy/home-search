import styled from "styled-components";

export const StyledRichTextEditor = styled.div`
  width: 100%;
  padding: 5px;
  display: flex;
  /* margin: 0 auto; */
  font-size: 12px;
  max-width: var(--social-max-width);
  align-items: center;
  border: 1px solid grey;
  border-top: none;
  justify-content: space-between;
  background-color: #f6f7f8;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  div {
    gap: 5px;
    display: flex;
    align-items: center;
  }

  p {
    cursor: no-drop;
    color: #ff66ac;
  }

  button {
    border: none;
    outline: none;
    color: #bebebe;
    padding: 3px 10px;
    font-weight: bold;
    border-radius: 20px;
    background-color: #a1a1a1;
  }
`;

export const StyledSortBy = styled.div`
  h6 {
    display: flex;
    color: #ff66ac;
    align-items: center;
    padding: 20px 0 10px;
  }

  svg {
    font-size: 15px;
    margin-left: 5px;
  }
`;

export const StyledCommentAs = styled.div`
  p {
    padding: 5px 0;
    font-size: 11px;
    font-family: "Noto sans", Arial, sans-serif;
  }

  span {
    color: #ff66ac;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

export const StyledTextArea = styled.div`
  display: flex;
  /* margin: 0 auto; */
  max-width: var(--social-max-width);
  margin-top: -11px;
  flex-direction: column;
  background-color: white;
  padding: 30px 32px 40px 61px;

  textarea {
    width: 100%;
    padding: 5px;
    resize: vertical;
    border-bottom: none;
  }
`;

export const StyledReactionButtons = styled.div`
  padding: 5px 0;
  ul,
  li {
    gap: 5px;
    display: flex;
    font-size: 12px;
    max-width: 400px;
    align-items: center;
    justify-content: space-between;
  }

  li {
    list-style: none;
  }
`;

export const StyledCommentBox = styled.div`
  padding-left: 20px;
  margin: -5px 21px 0;
  border-left: 1px solid darkgray;
  max-width: var(--social-max-width);

  p {
    color: #1c1c1c;
    font-size: 14px;
    font-family: "Noto Sans", Arial, sans-serif;
  }
`;

export const StyledComment = styled.div`
  gap: 24px;
  width: 100%;
  max-width: fit-content;
  margin: 24px auto 24px auto;
  display: flex;

  & > div:first-of-type {
    flex: 1;

    & > div:first-of-type {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }

    & > div:last-of-type {
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }

  & > div:last-of-type {
    margin-top: -30px;
    & > div {
      top: 10px;
      position: sticky;
    }
  }
`;

export const StyledcommentCard = styled.div`
  width: 100%;
  background-color: white;
  max-width: var(--social-max-width);
`;
