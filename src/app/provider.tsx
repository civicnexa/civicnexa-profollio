"use client";
import { baseTheme } from '@/ui/assets/styles';
import React, { PropsWithChildren } from 'react'
import { AppThemeProvider } from './AppThemeProvider';
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

export function Provider({ children}: PropsWithChildren) {
  return (
    <AppRouterCacheProvider>
      <AppThemeProvider theme={baseTheme}>
        {children}
      </AppThemeProvider>
    </AppRouterCacheProvider>
  )
}
