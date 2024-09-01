import { pxToRem } from '@/common/utils';
import { StyledLink } from '@/ui/modules/components'
import React from 'react'

type FooterLinksProps = {
    link: string,
    href: string,
};

export function FooterLinks ({
    link,
    href
}: FooterLinksProps){
    const Link = href || "#";
  return <StyledLink 
   href={Link}
   sx={{
    color: (theme) => theme.palette.secondary.main,
    fontFamily: (theme) => theme.typography.fontFamily,
    weight: 400,
    fontSize: pxToRem(16),
    lineHeight: "16px",
   }}
   >{link}</StyledLink>
}
