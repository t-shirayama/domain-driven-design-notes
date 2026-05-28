import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { siteConfig } from "../site.config";
import App from "./App";
import "./styles.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element was not found.");
}

document.title = siteConfig.siteTitle;
document
  .querySelector('meta[name="description"]')
  ?.setAttribute("content", siteConfig.siteDescription);

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
