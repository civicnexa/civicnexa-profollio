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

export function Footer () {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Grid container
            spacing={15}
            alignContent="center"
            justifyContent="space-between"
            sx={{
                maxWidth: '100%',
                padding: {
                    md: '30px 100px',
                    // md:'60px',
                    xxs:'50px 20px'
                },
                background: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.background.default,
              
               
            }}
        >
            <Grid size={{md :5}} alignSelf={"start"}>
                <StyledLink href="/">
                    <CustomStack spacing={1.5}>
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
                        <FooterLinks link="About Us" href="#"/>
                        <FooterLinks link="Projects" href="#"/>
                        <FooterLinks link="What we do" href="#"/>
                    </CustomStack>
                    <CustomStack direction='column' spacing={3}>
                        <FooterLinks link="Team Members" href="#"/>
                        <FooterLinks link="Testimonials" href="#"/>
                        <FooterLinks link="Contact Us" href="#"/>
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
