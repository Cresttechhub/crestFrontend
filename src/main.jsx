import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TanStackProvider from "./components/providers/TanStackProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TanStackProvider>
      <App />
    </TanStackProvider>
  </StrictMode>
);
