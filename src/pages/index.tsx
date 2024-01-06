import Head from "next/head";
import { useTranslation } from "react-i18next";
import "@src/localizations";
import { HomePage } from "@src/containers/Home";
import { THEME_NAMES } from "@src/styles/themes/theme-constants";
import { ThemeProvider } from "@src/styles/themes/context/ThemeProvider";

export default function Root() {
  const { t } = useTranslation();
  return (
    <ThemeProvider defaultTheme={THEME_NAMES.main}>
      <Head>
        <title>{t("appTitle")}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="%PUBLIC_URL%/fonts/Lato/Lato-Regular.ttf"
          as="font"
          crossOrigin="anonymous"
        />
      </Head>
      <main>
        <HomePage />
      </main>
    </ThemeProvider>
  );
}
