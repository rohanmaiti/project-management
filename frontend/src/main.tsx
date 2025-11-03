import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ThemeProvider from "./theme/ThemeProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import { ClerkProviderWithTheme } from "./providers/ClerkProviderWithTheme.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <ClerkProviderWithTheme>
          <App />
        </ClerkProviderWithTheme>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
