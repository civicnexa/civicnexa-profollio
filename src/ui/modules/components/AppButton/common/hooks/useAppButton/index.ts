import { AppButtonProps } from "../../../index";
import { CircularProgressProps, useTheme } from "@mui/material";

export const useAppButton = ({
  variant = "contained",
  color = "primary",
}: Pick<AppButtonProps, "variant" | "color">) => {
  const theme = useTheme();

  const buttonVariant = variant as keyof typeof theme.button;
  const buttonColor = color as keyof (typeof theme.button)[typeof buttonVariant];
  
  const {
    background,
    color: themeColor,
  } = theme.button[buttonColor];

  const styles: AppButtonProps["sx"] = {
    background,
    color: themeColor,
    columnGap: "10px",

    "&:disabled": {
      background,
      color: themeColor,
      opacity: 0.5,
    },
  };

  const loaderStyles: CircularProgressProps["sx"] = {
    color: themeColor,
    marginRight: "15px",
  };

  return {
    styles,
    loaderStyles
  };
};
