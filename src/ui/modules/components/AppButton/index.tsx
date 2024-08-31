"use client";
import React from 'react'
import { ButtonProps } from "@mui/material";
import { BaseButton, LargeBaseButton } from './ui';


export function AppButton ({
    size = 'small',
    sx,
    disabled,
    children,
    color,
    ...rest
}: ButtonProps) {
    const Base = size === 'large' ? LargeBaseButton : BaseButton;
  return (
    <Base
     {...rest}
     sx={{
        background: (theme) => theme.palette.background.default,
        color: (theme) => theme.palette.primary.main,
        ...sx,
     }}
     disabled={disabled}
    >
      {children}
    </Base>
  )
}
