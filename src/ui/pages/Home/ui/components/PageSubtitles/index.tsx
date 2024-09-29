import { pxToRem, transition } from "@/common/utils";
import { Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

type PageSubtitlesProps = {
    subtitle: string;
    color?:string;
};

export function PageSubtitles({
    subtitle,color
}: PageSubtitlesProps) {
    const theme = useTheme();
    return <Typography
      component={motion.div}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0, transition: transition }}
    sx={{
        color: color || theme.general.color,
        fontFamily: theme.typography.fontFamily,
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
        marginBottom: "40px"
    }}
    >{subtitle}</Typography>
}