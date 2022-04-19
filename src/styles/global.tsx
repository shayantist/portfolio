import { Global, css } from "@emotion/react";
import { darkTheme as theme } from "./themes";

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          z-index: 1; /* Needed for tsparticles */
        }

        body,
        html {
          font-family: ${theme.fonts.main}, sans-serif;
          background: ${theme.colors.background};
          color: ${theme.colors.text};
        }

        input,
        textarea,
        button,
        select,
        a {
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }

        #tsparticles {
          position: fixed;
          height: 100%;
          width: 100%;
          z-index: 0;
        }
      `}
    />
  );
}
