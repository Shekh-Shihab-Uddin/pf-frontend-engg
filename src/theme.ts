import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  globalCss: {
    main: {
      backgroundColor: "#ffffff",
      padding: "50px",
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: "@fontsource/Nunito Variable" },
        body: { value: "@fontsource/Source Sans Pro Variable" },
      },
      colors: {
        primary: {
          light: { value: "#e0ca6e" },
          dark: { value: "#b59d3c" },
        },
        secondary: { value: "#b85c2a" },
        black: { value: "#1c0b03" },
        JavaScript: { value: "#5F1B61" },
        React: { value: "#FF7308" },
        Redux: { value: "black" },
        TypeScript: { value: "#0F1B61" },
        ES6: { value: "#fea154" },
        HTML: { value: "#E72F09" },
        CSS: { value: "#0528F4" },
        Tailwind: { value: "#9038f4" },
        Bootstrap: { value: "#000000bc" },
        Firebase: { value: "#feba54" },
        ChakraUI: { value: "#31b03e" },
        i18next: { value: "#3b0000" },
        Docker: { value: "#0000bc" },
        Solidity: { value: "#fe5ba4" },
        Ethereum: { value: "#fe5ba4" },
        "Subgraph (ponder)": { value: "#fe5ba4" },
        Wagmi: { value: "#fe5ba4" },
        Hardhat: { value: "#fe5ba4" },
        EthersJS: { value: "#fe5ba4" },
        Vercel: { value: "#0070bc" },
        Railway: { value: "#0000bc" },
      },
    },
  },
});
export const system = createSystem(defaultConfig, customConfig);
