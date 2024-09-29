"use client";
import React from 'react'
import { ButtonProps } from "@mui/material";
import { BaseButton, LargeBaseButton } from './ui';
import { Loader } from '../Loader';
import { useAppButton } from './common';

export type AppButtonProps = ButtonProps & {
  isLoading?: boolean;
};

export function AppButton ({
    size = 'small',
    variant,
    sx,
    disabled,
    children,
    color,
    isLoading,
    ...rest
}: AppButtonProps) {
    const Base = size === 'large' ? LargeBaseButton : BaseButton;
    const { styles, loaderStyles } = useAppButton({ variant, color });
  return (
    <Base
     {...rest}
     sx={{
        // background: (theme) => theme.palette.background.default,
        // color: (theme) => theme.palette.primary.main,
        ...styles,
        ...sx,
     }}
     disabled={disabled || isLoading}
    >
      {isLoading && (
        <Loader
          sx={{
            ...loaderStyles,
          }}
        />
      )}

      {!isLoading && children}
    </Base>
  )
}
