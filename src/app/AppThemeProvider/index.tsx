import { PropsWithChildren } from "react";
import { ThemeProviderProps } from "@mui/material/styles/ThemeProvider";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { LocalizationProvider } from "@mui/x-date-pickers";

export type AppThemeProviderProps = PropsWithChildren & {
  theme: ThemeProviderProps["theme"];
};

export const AppThemeProvider = ({ children, theme }: AppThemeProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
      {/* <LocalizationProvider dateAdapter={AdapterDateFns}>{children}</LocalizationProvider> */}
    </ThemeProvider>
  );
};
