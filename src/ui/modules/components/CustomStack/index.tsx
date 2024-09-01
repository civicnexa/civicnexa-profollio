import { Stack, StackProps } from "@mui/material";

interface CustomStackProps extends StackProps {
    direction?: "row" | "column";
};

export const CustomStack = ({ direction = "row", ...props }: CustomStackProps) => {
  return <Stack {...props} direction={direction} />;
};
