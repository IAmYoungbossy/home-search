import React from "react";
import App from "./components/App/App";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
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
    --social-button-outline: #878a8c4f;
    --social-draft-hover-bg-color: #cbd0d6;
    --social-secondary-font-color: #1181d4;
    --social-comment-purple-color: #ff66ac;
    --social-border-left-darkgrey: darkgray;
    --social-disabled-button-color: #bebebe;
    --social-disabled-button-bg-color: #a1a1a1;
    --social-light-secondary-bg-color: #f6f7f8;
    --social-noto-sans-font-family: "Noto sans", Arial, sans-serif;
    --social-ibm-plex-sans-font-family: "IBM Plex Sans", Arial, Helvetica, sans-serif;

    --light-bg-color-primary: white;
  }

  body {
    min-height: 100vh;
    position: relative;
    font-family: Roboto, san-serif;
  }
`;

root.render(
  <React.StrictMode>
    <GlobalCSS />
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
