import UIProvider from "@/context/ui/UIProvider";
import "@/styles/globals.css";
import { darkTheme, lightTheme } from "@/themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  )
}
