import React from "react";
import App from "./App";
import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


// After (using createRoot)
const rootElement = document.getElementById("root");
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
