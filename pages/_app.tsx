import "../styles/globals.css";
import "swiper/scss"; // core Swiper
import "swiper/scss/navigation"; // Navigation module
import "swiper/scss/pagination"; // Pagination module
import type { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import { defaultTheme, getDesignTokens } from "../components/layout/theme";
import { createContext, useMemo, useState } from "react";
import { createTheme, responsiveFontSizes } from "@mui/material";

export const Context = createContext({
  toggleColorMode: () => {},
  colorTheme: "",
});

export default function App({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  let theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  theme = createTheme(theme, defaultTheme);
  theme = responsiveFontSizes(theme,{factor:3});
  
  return (
    <Context.Provider value={{ ...colorMode, colorTheme: mode }}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Context.Provider>
  );
}
