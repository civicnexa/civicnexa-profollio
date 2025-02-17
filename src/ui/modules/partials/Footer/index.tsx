"use client";
import Grid from '@mui/material/Grid2'
import React from 'react'
import { StyledLink } from '../../components'
import { CustomStack } from '../../components/CustomStack'
import { AppLogo } from '../../components/AppLogo'
import { Box, Typography } from '@mui/material'
import { pxToRem } from '@/common/utils'
import { FooterExternalLink, FooterLinks } from './ui/components';
import instagram from './ui/assets/icons/instagram.svg';
import whatsApp from './ui/assets/icons/whatsApp.svg';
import linkedIn from './ui/assets/icons/linkedIn.svg';
import { motion } from 'framer-motion';


export function Footer () {
    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: "start" });
        }
    };

  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container
            spacing={15}
            alignContent="center"
            justifyContent="space-between"
            sx={{
                maxWidth: '100%',
                overflow:'hidden',
                
                padding: {
                    xxs: "50px 16px",
                    md: "100px"
                },
                background: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.background.default,
              
               
            }}
        >
            <Grid size={{md: 5}} alignSelf={"start"}>
                <StyledLink href="/">
                    <CustomStack spacing={1.5} alignItems={"center"}>
                        <AppLogo />
                        <Box>
                            <Typography
                            sx={{
                                textTransform: 'uppercase',
                                color: (theme) => theme.palette.background.default,
                                fontSize: pxToRem(32),
                                fontWeight: 700,
                                lineHeight: {
                                    xs: "32px",
                                },
                                fontFamily: (theme) => theme.typography.fontFamily,
                            }}
                            >CIVICNEXA</Typography>
                            <Box component={"span"}
                            sx={{
                                color: (theme) => theme.palette.background.default,
                                fontSize: pxToRem(18),
                                fontWeight: 400,
                                lineHeight: {
                                    xs: "18px",
                                },
                            }}
                            >Digital Solutions</Box>
                        </Box>
                    </CustomStack>
                </StyledLink>
            </Grid>
            <Grid size={{md : 4}} alignSelf={"center"}>
                <CustomStack direction='row' spacing={7}>
                    <CustomStack direction='column' spacing={3}>
                        <FooterLinks link="About Us" onClick={() => scrollToSection(`section2`)} />
                        <FooterLinks link="Projects" onClick={() => scrollToSection(`section3`)} />
                        <FooterLinks link="What we do" onClick={() => scrollToSection(`section4`)} />
                    </CustomStack>
                    <CustomStack direction='column' spacing={3}>
                        <FooterLinks link="Team Members" />
                        <FooterLinks link="Testimonials" />
                        <FooterLinks link="Contact Us" onClick={() => scrollToSection(`section5`)} />
                    </CustomStack>
                </CustomStack>
            </Grid>
            <Grid size={{md : 3}} alignSelf={"start"} alignItems={"end"} justifySelf={"center"}>
                <CustomStack spacing={"19px"} 
                 alignItems={"end"}
                sx={{
                    float:{ lg: "right" },
                    
                }} 
                >
                    <FooterExternalLink icon={instagram} href="https://www.instagram.com/civicnexa.ng?igsh=MTVna3Nua3R6eXFtMQ==" name="Instagram"/>
                    <FooterExternalLink icon={whatsApp} href="https://wa.me/2347016650549" name="whatsApp"/>
                    <FooterExternalLink icon={linkedIn} href="https://www.linkedin.com/company/civicnexa-digital-solutions/" name="LinkedIn"/>
                </CustomStack>
            </Grid>
        </Grid>
    </Box>
  )
}
