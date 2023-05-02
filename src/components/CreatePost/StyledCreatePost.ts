import styled from "styled-components";

export const StyledCheck = styled.div`
  font-size: 12px;
  line-height: 2.5;
  padding: 20px 10px;
  color: var(--social-check-font-color);
  font-family: var(--social-ibm-plex-sans-font-family);
  background-color: var(--social-light-secondary-bg-color);

  label {
    font-weight: bold;
  }

  p {
    gap: 5px;
    display: flex;
    align-items: center;
    color: var(--social-secondary-font-color);
  }

  svg {
    width: 18px;
    height: 18px;
    fill: var(--social-font-color);
  }

  div {
    gap: 5px;
    display: flex;
    align-items: center;
  }
`;

export const StyleActionButtons = styled.div<{ bg: boolean }>`
  gap: 10px;
  display: flex;
  padding: 15px 0;
  flex-wrap: wrap;
  position: relative;
  align-items: center;
  justify-content: space-between;
  background-color: var(--light-bg-color-primary);

  small {
    top: 50px;
    color: red;
    right: 0px;
    font-size: 0.7rem;
    position: absolute;
    font-family: var(--social-noto-sans-font-family);
  }

  button {
    color: inherit;
    text-decoration: none;
  }

  button {
    margin: 5px;
    border: none;
    padding: 4px 8px;
    font-weight: bold;
    border-radius: 20px;
    background-color: transparent;
    color: var(--social-font-color);
    outline: 2px solid var(--social-button-outline);
  }

  & > div > button:first-child {
    cursor: no-drop;
  }

  & > div > button:last-child {
    margin-right: 0;
    cursor: pointer;
    padding: 5px 9px;
    color: var(--social-border-color);
    outline: var(--social-secondary-font-color);
    background-color: ${({ bg }) =>
      bg
        ? "var(--social-secondary-font-color)"
        : "var(--social-disabled-button-bg-color)"};
    border: 1px solid
      ${({ bg }) =>
        bg
          ? "var(--social-secondary-font-color)"
          : "var(--social-disabled-button-bg-color)"};
    box-shadow: ${({ bg }) =>
      bg ? "3px 1px 7px #00000038" : "none"};
  }
`;

export const StyledTag = styled.div`
  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  div {
    color: #9c27b0;
    padding: 3px 10px;
    border-radius: 20px;
    outline: 1px solid #9c27b04a;
    background-color: var(--social-border-color);
  }
`;

export const StyledTitleHeader = styled.div`
  display: flex;
  padding: 4px 0;
  margin: 16px 0;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--social-light-secondary-bg-color);

  h2 {
    font-size: 18px;
    padding-bottom: 10px;
    color: var(--social-disabled-button-bg-color);
    font-family: var(--social-ibm-plex-sans-font-family);
  }
`;

export const StyledDraft = styled.div`
  font-size: 12px;
  font-weight: 600;
  padding: 4px 8px;
  padding: 6px 16px;
  border-radius: 20px;
  color: var(--social-secondary-font-color);
  font-family: var(--social-noto-sans-font-family);

  &:hover {
    background-color: var(--social-draft-hover-bg-color);
  }

  span {
    padding: 0px 3px;
    font-weight: 500;
    text-align: center;
    border-radius: 2px;
    background-color: var(--social-font-color);
    color: var(--social-light-font-color-primary);
  }
`;

export const StyledPostOptions = styled.div<{ post: boolean }>`
  width: 100%;
  display: flex;
  font-size: 14px;
  overflow-x: auto;
  margin-top: 10px;
  background-color: var(--light-bg-color-primary);
  font-family: var(--social-ibm-plex-sans-font-family);

  button {
    flex: 1;
    gap: 5px;
    display: flex;
    padding: 15px 17px;
    font-weight: bolder;
    align-items: center;
    min-width: max-content;
    justify-content: flex-start;
    background-color: transparent;
    color: var(--social-font-color);
    border: 1px solid var(--social-border-color);
    border-right: none;
  }

  button:disabled {
    cursor: no-drop;
    color: #b7b7b7 !important;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  & > button:first-child {
    color: ${({ post }) =>
      post
        ? "var(--social-font-color)"
        : "var(--social-secondary-font-color) !important"};
    border-bottom-color: ${({ post }) =>
      post
        ? "none"
        : "var(--social-secondary-font-color) !important"};
    svg {
      fill: ${({ post }) =>
        post
          ? "var(--social-font-color)"
          : "var(--social-secondary-font-color) !important"};
    }
  }
  & > button:nth-child(2) {
    color: ${({ post }) =>
      post
        ? "var(--social-secondary-font-color) !important"
        : "var(--social-font-color)"};
    border-bottom-color: ${({ post }) =>
      post
        ? "var(--social-secondary-font-color) !important"
        : "none"};
    svg {
      fill: ${({ post }) =>
        post
          ? "var(--social-secondary-font-color) !important"
          : "var(--social-font-color)"};
    }
  }
`;

export const StyledChooseCommunity = styled.div`
  display: flex;
  max-width: 300px;
  padding: 5px 10px;
  border-radius: 4px;
  align-items: center;
  justify-content: space-between;
  color: var(--social-font-color);
  background-color: var(--light-bg-color-primary);

  & > div {
    gap: 10px;
    display: flex;
    align-items: center;
  }

  svg {
    font-size: 24px;
    stroke-width: 1.5;
  }
`;

export const StyledButtonTagsContainer = styled.div`
  gap: 0.625rem;
  display: flex;
  flex-wrap: wrap;
  max-width: 30rem;
  margin-top: 1.25rem;
  justify-content: space-between;
`;

