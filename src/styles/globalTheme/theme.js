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
      fontSize: "48px",
      fontWeight: 400,
      lineHeight: 1.2,
      textAlign: "center",
    }
  }
}