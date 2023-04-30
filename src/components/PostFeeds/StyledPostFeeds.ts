import styled from "styled-components";

export const StyledRedditPolicies = styled.div`
  width: 100%;
  top: 3.875rem;
  font-size: 12px;
  margin-top: 15px;
  position: sticky;
  border-radius: 5px;
  padding: 0 12px 12px;
  color: var(--social-font-color-primary);
  background-color: var(--light-bg-color-primary);
  font-family: var(--social-noto-sans-font-family);

  & > div {
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid var(--social-border-color);

    div {
      flex: 1;
    }
  }

  li {
    list-style: none;
    margin: 2px 0 6px;
  }

  p {
    margin-top: 10px;
  }
`;

export const StyledButton = styled.button`
  padding: 8px;
  border: none;
  margin: 10px;
  font-weight: 700;
  border-radius: 20px;
  border: 1px solid #0079d3;
  background-color: #0079d3;
  color: var(--social-light-font-color-primary);
`;

export const StyledCommunityButton = styled(StyledButton)`
  color: #0079d3;
  background-color: transparent;
`;

export const StyledCreateCard = styled.div`
  width: 100%;
  margin-top: 15px;
  border-radius: 5px;
  padding-bottom: 5px;
  background-color: var(--light-bg-color-primary);

  & > div:first-child {
    display: flex;

    img {
      width: 100%;
    }
  }

  & > div:nth-child(2) {
    display: flex;
    padding: 0 12px;
    margin-top: -10.5px;

    & > div:first-child {
      img {
        width: 40px;
      }
    }

    & > div:last-child {
      font-size: 16px;
      font-weight: 600;
      padding: 33px 0 0 10px;
      color: var(--social-dark-font-color);
      font-family: var(--social-ibm-plex-sans-font-family);
    }
  }

  & > div:nth-child(3) {
    margin-bottom: 15px;
    padding: 10px 18px 0px 12px;

    p {
      font-size: 14px;
      padding-bottom: 15px;
      color: var(--social-dark-font-color);
      font-family: var(--social-noto-sans-font-family);
      border-bottom: 1px solid var(--social-border-color);
    }
  }

  & > div:last-child {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledRedditPremium = styled.div`
  margin-top: 20px;
  border-radius: 5px;
  padding: 8px 12px 10px;
  background-color: var(--light-bg-color-primary);

  button {
    width: 100%;
    border: none;
    padding: 8px;
    font-weight: 700;
    border-radius: 20px;
    background-color: #ff4500;
    color: var(--social-light-font-color-primary);
  }

  & > div {
    display: flex;
    margin: 0 0 8px;

    p {
      font-size: 12px;
      font-weight: 600;
      color: var(--social-font-color-primary);
      font-family: var(--social-ibm-plex-sans-font-family);
    }

    & > div:first-of-type {
      display: flex;
    }

    & > div:last-child > p:first-child {
      font-size: 13px;
      margin: 2px 4px;
    }

    svg {
      display: block;
      margin: auto 12px auto 0;
    }
  }
`;

export const StyledPostFeeds = styled.div`
  gap: 24px;
  display: flex;
  margin: 0 auto;
  max-width: 976px;
  width: fit-content;

  & > div:last-child {
    width: 312px;
  }

  a {
    text-decoration: none;
  }
`;
