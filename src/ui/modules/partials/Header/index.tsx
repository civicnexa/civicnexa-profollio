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
import Button from '@mui/material/Button';
import { StyledLink } from '../../components';
import { AppLogo } from '../../components/AppLogo';
import { Grid2 } from '@mui/material';
import { CustomStack } from '../../components/CustomStack';
import { AppButton } from '../../components/AppButton';

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
        <Toolbar>
          <CustomStack
           justifyContent={"space-between"}
           sx={{
            width: '100%',
            margin: {
              xs: 0,
              sm: '0 auto',
              md: "0 70px",
              lg: "0 100px",
            },
           }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ display: { xs: 'block' } }}
            >
              <AppLogo />
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <StyledLink href={"#"} key={item} sx={{ 
                  color: (theme) => theme.header.color,
                  mx: 1,
                }}>
                  {item}
                </StyledLink>
              ))}
            </Box>
            <AppButton
             sx={{
              display: {
                xs: 'none',
                sm: 'block',
              },
              borderRadius: "20px",
             }}
            >Start a Project</AppButton>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
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
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}