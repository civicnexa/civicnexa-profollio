'use client';

import { mergeDeep } from "@/common/utils";
import { createTheme, ThemeOptions } from "@mui/material/styles";

const baseTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#0B1029",
        },
        background: {
            default: "#FFFFFF",
        },
    },
    typography: {
        fontFamily: 'Outfit, sans-serif',
    },
    header: {
        color: "#8A8C99",
    },
    footer: {
        textColor: "#A1A4B2",
    },
});

export const createAppTheme = (overrides: ThemeOptions) => {
    const mergedTheme = mergeDeep(baseTheme, overrides);
    return createTheme(mergedTheme);
  };