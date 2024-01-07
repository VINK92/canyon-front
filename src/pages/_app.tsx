import type { AppProps } from "next/app";
import { THEME_NAMES } from "@src/styles/themes/theme-constants";
import { ThemeProvider } from "@src/styles/themes/context/ThemeProvider";
import "@src/localizations";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme={THEME_NAMES.main}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
