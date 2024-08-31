'use client';

import { mergeDeep } from "@/common/utils";
import { createTheme, ThemeOptions } from "@mui/material/styles";

const baseTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#0B1029",
        },
    },
    typography: {
        fontFamily: 'Outfit, sans-serif',
    },
});

export const createAppTheme = (overrides: ThemeOptions) => {
    const mergedTheme = mergeDeep(baseTheme, overrides);
    return createTheme(mergedTheme);
  };