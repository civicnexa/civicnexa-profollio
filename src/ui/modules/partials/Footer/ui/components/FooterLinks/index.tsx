import { pxToRem } from '@/common/utils';
import { StyledLink } from '@/ui/modules/components'
import { Box } from '@mui/material';
import React from 'react'

type FooterLinksProps = {
    link: string,
    href?: string,
    onClick?: () => void,
};

export function FooterLinks ({
    link,
    href,
    onClick
}: FooterLinksProps){
    // const Link = href || "#";
  return <Box 
//    href={Link}
    component={"span"}
   sx={{
    color: (theme) => theme.palette.secondary.main,
    fontFamily: (theme) => theme.typography.fontFamily,
    weight: 400,
    fontSize: pxToRem(16),
    lineHeight: "16px",
   }}
   onClick={onClick}
   >{link}</Box>
}
