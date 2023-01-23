import styled from "styled-components";

export const StyledCheck = styled.div`
padding: 20px 10px;
background-color: #f6f7f8;

div {
  gap: 5px;
  display: flex;
}
`;

export const StyleActionButtons = styled.div`
display: flex;
padding: 10px;
align-items: center;
justify-content: flex-end;
background-color: white;

button {
  padding: 4px 8px;
  border-radius: 20px;
  background-color: transparent;
}

& > button:last-child {
  background-color: #1c1c1c;
}
`;

export const StyledTitleHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

h2 {
  font-size: 18px;
  font-family: "IBMPlexsans";
}
`;

export const StyledDraft = styled.div`
color: #1181d4;
padding: 4px 8px;
border-radius: 20px;

&:hover {
  background-color: #cbd0d6;
}

span {
  padding: 2px;
  color: white;
  background-color: #878a8c;
}
`;

export const StyledPostOptions = styled.div`
width: 100%;
display: flex;
font-size: 14px;
max-width: 600px;
overflow-x: auto;
margin-top: 10px;
background-color: white;
font-family: "IBMPlanSans", Arial, sans-serif;

div {
  flex: 1;
  gap: 5px;
  display: flex;
  padding: 15px 17px;
  align-items: center;
  min-width: max-content;
  justify-content: flex-start;
}

svg {
  width: 20px;
  height: 20px;
}
`;

export const StyledChooseCommunity = styled.div`
display: flex;
max-width: 250px;
padding: 5px 10px;
align-items: center;
background-color: white;
justify-content: space-between;

& > div {
  gap: 10px;
  display: flex;
  align-items: center;
}

svg {
  font-size: 24px;
}
`;

export const StyledButtonTags = styled.div`
gap: 10px;
width: 100%;
display: flex;
padding: 15px 10px 15px;
background-color: white;
border-bottom: 1px solid grey;

button {
  gap: 5px;
  display: flex;
  outline: none;
  padding: 5px 12px;
  border-radius: 20px;
  border: 1px solid grey;
  background-color: transparent;
}
`;

export const StyledMarkdown = styled.div`
display: flex;
padding: 5px 0;
font-size: 12px;
margin-top: 10px;
align-items: center;
border: 1px solid grey;
background-color: #f6f7f8;
justify-content: space-between;
border-bottom: none;

p {
  padding: 4px 8px;
  border-radius: 20px;
  &:hover {
    background-color: #1c1c1c24;
  }
}

h3 {
  gap: 5px;
  display: flex;
  align-items: center;
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
  border-top: none;
}
`;

export const StyledPostInputFields = styled.div`
width: 100%;

input {
  width: 100%;
}
`;

export const StyledCreatePost = styled.div`
width: 100%;
max-width: 600px;
margin: 50px auto;
`;

export const StyledPost = styled.div`
padding: 0 15px 15px;
background-color: white;
`;
