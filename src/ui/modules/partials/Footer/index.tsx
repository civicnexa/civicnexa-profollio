import Grid from '@mui/material/Grid2'
import React from 'react'
import { StyledLink } from '../../components'
import { CustomStack } from '../../components/CustomStack'
import { AppLogo } from '../../components/AppLogo'
import { Box, Typography } from '@mui/material'
import { pxToRem } from '@/common/utils'

export function Footer () {
  return (
    <Grid container
        spacing={2}
        sx={{
            padding: '20px',
            background: (theme) => theme.palette.primary.main,
            color: (theme) => theme.palette.background.default,
        }}
    >
        <Grid size={4}>
            <StyledLink href="#">
                <CustomStack>
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
                fontSize: pxToRem(13),
                fontWeight: 300,
                lineHeight: {  xs: "13px" },
             }}
            >Iusto quia perspiciatis inventore tempora. Velit vitae tempora et laborum id soluta est ut laboriosam. Eveniet possimus autem ratione aliquid in sunt tempora. Amet rerum suscipit distinctio voluptas.</Typography>
        </Grid>
        <Grid size={4}>
            <CustomStack direction='column'></CustomStack>
        </Grid>
        <Grid size={4}></Grid>
    </Grid>
  )
}
