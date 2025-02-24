import { pxToRem } from "@/common/utils";
import { AppButton } from "@/ui/modules/components/AppButton";
import { useTheme } from "@mui/material";
import { useField, useFormikContext } from "formik";

type WhatButtonProps = {
    text: string;
    value: string;
};

export function WhatButton({
    text,
    value
}: WhatButtonProps) {
    const theme = useTheme();
    const { setFieldValue } = useFormikContext();
    const [field] = useField('service');
    
    const handleClick = () => {
        const newValue = field.value === value ? '' : value;
        setFieldValue('service', newValue);
    };

    return (
        <AppButton 
            sx={{
                border:`1px solid ${theme.accordion.accordionTextColor}`, 
                borderRadius:'25px',
                cursor:'pointer',   
                backgroundColor: field.value === value ? theme.palette.primary.main : 'transparent',
                color: field.value === value ? theme.palette.background.default : 'primary.main',
                transition: 'background-color .5s',
                fontSize: {
                    xxs: pxToRem(8),
                    sm: pxToRem(16),
                }, 
                '&:hover': {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.background.default,
                },
            }}
            onClick={handleClick}
        >
            {text}
        </AppButton>
    )
}
