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
      lineHeight: 1.2,
      textAlign: "center",
    },
    h2: {
      fontFamily: "Marmelad",
      fontWeight: 400,
      lineHeight: 1.2,
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
    }
  }
}