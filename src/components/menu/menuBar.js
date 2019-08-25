import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const MenuBar = ({ handleMenuDrawer, }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton color="inherit" onClick={() => handleMenuDrawer()} aria-label="open drawer" edge="start">
          <MenuIcon />
        </IconButton>
        <Typography variant="h5" childre="Cinema" />
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;
