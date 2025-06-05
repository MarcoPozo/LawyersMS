import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "./scripts/tidioControl.js";
import App from "./App.jsx";
import "./style/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
