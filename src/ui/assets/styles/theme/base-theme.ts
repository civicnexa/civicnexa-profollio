'use client';

import { mergeDeep } from "@/common/utils";
import { createTheme, ThemeOptions } from "@mui/material/styles";

export const baseTheme = createTheme({
    breakpoints: {
        values: {
          xxs: 0,
          xs: 600,
          sm: 900,
          md: 1200,
          lg: 1400,
          xl: 1650,
        },
    },
    palette: {
        mode: "light",
        primary: {
            main: "#0B1029",
        },
        secondary: {
            main: "#8A8C99",
        },
        background: {
            default: "#FFFFFF",
        },
    },
    general: {
        sectionTitle: "#737580",
        color: "#070A1C",
        darkColor: "#2E2F33",
        btnBg: "#1E2D70",
    },
    typography: {
        fontFamily: 'Outfit, sans-serif',
    },
    footer: {
        textColor: "#A1A4B2",
        socialColor: "#CDCFD6",
    },
});

export const createAppTheme = (overrides: ThemeOptions) => {
    const mergedTheme = mergeDeep(baseTheme, overrides);
    return createTheme(mergedTheme);
  };