"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { StyledLink } from '../../components';
import { AppLogo } from '../../components/AppLogo';
import { CustomStack } from '../../components/CustomStack';
import { AppButton } from '../../components/AppButton';
import CloseIcon from '@mui/icons-material/Close';
import { alpha, useTheme } from '@mui/material';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'Projects', 'Services', 'About Us', 'Contact'];

export function Header(props: Props) {
  const theme = useTheme();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <AppLogo />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <StyledLink href="#" sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar 
         sx={{ 
          padding: "0px !important"

        }}
        >
          <CustomStack
           justifyContent={"space-between"}
           alignItems={"center"}
           sx={{
            width: '100%',
            margin: {
              xxs: 0,
              xs: '0 50px',
              md: "0 70px",
              lg: "0 100px",
            },
           }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ display: { xxs: 'block' } }}
            >
              <AppLogo />
            </Typography>
            <Box sx={{ display: { xxs: 'none', xs: 'block' } }}>
              {navItems.map((item) => (
                <StyledLink href={"#"} key={item} sx={{ 
                  color: (theme) => theme.palette.secondary.main,
                  mx: 1,
                  "&:hover": {
                    color: alpha(theme.palette.background.default, .9),
                  },
                }}>
                  {item}
                </StyledLink>
              ))}
            </Box>
            <AppButton
             sx={{
              display: {
                xxs: 'none',
                xs: 'block',
              },
              borderRadius: "20px",
              background: (theme) => theme.palette.background.default,
              color: "primary.main",
              "&:hover": {
                color: alpha(theme.palette.primary.main, .5),
              },
             }}
            >Start a Project</AppButton>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { xs: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </CustomStack>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          // onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xxs: 'block', xs: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <CloseIcon onClick={handleDrawerToggle}/>
          {drawer}
        </Drawer>
      </nav>
      {/* <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box> */}
    </Box>
  );
}