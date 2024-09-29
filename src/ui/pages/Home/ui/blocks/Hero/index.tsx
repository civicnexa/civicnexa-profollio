import { CustomStack } from "@/ui/modules/components/CustomStack";
import { Box, Typography } from "@mui/material";
import heroBg from './ui/assets/images/Hero.png';
import message from './ui/assets/icons/message.svg';
import stroke from './ui/assets/icons/stoke.svg';
import { pxToRem } from "@/common/utils";
import { StyledImage } from "@/ui/modules/components";

export function Hero() {
    return (
        <Box
            sx={{
                position: "relative",
                backgroundImage: `url(${heroBg.src})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: {
                    xxs: "70vh",
                    xs: "100vh",
                },
                width: "100vw",
                color: "white",
                zIndex: -1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '0 16px',
                fontFamily: (theme) => theme.typography.fontFamily,
            }}
        >
            <CustomStack direction={"column"} 
             justifyContent={"center"}
             alignItems={"center"}
             sx={{
                padding: {
                    sm: "0 80px",
                    lg: "0 120px",
                }
             }}
            >
                <Typography component={"h1"}
                    sx={{
                        position: "relative",
                        fontWeight: 600,
                        fontSize: {
                            xxs: pxToRem(32),
                            xs: pxToRem(48),
                            sm: pxToRem(60),
                            md: pxToRem(68),
                        },
                        lineHeight: {
                            xss: "40px",
                            sm: "70px",
                            md: "95.2px",
                        },
                        textAlign: "center"
                    }}
                >Transforming your physical <StyledImage src={stroke} alt="" width={20} height={2}
                 sx={{
                    position: "absolute",
                    top: 90,
                    right: {
                        xs: 50,
                        sm: 20,
                        lg: 250,
                    }
                 }} 
                /> efforts to digital efforts.</Typography>
                <Box 
                sx={{
                    marginTop: "64px",
                    width: "144px",
                    height: "144px",
                }}
                >
                    <StyledImage src={message} alt="" width={40} height={40} />
                </Box>
            </CustomStack>
        </Box>
    )
}
