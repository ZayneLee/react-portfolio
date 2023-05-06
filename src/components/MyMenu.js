import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  Hidden,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const MyMenu = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const appBar = (
    <AppBar
      position="static"
      color="primary"
      elevation={1}
      sx={{ height: "80px" }}
    >
      <Toolbar>
        <Box>
          <Button
            component={RouterLink}
            to="/"
            sx={{
              marginRight: 14,
              color: "white",
              fontFamily: "Nanum Pen Script, cursive",
            }}
          >
            <h1>Home</h1>
          </Button>
          <Button
            component={RouterLink}
            to="/skills"
            sx={{
              marginRight: 10,
              color: "white",
              fontFamily: "Nanum Pen Script, cursive",
            }}
          >
            <h1>Skills</h1>
          </Button>
          <Button
            component={RouterLink}
            to="/exp"
            sx={{
              color: "white",
              fontFamily: "Nanum Pen Script, cursive",
            }}
          >
            <h1>Experience</h1>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );

  const drawer = (
    <Drawer
      variant="temporary"
      anchor="left"
      open={mobileOpen}
      onClose={handleDrawerToggle}
    >
      <List>
        <ListItem
          button
          component={RouterLink}
          to="/"
          onClick={handleDrawerToggle}
        >
          Home
        </ListItem>
        <ListItem
          button
          component={RouterLink}
          to="/skills"
          onClick={handleDrawerToggle}
        >
          Skills
        </ListItem>
        <ListItem
          button
          component={RouterLink}
          to="/exp"
          onClick={handleDrawerToggle}
        >
          Experience
        </ListItem>
      </List>
    </Drawer>
  );

  return (
    <>
      <Hidden smDown>{appBar}</Hidden>
      <Hidden mdUp>
        <AppBar
          position="static"
          color="primary"
          elevation={1}
          sx={{ height: "80px" }}
        >
          <Toolbar>
            <Box>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {drawer}
      </Hidden>
    </>
  );
};

export default MyMenu;
