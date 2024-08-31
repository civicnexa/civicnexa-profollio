"use client";
import { defaultTheme } from '@/ui/assets/styles';
import React, { PropsWithChildren } from 'react'
import { AppThemeProvider } from './AppThemeProvider';
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

export function Provider({ children}: PropsWithChildren) {
  return (
    <AppRouterCacheProvider>
      <AppThemeProvider theme={defaultTheme}>
        {children}
      </AppThemeProvider>
    </AppRouterCacheProvider>
  )
}
