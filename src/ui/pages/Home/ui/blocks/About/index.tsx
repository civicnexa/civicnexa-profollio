import React from 'react'
import { PageSubtitles, SectionTitle } from '../../components'
import { Box, Typography } from '@mui/material'
import { pxToRem, transition } from '@/common/utils'
import aboutImg from './ui/assets/images/civicnexa-about.jpg';
import { StyledImage } from '@/ui/modules/components'
import Grid from '@mui/material/Grid2';
import { AnimationScope, motion } from 'framer-motion';

type AboutSectionProps = {
    scope: AnimationScope<any>;
};

export function AboutSection({
    scope
}: AboutSectionProps) {

  return (
    <Grid container ref={scope}
     spacing={{
        xxs: 2,
        md: 3,
        lg: 0
     }}
     alignItems={"center"}
     justifyContent={{
        xs: "space-between",
        xl: "center"
    }}
     sx={{
        padding: {
            xxs: "40px 20px",
            xs: "50px 70px",
            sm: "70px 100px",
            md: "96px 130px",
            lg: "96px 160px",
        },
     }}
    >
        <Grid size={{ 
            xs: 6, sm: 6, 
            }}
            component={motion.div}
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0, transition: transition }}
        >
            <Box>
                <SectionTitle title="About Us" />
                <PageSubtitles subtitle='We deliver innovative digital solutions to individuals, business and organisations across Africa and beyond.' />
            </Box>
            <Box
             sx={{
                marginTop: {
                    xxs: "24px",
                    xs: "15px",
                    lg: "20px"
                },
                width: {
                    xs: "100%",
                    sm: "400px",
                    md: "500px",
                    lg: "640px"
                },
                height: {
                    xs: "auto",
                    // sm: "200px",
                    md: "400px"
                },
             }}
            >
                <StyledImage src={aboutImg} alt="About Us" width={500} height={500}
                 sx={{
                    width: "100%",
                    height: "100%",
                 }}
                />
            </Box>
        </Grid>
        <Grid size={{ 
            xs: 6, sm:5.5, md: 5, 
            lg: 4.5, xl:5
        }}
        component={motion.div}
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0, transition: transition }}
        alignSelf={"center"}
         sx={{
            marginTop: {
                xs: "30px",
                sm: "50px",
                md: "100px"
            },
         }}
        >
            <Typography
             sx={{
                color: (theme) => theme.general.darkColor,
                fontSize: {
                    xs: pxToRem(12),
                    sm: pxToRem(14),
                    md: pxToRem(16),
                },
                fontFamily: (theme) => theme.typography.fontFamily,
                fontWeight: 300,
                lineHeight: {
                    // xs: "15px",
                    sm: "22.4px",
                },
             }}
            >
                CivicNexa Digital Solutions is a leading software development company in Nigeria, dedicated to transforming Africa{" "}s digital landscape. We specialize in custom software, responsive web and mobile applications, and expert software consulting. Our team works closely with clients to deliver innovative solutions tailored to their specific needs.
                <br /><br />
                Our mission is to leverage cutting-edge technologies to help businesses thrive in the digital age. We focus on quality, reliability, and customer satisfaction, ensuring our clients stay competitive and efficient in a rapidly evolving market.
                <br /><br />
                At CivicNexa, we turn physical efforts into digital breakthroughs. Let{" "}s build a better digital future together
            </Typography>
        </Grid>
    </Grid>
  )
}
