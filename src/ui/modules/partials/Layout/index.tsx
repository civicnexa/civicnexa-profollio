import { Box } from '@mui/material'
import React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'

type LayoutProps = {
  children: React.ReactNode
};

export const Layout = ({
  children
}: LayoutProps) => {
  return (
    <Box>
        <Header />
        <Box
         sx={{
          minWidth: "100vw",
          minHeight: '100vh',
          paddingBottom: "100px",
         }}
        >{children}</Box>
        <Footer />
    </Box>
  )
}
