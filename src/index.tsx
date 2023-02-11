import React from "react";
import App from "./components/App/App";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const GlobalCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --social-max-width: 740px;
    --social-font-color: #878A8C;
    --rich-text-border-color: grey;
    --social-border-color: #EDEFF1;
    --social-dark-font-color: #1c1c1c;
    --social-button-outline: #878a8c4f;
    --social-check-font-color: #1c1c1d;
    --social-font-color-primary: #1a1a1b;
    --social-warning-font-color: #7c7c7c;
    --social-page-outline-color: #eff1f2;
    --social-draft-hover-bg-color: #cbd0d6;
    --social-secondary-font-color: #0f74be;
    --social-comment-purple-color: #ff66ac;
    --social-sign-in-border-color: #dde1e8;
    --social-border-left-darkgrey: darkgray;
    --social-disabled-button-color: #bebebe;
    --social-light-font-color-primary: white;
    --social-title-header-font-color: #4b4c4e;
    --social-page-bg-color-secondary: #dae0e6;
    --social-disabled-button-bg-color: #a1a1a1;
    --social-light-secondary-bg-color: #f6f7f8;
    --social-noto-sans-font-family: "Noto sans", Arial, sans-serif;
    --social-ibm-plex-sans-font-family: "IBM Plex Sans", Arial, Helvetica, sans-serif;

    --footer-bg-color: #2b2b2b;
    --heart-hover-color: #d92228;
    --disclosure-bg-color: #f7f7f7;
    --light-bg-color-primary: white;
    --hero-placeholder-color: #470000;
    --house-spec-border-color: #ddc8c8;
    --body-font-family: Roboto, san-serif;
    --disclosure-border-top-color: #2b2b2b30;
    --interact-with-post-border-color: #d6d6d6;
    --discount-card-box-shadow-color: #00000042;
  }

  body {
    min-height: 100vh;
    position: relative;
    font-family: var(--body-font-family);
  }
`;

root.render(
  <React.StrictMode>
    <GlobalCSS />
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
