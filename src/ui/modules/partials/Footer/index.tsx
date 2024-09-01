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
                maxWidth: '100vw',
                padding: '70px 100px',
                background: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.background.default,
            }}
        >
            <Grid size={{md :5}} alignSelf={"center"}>
                <StyledLink href="#">
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
                <Typography
                sx={{
                    color: (theme) => theme.footer.textColor,
                    fontSize: pxToRem(16),
                    fontWeight: 300,
                    lineHeight: {  
                        xs: "24px", 
                    },
                    fontFamily: (theme) => theme.typography.fontFamily,
                    marginTop: '20px',
                }}
                >Iusto quia perspiciatis inventore tempora. Velit vitae tempora et laborum id soluta est ut laboriosam. Eveniet possimus autem ratione aliquid in sunt tempora. Amet rerum suscipit distinctio voluptas.</Typography>
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
                    <FooterExternalLink icon={instagram} href="#" name="Instagram"/>
                    <FooterExternalLink icon={whatsApp} href="#" name="whatsApp"/>
                    <FooterExternalLink icon={linkedIn} href="#" name="LinkedIn"/>
                </CustomStack>
            </Grid>
        </Grid>
    </Box>
  )
}
