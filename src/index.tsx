import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Getting the root container element from the DOM
const container = document.getElementById("root");
if (container) {
  // Creating a root and rendering the App component
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
