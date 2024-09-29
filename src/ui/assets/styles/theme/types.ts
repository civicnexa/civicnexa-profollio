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
    btnArrowBg: string;
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