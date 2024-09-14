import { RecursivePartial } from "@/common/utils";


type footer = {
    textColor: string;
    socialColor: string;
};

type general = {
    sectionTitle: string;
    color: string;
    darkColor: string;
    btnBg: string;
};

interface BaseThemeExtension{
    footer: footer;
    general: general;
};


declare module "@mui/material/styles" {
    interface BreakpointOverrides {
        xxs: true;
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
      }
    interface Theme extends BaseThemeExtension {}
  
    interface ThemeOptions extends RecursivePartial<BaseThemeExtension> {}
}

export {};