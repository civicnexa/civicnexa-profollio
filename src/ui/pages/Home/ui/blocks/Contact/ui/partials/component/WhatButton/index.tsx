import { pxToRem } from "@/common/utils";
import { AppButton } from "@/ui/modules/components/AppButton";
import { useTheme } from "@mui/material";

type WhatButtonProps = {
    text: string;
};

export function WhatButton({
    text
}: WhatButtonProps) {
    const theme = useTheme();
    return (
        <AppButton sx={{
            border:`1px solid ${theme.accordion.accordionTextColor}`, borderRadius:'25px',cursor:'pointer',   backgroundColor: 'transparent',
            transition: 'background-color .5s',
            color: "primary.main",
            fontSize: {
                xxs: pxToRem(8),
                sm: pxToRem(16),
            }, 
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.background.default,
            },}}>{text}
        </AppButton>
    )
}
