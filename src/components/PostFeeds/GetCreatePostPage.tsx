import styled from "styled-components";
import { Link } from "react-router-dom";
import { SlPicture } from "react-icons/sl";
import { BsLink45Deg } from "react-icons/bs";
import { AvatarSVG } from "../../assets/Svg/SocialSVG";

export default function GetCreatePostPage() {
  return (
    <StyledCreatePost>
      <AvatarSVG />
      <Link to="/create-post">
        <input
          type="text"
          name="post"
          placeholder="Create Post"
        />
      </Link>
      <SlPicture />
      <BsLink45Deg />
    </StyledCreatePost>
  );
}

const StyledCreatePost = styled.div`
  gap: 10px;
  width: 100%;
  display: flex;
  padding: 8px 10px;
  margin: 20px 0 10px;
  align-items: center;
  justify-content: space-between;
  background-color: var(--light-bg-color-primary);

  a {
    width: 100%;
    color: inherit;
    text-decoration: none;

    input {
      width: 100%;
      border: none;
      padding: 8px;
      border-radius: 5px;
      outline: 1px solid var(--social-page-outline-color);
      background-color: var(--social-light-secondary-bg-color);
    }
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
