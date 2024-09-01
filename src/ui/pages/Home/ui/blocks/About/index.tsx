import { CustomStack } from '@/ui/modules/components/CustomStack'
import React from 'react'
import { SectionTitle } from '../../components'
import { Box, Typography } from '@mui/material'
import { pxToRem } from '@/common/utils'
import aboutImg from './ui/assets/images/about-image.png';
import { StyledImage } from '@/ui/modules/components'

export function AboutSection() {
  return (
    <CustomStack direction={{
        xs: 'column',
        sm: 'row',
        }} spacing={3}
        sx={{
            padding: "40px 20px",
        }}
    >
        <CustomStack direction='column' spacing={3}>
            <Box>
                <SectionTitle title="About Us" />
                <Typography
                sx={{
                    color: (theme) => theme.general.color,
                    fontFamily: (theme) => theme.typography.fontFamily,
                    fontWeight: 600,
                    fontSize: pxToRem(24),
                    lineHeight: "31.2px",
                }}
                >We deliver innovative digital solutions to individuals, business and organisations across Africa and beyond.</Typography>
            </Box>
            <Box>
                <StyledImage src={aboutImg} alt="About Us" width={500} height={500} />
            </Box>
        </CustomStack>
        <Typography>
            CivicNexa Digital Solutions is a leading software development company in Nigeria, dedicated to transforming Africa{" "}s digital landscape. We specialize in custom software, responsive web and mobile applications, and expert software consulting. Our team works closely with clients to deliver innovative solutions tailored to their specific needs.
            <br />
            <br />
            Our mission is to leverage cutting-edge technologies to help businesses thrive in the digital age. We focus on quality, reliability, and customer satisfaction, ensuring our clients stay competitive and efficient in a rapidly evolving market.
            <br />
            <br />
            Our mission is to leverage cutting-edge technologies to help businesses thrive in the digital age. We focus on quality, reliability, and customer satisfaction, ensuring our clients stay competitive and efficient in a rapidly evolving market.
        </Typography>
    </CustomStack>
  )
}
