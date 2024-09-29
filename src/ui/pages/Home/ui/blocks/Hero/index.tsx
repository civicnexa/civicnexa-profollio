import { CustomStack } from "@/ui/modules/components/CustomStack";
import { Box } from "@mui/material";
import heroBg from './ui/assets/images/Hero.png';
import message from './ui/assets/icons/message.svg';
import { StyledImage } from "@/ui/modules/components";
import { CenteredHeroText } from "./ui/components";
import { motion } from "framer-motion";

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
                margin: "50px 0",
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
                <CenteredHeroText title="Transforming your physical efforts to digital efforts." />
                <Box 
                    component={motion.div}
                    animate={{ rotate: 360 }}
                    transition={{
                    repeat: Infinity,
                    duration: 15,
                    ease: 'linear',
                    }}
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
