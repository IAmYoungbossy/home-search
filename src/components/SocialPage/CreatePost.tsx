import { FaUserCircle } from "react-icons/fa";
import { SlPicture } from "react-icons/sl";
import { BsLink45Deg } from "react-icons/bs";
import styled from "styled-components";

export default function CreatePost() {
  return (
    <StyledCreatePost>
      <FaUserCircle />
      <input type="text" name="post" placeholder="Create Post" />
      <SlPicture />
      <BsLink45Deg />
    </StyledCreatePost>
  );
}

const StyledCreatePost = styled.div`
  gap: 10px;
  width: 100%;
  display: flex;
  max-width: 740px;
  padding: 8px 10px;
  margin: 20px 0 10px;
  align-items: center;
  background-color: white;
  justify-content: space-between;

  input {
    width: 100%;
    border: none;
    padding: 8px;
    border-radius: 5px;
    background-color: #f6f7f8;
    outline: 1px solid #eff1f2;
  }

  svg {
    width: 25px;
    height: 25px;
  }
`;
