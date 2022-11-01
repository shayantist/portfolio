/* eslint-disable @next/next/inline-script-id */
import React, { useState } from "react";
import type { AppProps } from "next/app";

// Styling
import { ThemeProvider } from "@emotion/react";
import { AnimatePresence } from "framer-motion";
import GlobalStyles from "../styles/global";
import { darkTheme } from "../styles/themes";
import { Particles } from "../components";

// Components
import { Header, Footer } from "../components";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme] = useState("dark"); // add setTheme when adding theme toggle

  // const themeToggler = () => {
  //   theme === "light" ? setTheme("dark") : setTheme("light");
  // };
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-1K0W2VZKJ4`}
        // eslint-disable-next-line react/jsx-no-comment-textnodes
      />

      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-1K0W2VZKJ4', {
        page_path: window.location.pathname,
        });
    `}
      </Script>

      <ThemeProvider theme={theme === "light" ? darkTheme : darkTheme}>
        <GlobalStyles />
        <Header />

        <Particles />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>

        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
