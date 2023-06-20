import React from "react";
import App from "./App";
import reactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HelmetProvider } from "react-helmet-async";
const el = document.getElementById("root");

const root = reactDOM.createRoot(el);

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App></App>
    </HelmetProvider>
  </React.StrictMode>
);
