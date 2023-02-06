import styled from "styled-components";
import { SlPicture } from "react-icons/sl";
import { BsLink45Deg } from "react-icons/bs";
import { AvatarSVG } from "../assets/Svg/SocialSVG";

export default function CreatePost() {
  return (
    <StyledCreatePost>
      <AvatarSVG />
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
    outline: 1px solid #eff1f2;
    background-color: var(--social-light-secondary-bg-color);
  }

  & > svg:first-child {
    width: 42px;
    height: 32px;
    fill: #fff;
    border-radius: 100px;
    background: #d7dfe2;
  }

  svg {
    width: 25px;
    height: 25px;
    fill: #9ea0a2;
  }
`;
