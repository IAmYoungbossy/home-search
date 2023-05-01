import React from "react";
import App from "./components/App/App";
import GlobalCSS from "./globalStyles";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import AppDataProvider from "./context/AppContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalCSS />
    <AppDataProvider>
      <App />
    </AppDataProvider>
  </React.StrictMode>
);

reportWebVitals();
