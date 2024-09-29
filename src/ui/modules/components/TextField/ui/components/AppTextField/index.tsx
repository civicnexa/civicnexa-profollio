import { CustomStack } from "@/ui/modules/components/CustomStack";
import { Box, BoxProps, Collapse, TextField, TextFieldProps, Typography } from "@mui/material";

export type AppTextFieldProps = TextFieldProps & {
    borderRadius?: string;
    borderWidth?: string;
    padding?: object;
    fontSize?: object;
    marginTop?: object;
    errorMessage?: string;
    boxProps?: BoxProps;
  };

const styles = {
    width: "100%",
    margin: "10px"
};

export function AppTextField(props: AppTextFieldProps) {
    const {
        error,
        marginTop = {
          xs: "0",
        },
        errorMessage,
        boxProps,
        ...rest
      } = props;
      const { sx: boxSx, ...restBoxProps } = boxProps || {};
    return (
        <Box
         sx={{
            flexGrow: 1,
            marginTop,
            ...boxSx,
          }}
          {...restBoxProps}
        >
            <TextField {...rest} sx={styles} error={error} id="standard-basic" variant="standard" />
            <Collapse in={error} orientation={"vertical"}>
            <CustomStack
                sx={{
                    width: "100%",
                }}
                justifyContent={"flex-start"}
                >
                <Typography
                    variant={"body1"}
                    sx={{
                    color: (theme) => theme.color.error,
                    fontSize: { xs: ".875rem", md: ".875rem" },
                    fontWeight: 500,
                    }}
                >
                    {errorMessage}
                </Typography>
            </CustomStack>
            </Collapse>
        </Box>
    )
}