export const StyledButtonTags = styled.div<{
  disabled: boolean;
}>`
  z-index: 1;
  display: flex;
  background-color: var(--light-bg-color-primary);
  border-bottom: 1px solid var(--social-border-color);

  button {
    gap: 5px;
    border: none;
    display: flex;
    padding: 5px 12px;
    font-weight: bold;
    height: min-content;
    border-radius: 20px;
    background-color: transparent;
    color: ${({ disabled }) =>
      disabled
        ? "var(--social-font-color)"
        : "var(--social-secondary-font-color)"};
    box-shadow: ${({ disabled }) =>
      disabled ? "none" : "3px 1px 7px #0000006b"};
    cursor: ${({ disabled }) =>
      disabled ? "no-drop" : "pointer"};
    outline: 2px solid
      ${({ disabled }) =>
        disabled ? "var(--social-font-color)" : "#008eed94"};
  }
`;

export const StyledInputTag = styled.div`
  display: flex;
  /* padding: 15px 10px; */
  position: relative;
  align-items: center;
  border-bottom: 1px solid var(--social-border-color);

  button {
    top: 0;
    right: 0;
    border: none;
    display: flex;
    position: absolute;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    padding: 6px 7px 6px 3px;
    outline: 2px solid green;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color: ghostwhite;

    svg {
      fill: green;
    }
  }

  input {
    height: 25px;
    border: none;
    width: 150px;
    border-radius: 20px;
    padding: 0 25px 0 10px;
    outline: 2px solid #008eed94;
    box-shadow: 3px 1px 7px #0000006b;
  }
`;

export const StyledMarkdown = styled.div`
  display: flex;
  font-size: 12px;
  margin-top: 10px;
  padding: 8px 16px;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--social-border-color);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: none;
  background-color: var(--social-light-secondary-bg-color);

  p {
    cursor: no-drop;
    padding: 4px 8px;
    color: #878a8ca6;
    font-weight: bold;
    border-radius: 20px;

    &:hover {
      background-color: #1c1c1c24;
    }
  }

  h3 {
    gap: 5px;
    display: flex;
    align-items: center;
    color: var(--social-font-color);
  }

  svg {
    width: 15px;
    height: 15px;
  }
`;

export const StyledPostTextArea = styled.div`
  width: 100%;

  textarea {
    width: 100%;
    padding: 5px;
    resize: vertical;
    border-radius: 5px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border: 1px solid var(--social-border-color);
    border-top: none;
  }
`;

export const StyledUplaodImage = styled.div`
  gap: 10px;
  width: 100%;
  display: flex;
  margin-top: 15px;
  min-height: 200px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 1px dotted var(--social-border-color);

  & > div:first-of-type {
    width: 100%;
    display: flex;
    font-weight: 600;
    justify-content: center;
    font-family: var(--social-ibm-plex-sans-font-family);

    input {
      opacity: 0;
      width: 0.1px;
      height: 0.1px;
      position: absolute;
    }

    label {
      gap: 5px;
      display: flex;
      cursor: pointer;
      font-size: 14px;
      padding: 5px 10px;
      font-weight: bold;
      position: relative;
      align-items: center;
      min-width: max-content;
      justify-content: center;
      background-color: white;
      transition: background-color 0.2s ease-out;
      color: var(--social-secondary-font-color);
      font-family: var(--social-ibm-plex-sans-font-family);
      border: 1px solid var(--social-secondary-font-color);
    }

    label:hover,
    label:focus {
      background-color: var(--social-light-secondary-bg-color);
    }

    label:focus {
      outline: 1px solid #000;
      outline: -webkit-focus-ring-color auto 2px;
    }
  }
`;

export const StyledPostInputFields = styled.div`
  width: 100%;

  input {
    width: 100%;
    padding: 8px 16px;
    border-radius: 5px;
    border: 1px solid var(--social-border-color);
  }
`;

export const StyledCreatePostPage = styled.div`
  gap: 25px;
  width: 100%;
  display: flex;
  max-width: 1076px;
  margin: 20px auto 50px;

  & > div:first-of-type {
    flex: 70%;
    width: 100%;
  }
  & > div:last-of-type {
    flex: 30%;
  }

  @media screen and (max-width: 850px) {
    & > div:last-of-type {
      display: none;
    }
  }
`;

export const StyledPost = styled.div`
  padding: 15px 15px 0;
  background-color: var(--light-bg-color-primary);
  border-bottom: 1px solid var(--social-border-color);
`;

export const StyledWarning = styled.div`
  margin: 0;
  flex: 30%;
  font-size: 12px;
  font-weight: 500;
  padding: 10px 62px 0 0;
  color: var(--social-warning-font-color);

  span {
    color: var(--social-secondary-font-color);
  }
`;

export const StyledRedditRulesHeader = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;

  svg {
    width: 40px;
    height: 40px;
  }
`;

export const StyledRedditRules = styled.div`
  width: 100%;
  padding: 12px;
  margin: 40px 0 0;
  border-radius: 5px;
  background-color: var(--light-bg-color-primary);

  div {
    font-size: 14px;
    padding: 10px 5px;
    color: var(--social-dark-font-color);
    border-bottom: 1px solid var(--social-border-color);
    font-family: var(--social-ibm-plex-sans-font-family);
  }
`;

export const StyledPostAs = styled.select`
  flex: 1;
  border: none;
  color: #878a8c;
  font-size: 16px;
  font-family: var(--body-font-family);
`;

export const StyledProgressBar = styled.div<{ width: number }>`
  height: 20px;
  align-self: flex-start;
  background-color: green;
  width: ${({ width }) => `${width}%`};
`;
