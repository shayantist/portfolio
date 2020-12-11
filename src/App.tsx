import React, { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

// Styling
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import { GlobalStyle } from "./styles/global";
import { darkTheme } from "./styles/themes";

// Pages
import WorkPage from "./pages/Work/WorkPage";
import ResearchPage from "./pages/Research/ResearchPage";
import AboutPage from "./pages/About/AboutPage";

// Components
import { Header, Footer } from "./components";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? darkTheme : darkTheme}>
      <ScrollToTop />
      <GlobalStyle />
      <Header />

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/portfolio" component={WorkPage} />
          <Route exact path="/portfolio/research" component={ResearchPage} />
          <Route exact path="/portfolio/about" component={AboutPage} />
        </Switch>
      </AnimatePresence>

      <Footer />
    </ThemeProvider>
  );
}
export default App;
