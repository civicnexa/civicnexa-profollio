import { StyledImage, StyledLink } from '@/ui/modules/components'
import { SxProps } from '@mui/material';
import React from 'react'

type FooterExternalLinkProps = {
  icon: any,
  href: string,
  name: string,
};

export const FooterExternalLink = ({
  icon,
  href,
  name,
}: FooterExternalLinkProps) => {
  return <StyledLink href={href} 
   target='_blank'
   sx={{
    background: (theme) => theme.footer.socialColor,
    borderRadius: "50%",
    width: "40px",
    height: "40px",
   }}
  >
    <StyledImage 
    src={icon}
    alt={name || "social handle"} 
    width={20}
    height={20}
    sx={{
      margin: "7px 8px!important",
    }}
    />
  </StyledLink>
}
