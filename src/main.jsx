import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import TanStackProvider from "./components/providers/TanStackProvider.jsx";
import { PaymentProvider } from "./contexts/PaymentContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TanStackProvider>
      <PaymentProvider>
        <App />
      </PaymentProvider>
    </TanStackProvider>
  </StrictMode>
);
