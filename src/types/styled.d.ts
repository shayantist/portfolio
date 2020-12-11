// import original module declaration
import "styled-components";

// and extend it
declare module "styled-components" {
  export interface DefaultTheme {
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
