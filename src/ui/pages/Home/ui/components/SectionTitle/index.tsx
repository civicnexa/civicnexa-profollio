import { pxToRem, transition } from '@/common/utils'
import { Typography } from '@mui/material'
import React from 'react'
import { motion } from "framer-motion";

type SectionTagProps = {
    title: string;
}

export function SectionTitle ({
    title,
}: SectionTagProps) {
  return (
    <Typography
      component={motion.div}
      initial={{ opacity: 0, y: -100}}
      whileInView={{ opacity: 1, y: 0, transition: transition }}
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
