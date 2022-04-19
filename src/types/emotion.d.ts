// import original module declaration
import "@emotion/react";

// and extend it
declare module "@emotion/react" {
  export interface Theme {
    colors: {
      background: string;
      text: string;
      cardBackground: string;
      accent: string;
    };
    measurements: {
      // in px
      mobileBreakpoint: number;
      headerHeight: number;
      maxWidth: number;
    };
    fonts: {
      main: string;
    };
  }
}
