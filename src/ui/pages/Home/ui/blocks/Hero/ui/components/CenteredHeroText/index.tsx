import { pxToRem } from '@/common/utils';
import { Typography } from '@mui/material';
import React from 'react';
import { motion } from 'framer-motion';

type SectionTagProps = {
    title: string;
};

export function CenteredHeroText({ title }: SectionTagProps) {
  const splitTitle = title.split(''); 

  return (
    <Typography
    sx={{
        position: 'relative',
        fontWeight: 600,
        fontSize: {
        xxs: pxToRem(32),
        xs: pxToRem(48),
        sm: pxToRem(60),
        md: pxToRem(68),
        },
        lineHeight: {
        xss: '40px',
        sm: '70px',
        md: '95.2px',
        },
        textAlign: 'center',
    }}
    >
    {splitTitle.map((char, index) => (
        <motion.span
        key={index}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        >
        {char}
        </motion.span>
    ))}
    </Typography>
  );
}