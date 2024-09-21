"use client";
import { Box } from '@mui/material'
import React from 'react'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { ReactLenis } from 'lenis/react'

type LayoutProps = {
  children: React.ReactNode
};

export const Layout = ({
  children
}: LayoutProps) => {

  return (
    <ReactLenis root>
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
    </ReactLenis>
  )
}
