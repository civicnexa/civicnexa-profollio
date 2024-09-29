import { ArrowForward, ArrowBack } from '@mui/icons-material';
import { AppButton } from "@/ui/modules/components/AppButton";
import { alpha, Box, useTheme } from "@mui/material";

interface CustomButtonGroupProps {
    next: () => void;
    previous: () => void;
    goToSlide: (slide: number) => void;
    carouselState: {
        currentSlide: number;
        totalItems: number;
    };
}

export const ButtonGroup: React.FC<CustomButtonGroupProps> = ({ next, previous, ...rest }) => {
    const theme = useTheme();
    const { carouselState: { currentSlide } } = rest;
    return (
        <Box className="carousel-button-group"
        sx={{
            position: "absolute",
            top: 0,
            right: "10%",
            height: "100px",
            width: "fit-content",
            display: "flex",
            alignItems: "center",
            gap: 4
        }}
        >
            <AppButton
            sx={{
                background: (theme) => theme.general.btnBg,
                width: ".5rem",
                height: "4rem",
                borderRadius: "50%",
                color: (theme) => theme.palette.background.default,
                "&:hover": {
                    background: alpha(theme.general.btnBg, .4),
                },
            }} 
            className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()}>
                <ArrowBack sx={{ width: "16px", height: "16px" }} />
            </AppButton>
            <AppButton 
            sx={{
                background: (theme) => theme.general.btnBg,
                width: ".5rem",
                height: "4rem",
                borderRadius: "50%",
                color: (theme) => theme.palette.background.default,
                "&:hover": {
                    background: alpha(theme.general.btnBg, .4),
                },
            }} 
            onClick={() => next()}>
                <ArrowForward sx={{ width: "16px", height: "16px" }} />
            </AppButton>
        </Box>
    );
};