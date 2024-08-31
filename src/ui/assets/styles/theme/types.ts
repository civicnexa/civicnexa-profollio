import { RecursivePartial } from "@/common/utils";

interface BaseThemeExtension{};

interface ThemeExtension extends BaseThemeExtension{};

declare module "@mui/material/styles" {
    interface Theme extends BaseThemeExtension {}
  
    interface ThemeOptions extends RecursivePartial<BaseThemeExtension> {}
}

declare module "@mui/material/styles" {
    interface Theme extends ThemeExtension {}

    interface ThemeOptions extends ThemeExtension {}
}

export {};