export const coloredTheme = ({ currentTheme, isRTL, isDark }) => {
  return {
    direction: isRTL ? "rtl" : "ltr",
    palette: {
      primary: {
        main: currentTheme.elements.colors.primary,
      },
      secondary: {
        main: currentTheme.elements.colors.secondary,
      },
      //USE FOR FONTS
      textMed: {
        main: currentTheme.elements.colors.textMed,
      },
    },
    globals: currentTheme.elements,
    ...typographyHeadersConfiguration,
  };
};
export const darkTheme = ({ currentTheme, isRTL, isDark }) => {
  return {
    direction: isRTL ? "rtl" : "ltr",

    palette: {
      type: "dark",
      background: {
        default: "#0c0a0a",
      },
      primary: {
        main: currentTheme.elements.colors.darkPrimary,
      },
      secondary: {
        main: currentTheme.elements.colors.secondary,
      },
      //USE FOR FONTS
      textMed: {
        main: currentTheme.elements.colors.textMed,
      },
    },
    globals: currentTheme.elements,
    ...typographyHeadersConfiguration,
  };
};

export const blindTheme = ({ currentTheme, isRTL }) => {
  return {
    direction: isRTL ? "rtl" : "ltr",
    palette: {
      type: "blind",
      background: {
        default: "#0c0a0a",
      },
      primary: {
        main: currentTheme?.elements?.colors?.blindPrimary,
      },
      secondary: {
        main: currentTheme?.elements?.colors?.secondary,
      },
      //USE FOR FONTS
      textMed: {
        main: currentTheme?.elements?.colors?.textMed,
      },
    },
    globals: currentTheme?.elements,
    ...typographyHeadersConfiguration,
  };
};

const typographyHeadersConfiguration = {
  typography: {
    h1: {
      fontFamily: "Marmelad",
      fontSize: "80px",
      fontWeight: 400,
      lineHeight: "1.2em",
      textAlign: "center",
      "@media (max-width: 389px)": {
        fontSize: "36px",
      },
      "@media (min-width: 390px) and (max-width: 429px)": {
        fontSize: "48px",
      },
      "@media (min-width: 430px) and (max-width: 744px)": {
        fontSize: "64px",
      },
      "@media (min-width: 745px)": {
        fontSize: "80px",
      }
    },
    h2: {
      fontFamily: "Marmelad",
      fontWeight: 400,
      lineHeight: "1.2em",
      textAlign: "center",
      "@media (max-width: 359px)": {
        fontSize: "32px"
      },
      "@media (min-width: 360px) and (max-width: 375px)": {
        fontSize: "36px",
      },
      "@media (min-width: 375px) and (max-width: 744px)": {
        fontSize: "40px"
      },
      "@media (min-width: 745px)": {
        fontSize: "48px",
      },
    },
    h3: {
      fontFamily: "Marmelad",
      fontWeight: 500,
      lineHeight: "1.2em",
      "@media (max-width: 744px)": {
        fontSize: "20px",
      },
      "@media (min-width: 745px)": {
        fontSize: "24px"
      },
    },
    "primary": {
      fontFamily: "Noto Sans",
      fontWeight: 400,
      lineHeight: 1.2,
      fontSize: "14px",
    }
  }
}