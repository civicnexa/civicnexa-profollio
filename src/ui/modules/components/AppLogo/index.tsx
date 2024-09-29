import React from 'react'
import { StyledLink } from '../StyledLink'
import { StyledImage } from '../StyledImage'
import logoIcon from '@/ui/assets/icons/logoIcon.svg';

export function AppLogo () {
  return <StyledLink href="/" 
   sx=
    {{ 
      my: 2,
      width: {
        xxs: "28px",
        xs: "32px",
        md: "56px"
      },
      height: {
        xxs: "28px",
        xs: "32px",
        sm: "56px"
      }, 
    }}>
    <StyledImage 
      src={logoIcon} 
      alt="Logo" 
      width={50} 
      height={50} 
      sx={{
        width: "100%",
        height: "100%"
      }}
    />
  </StyledLink>
}
