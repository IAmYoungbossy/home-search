import styled from "styled-components";

export const StyledRichTextEditor = styled.div<{
  bgColor: boolean;
}>`
  width: 100%;
  padding: 5px;
  display: flex;
  font-size: 12px;
  border-top: none;
  align-items: center;
  justify-content: space-between;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  max-width: var(--social-max-width);
  border: 1px solid var(--rich-text-border-color);
  background-color: var(--social-light-secondary-bg-color);

  div {
    gap: 5px;
    display: flex;
    align-items: center;
  }

  p {
    cursor: no-drop;
    color: var(--social-comment-purple-color);
  }

  button {
    border: none;
    outline: none;
    padding: 3px 10px;
    font-weight: bold;
    border-radius: 20px;
    color: var(--social-disabled-button-color);
    background-color: ${({ bgColor }) =>
      bgColor
        ? "blue"
        : "var(--social-disabled-button-bg-color)"};
  }
`;

export const StyledSortBy = styled.div`
  h6 {
    display: flex;
    align-items: center;
    padding: 20px 0 10px;
    color: var(--social-comment-purple-color);
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
    font-family: var(--social-noto-sans-font-family);
  }

  span {
    color: var(--social-comment-purple-color);

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

export const StyledTextArea = styled.div`
  display: flex;
  margin-top: -11px;
  flex-direction: column;
  padding: 30px 32px 40px 61px;
  max-width: var(--social-max-width);
  background-color: var(--light-bg-color-primary);

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
    gap: 10px;
    display: flex;
    font-size: 12px;
    max-width: 400px;
    align-items: center;
    justify-content: flex-start;
  }

  li {
    gap: 5px;
    list-style: none;
    justify-content: space-between;

    svg {
      opacity: 0.7;
      font-size: 18px;
    }
  }
`;

export const StyledCommentBox = styled.div`
  padding-left: 20px;
  margin: -5px 21px 0;
  max-width: var(--social-max-width);
  border-left: 1px solid var(--social-border-left-darkgrey);

  p {
    font-size: 14px;
    color: var(--social-dark-font-color);
    font-family: var(--social-noto-sans-font-family);
  }
`;

export const StyledComment = styled.div`
  gap: 24px;
  width: 100%;
  display: flex;
  max-width: fit-content;
  margin: 0.875rem auto 1.5rem auto;

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
      top: 3.875rem;
      position: sticky;
    }
  }
`;

export const StyledcommentCard = styled.div`
  width: 100%;
  padding-left: 37px;
  max-width: var(--social-max-width);
  background-color: var(--light-bg-color-primary);
`;
