"use client";
import { baseTheme } from '@/ui/assets/styles';
import React, { PropsWithChildren } from 'react'
import { AppThemeProvider } from './AppThemeProvider';
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Provider({ children}: PropsWithChildren) {
  return (
    <AppRouterCacheProvider>
      <AppThemeProvider theme={baseTheme}>
        {children}
      </AppThemeProvider>
      <ToastContainer position={"top-right"} />
    </AppRouterCacheProvider>
  )
}
