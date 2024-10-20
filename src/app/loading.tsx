"use client"
import { CustomStack, Loader } from "@/ui/modules/components";
import { Box, useTheme } from "@mui/material";

export default function Loading() {
    const theme = useTheme();
    return (
        <CustomStack alignItems={"center"} justifyContent={"center"}>
            <Loader size={"48"} loaderColor={`${theme.palette.primary.main}`} />
        </CustomStack>
    );
}