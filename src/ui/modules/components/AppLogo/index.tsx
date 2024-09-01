import React from 'react'
import { StyledLink } from '../StyledLink'
import { StyledImage } from '../StyledImage'
import logoIcon from '@/ui/assets/icons/logoIcon.svg';

export function AppLogo () {
  return <StyledLink href="/" sx={{ my: 2 }}>
    <StyledImage 
      src={logoIcon} 
      alt="Logo" 
      width={50} 
      height={50} 
      sx={{
        width: "56px",
        height: "56px",
      }}
    />
  </StyledLink>
}
