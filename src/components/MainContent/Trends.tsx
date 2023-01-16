import styled from "styled-components";
import TrendsImage from "../assets/trends.jpg";

const StyledTrends = styled.div<{ bgImage: string }>`
  line-height: 1.5;
  position: relative;
  & > div:first-child {
    width: 100%;
    display: flex;
    height: 500px;
    margin: 40px 0;
    color: white;
    align-items: center;
    background-size: cover;
    filter: brightness(0.5);
    justify-content: center;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${({ bgImage }) => bgImage});
  }

  & > div:last-child {
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    color: white;
    position: absolute;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  p {
    font-size: 24px;
    max-width: 600px;
    font-weight: bold;
    margin: 40px auto;
    text-align: center;
    text-shadow: -1px -2px 1px black;
  }

  h2 {
    font-size: 20px;
    font-weight: 500;
    text-shadow: 3px -5px 5px black;
  }

  button {
    color: white;
    font-size: 1rem;
    cursor: pointer;
    border: 2px solid;
    padding: 10px 24px;
    border-radius: 20px;
    background-color: transparent;

    &:hover {
      background-color: #ff000053;
    }
  }
`;

export default function Trends() {
  return (
    <StyledTrends bgImage={TrendsImage}>
      <div />
      <div>
        <h2>Trends</h2>
        <p>
          The Week's Most Popular Home Is a Sprawling Texas Ranch With a Whole
          Lot Going On Inside
        </p>
        <button>Read More</button>
      </div>
    </StyledTrends>
  );
}
