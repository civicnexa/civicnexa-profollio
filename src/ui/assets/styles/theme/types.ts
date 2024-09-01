import { RecursivePartial } from "@/common/utils";


type footer = {
    textColor: string;
    socialColor: string;
};

type general = {
    sectionTitle: string;
    color: string;
};

interface BaseThemeExtension{};

interface ThemeExtension extends BaseThemeExtension{
    footer: footer;
    general: general;
};

declare module "@mui/material/styles" {
    interface Theme extends BaseThemeExtension {}
  
    interface ThemeOptions extends RecursivePartial<BaseThemeExtension> {}
}

declare module "@mui/material/styles" {
    interface Theme extends ThemeExtension {}

    interface ThemeOptions extends ThemeExtension {}
}

export {};