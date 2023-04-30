import styled from "styled-components";

export const StyledAgentPostTags = styled.div`
  ul {
    gap: 5px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }

  li {
    padding: 5px;
    font-size: 13px;
    list-style: none;
    background-color: #efefef;
  }
`;

export const ImageContainer = styled.div`
  img {
    width: 100%;
  }
`;
