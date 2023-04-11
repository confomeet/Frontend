import React from "react";
import { Helmet } from "react-helmet";
import "./init";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{"Lilac Meet"}</title>
      <link rel="icon" href={`${process.env.PUBLIC_URL}/${"favicon.ico"}`} />
      <link
        rel="apple-touch-icon"
        href={`${process.env.PUBLIC_URL}/${"newLogo.png"}`}
      />
    </Helmet>
    <App />
  </React.StrictMode>
);

reportWebVitals();
