import Document, { Head, Html, Main, NextScript } from "next/document";
import { darkTheme as theme } from "../styles/themes";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Google Fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href={`https://fonts.googleapis.com/css2?family=${theme.fonts.main}:wght@300;400;500;700&display=swap`}
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
