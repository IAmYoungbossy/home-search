import styled from "styled-components";

export const StyledAgentPostTags = styled.div`
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  li {
    padding: 5px;
    font-size: 13px;
    list-style: none;
    background-color: #efefef;
  }
`;

export const ImageContainer = styled.div<{
  bgImage: string;
}>`
  height: 300px;
  max-width: 625px;
  border-radius: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${({ bgImage }) => bgImage});
`;
