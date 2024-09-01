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
          minHeight: '100vh', 
          minWidth: "100vw" 
        }}>{children}</Box>
        <Footer />
    </Box>
  )
}
