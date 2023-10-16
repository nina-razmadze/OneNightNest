import React from "react";
import App from "@src/App";

import "@src/assets/styles/index.css";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import GlobalCSS from "@src/assets/styles/global.styled";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalCSS />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
