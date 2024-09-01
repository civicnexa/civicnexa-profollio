import { Stack, StackProps } from "@mui/material";
import { ResponsiveStyleValue } from "@mui/system";

interface CustomStackProps extends StackProps {
    direction?: ResponsiveStyleValue<"row" | "column">;
};

export const CustomStack = ({ direction = "row", ...props }: CustomStackProps) => {
  return <Stack {...props} direction={direction} />;
};
