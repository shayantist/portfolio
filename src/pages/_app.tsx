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

function MyApp({ Component, pageProps }: AppProps) {
  const [theme] = useState("dark"); // add setTheme when adding theme toggle

  // const themeToggler = () => {
  //   theme === "light" ? setTheme("dark") : setTheme("light");
  // };

  return (
    <ThemeProvider theme={theme === "light" ? darkTheme : darkTheme}>
      <GlobalStyles />
      <Header />

      <Particles />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>

      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
