import { pxToRem } from "@/common/utils";
import { Typography } from "@mui/material";

type PageSubtitlesProps = {
    subtitle: string;
};

export function PageSubtitles({
    subtitle
}: PageSubtitlesProps) {
    return <Typography
    sx={{
        color: (theme) => theme.general.color,
        fontFamily: (theme) => theme.typography.fontFamily,
        fontWeight: 600,
        fontSize: {
            xxs: pxToRem(24),
            xs: pxToRem(14),
            sm: pxToRem(18),
            md: pxToRem(20),
            lg: pxToRem(24),
        },
        lineHeight: {
            xxs: "31.2px",
            xs: "20px",
            sm: "31.2px",
        },
    }}
    >{subtitle}</Typography>
}