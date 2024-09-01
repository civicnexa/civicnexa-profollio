import { pxToRem } from '@/common/utils'
import { Typography } from '@mui/material'
import React from 'react'

type SectionTagProps = {
    title: string;
}

export function SectionTitle ({
    title,
}: SectionTagProps) {
  return (
    <Typography
     sx={{
        color: (theme) => theme.general.sectionTitle,
        fontWeight: 600,
        fontSize: pxToRem(14),
        lineHeight: "22.4px",
        fontFamily: (theme) => theme.typography.fontFamily,
     }}
    >{title}</Typography>
  )
}
