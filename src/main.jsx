import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { PlantProvider } from "./context/PlantContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PlantProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PlantProvider>
  </StrictMode>,
);
