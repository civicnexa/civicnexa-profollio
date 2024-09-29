import { RecursivePartial } from "@/common/utils";

type PrimaryBtn = {};

type PrimaryContained = {};

type ButtonType = {
    primary: PrimaryBtn;
    contained: PrimaryContained;
}

type footer = {
    textColor: string;
    socialColor: string;
};

type general = {
    sectionTitle: string;
    color: string;
    darkColor: string;
    btnBg: string;
    btnArrowBg: string;
};
type Color = {
    error: string;
};

type accordion = {
    accordionSummaryColor:string,
    accordionTextColor:string,
  
}
type contact = {
    contactBtn:string
}
interface BaseThemeExtension{
    footer: footer;
    general: general;
    accordion:accordion;
    contact:contact;
    color: Color;
    button: ButtonType;
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