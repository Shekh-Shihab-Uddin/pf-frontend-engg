import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "./theme.ts";
import { ColorModeProvider } from "@/components/ui/color-mode";
import "@fontsource/source-sans-pro/index.css";
import "@fontsource-variable/nunito/index.css";
import "./locales/i18n-config.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <ColorModeProvider>
        <App />
      </ColorModeProvider>
    </ChakraProvider>
  </StrictMode>
);
