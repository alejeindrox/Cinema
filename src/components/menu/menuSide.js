import React from 'react';
import { Link } from "@reach/router";
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import HomeIcon from '@material-ui/icons/Home';
import StarIcon from '@material-ui/icons/Star';
import PageviewIcon from '@material-ui/icons/Pageview';

const MenuSide = ({ open, handleMenuDrawer, }) => {
  return (
    <Drawer anchor="left" open={open} onClose={handleMenuDrawer}>
      <div>
        <IconButton onClick={() => handleMenuDrawer()}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <Link to="/">
          <ListItem button onClick={() => handleMenuDrawer()}>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Discover Movies" />
          </ListItem>
        </Link>
        <Link to="search">
          <ListItem button onClick={() => handleMenuDrawer()}>
            <ListItemIcon><PageviewIcon /></ListItemIcon>
            <ListItemText primary="Movies by Search" />
          </ListItem>
        </Link>
        <Link to="rate">
          <ListItem button onClick={() => handleMenuDrawer()}>
            <ListItemIcon><StarIcon /></ListItemIcon>
            <ListItemText primary="Movies By Rating" />
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default MenuSide;
