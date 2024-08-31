import { RecursivePartial } from "@/common/utils";


type header = {
    color: string;
};
type footer = {
    textColor: string;
};

interface BaseThemeExtension{};

interface ThemeExtension extends BaseThemeExtension{
    header: header;
    footer: footer;
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