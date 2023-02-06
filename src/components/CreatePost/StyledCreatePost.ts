import styled from "styled-components";

export const StyledCheck = styled.div`
  color: #1c1c1d;
  font-size: 12px;
  line-height: 2.5;
  padding: 20px 10px;
  background-color: var(--social-light-secondary-bg-color);
  font-family: "IBMPlexSans", Arial, Helvetica, sans-serif;

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

export const StyleActionButtons = styled.div`
  gap: 10px;
  display: flex;
  padding: 15px 0;
  align-items: center;
  background-color: white;
  justify-content: flex-end;

  button {
    border: none;
    padding: 4px 8px;
    font-weight: bold;
    border-radius: 20px;
    outline: 2px solid #878a8c4f;
    background-color: transparent;
    color: var(--social-font-color);
  }

  & > button:last-child {
    outline: none;
    padding: 5px 9px;
    background-color: #848484;
    color: var(--social-border-color);
  }
`;

export const StyledTitleHeader = styled.div`
  display: flex;
  padding: 4px 0;
  margin: 16px 0;
  align-items: center;
  border-bottom: 1px solid white;
  justify-content: space-between;

  h2 {
    color: #4b4c4e;
    font-size: 18px;
    padding-bottom: 10px;
    font-family: "IBMPlexsans";
  }
`;

export const StyledDraft = styled.div`
  color: #1181d4;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 8px;
  padding: 6px 16px;
  border-radius: 20px;
  font-family: "Noto sans", Arial, sans-serif;

  &:hover {
    background-color: #cbd0d6;
  }

  span {
    color: white;
    padding: 0px 3px;
    font-weight: 500;
    text-align: center;
    border-radius: 2px;
    background-color: #878a8c;
  }
`;

export const StyledPostOptions = styled.div`
  width: 100%;
  display: flex;
  font-size: 14px;
  overflow-x: auto;
  margin-top: 10px;
  background-color: white;
  font-family: "IBMPlanSans", Arial, sans-serif;

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

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const StyledChooseCommunity = styled.div`
  display: flex;
  max-width: 300px;
  padding: 5px 10px;
  border-radius: 4px;
  align-items: center;
  background-color: white;
  justify-content: space-between;
  color: var(--social-font-color);

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

export const StyledButtonTags = styled.div`
  gap: 10px;
  width: 100%;
  display: flex;
  padding: 15px 10px 15px;
  background-color: white;
  border-bottom: 1px solid var(--social-border-color);

  button {
    gap: 5px;
    display: flex;
    border: none;
    padding: 5px 12px;
    font-weight: bold;
    border-radius: 20px;
    outline: 2px solid #878a8c4f;
    background-color: transparent;
    color: var(--social-font-color);
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
    padding: 4px 8px;
    font-weight: bold;
    border-radius: 20px;
    color: var(--social-secondary-font-color);
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
    flex: 1;
  }
`;

export const StyledPost = styled.div`
  padding: 15px 15px 0;
  background-color: white;
  border-bottom: 1px solid var(--social-border-color);
`;

export const StyledWarning = styled.div`
  margin: 0;
  width: 312px;
  font-size: 12px;
  color: #7c7c7c;
  font-weight: 500;
  padding: 10px 62px 0 0;

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
  width: 312px;
  padding: 12px;
  margin: 40px 0 0;
  border-radius: 5px;
  background-color: white;

  div {
    font-size: 14px;
    padding: 10px 5px;
    color: #1c1c1c;
    font-family: "IBMPlexSans", Arial, sans-serif;
    border-bottom: 1px solid var(--social-border-color);
  }
`;
