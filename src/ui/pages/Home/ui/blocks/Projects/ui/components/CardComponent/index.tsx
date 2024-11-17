import Typography from '@mui/material/Typography';
import { CustomStack } from '@/ui/modules/components/CustomStack';
import { StyledImage, StyledLink } from '@/ui/modules/components';
import { Box, Stack, Tooltip } from '@mui/material';
import { pxToRem } from '@/common/utils';
import { AppButton } from '@/ui/modules/components/AppButton';
import { ArrowForward } from '@mui/icons-material';

type CardComponentProps = {
    name: string;
    link: string;
    img?: any; // Ensure img is passed as a string (URL) type
};

export function CardComponent({
    name,
    link,
    img
}: CardComponentProps) {
    return (
        <Tooltip title={name}>
            <Stack 
                sx={{ 
                    maxWidth: {
                        xxs: 353,
                        md: 405,
                    },
                    fontFamily: (theme) => theme.typography.fontFamily,
                    boxShadow: "6px 8px 12px 4px rgba(0, 0, 0, 0.1)",
                    padding: "10px 15px",
                    borderRadius: "10px"
                }}
                spacing={2}
            >
                <Box
                    sx={{
                        width: "100%",
                        height: "140px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center", 
                        overflow: "hidden",
                        borderRadius: "8px",
                    }}
                >
                    {/* Ensure image is displayed correctly with objectFit */}
                    <StyledImage 
                        src={img} 
                        alt="project photo" 
                        width={100}
                        height={100} 
                        sx={{ 
                            // width: "50%",
                            objectFit: "contain",  // Use contain to ensure image maintains aspect ratio
                            objectPosition: "center",  // Ensure it's centered
                        }} 
                    />
                </Box>
                <CustomStack direction={"column"}>
                    <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="span"
                        sx={{
                            fontSize: pxToRem(18),
                            fontWeight: 500,
                            lineHeight: "24px",
                            color: (theme) => theme.general.darkColor,
                        }}
                    >
                        {name}
                    </Typography>
                    <AppButton 
                        size="small"
                        sx={{
                            width: "fit-content",
                            background: (theme) => theme.general.btnArrowBg,
                            color: (theme) => theme.palette.background.default,
                            borderRadius: "30px",
                            padding: "5px 10px",
                        }}
                    >
                        <StyledLink target='_blank' href={link}>
                            <ArrowForward />
                        </StyledLink>
                    </AppButton>
                </CustomStack>
            </Stack>
        </Tooltip>
    );
}
