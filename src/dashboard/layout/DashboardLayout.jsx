import { useState } from 'react';
import { Box, useMediaQuery, Drawer as MuiDrawer, AppBar as MuiAppBar } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { NavBar, Drawer } from '../components';

const largeDrawerWidth = 240;
const smallDrawerWidth = 180;

export const DashboardLayout = ({ children }) => {
  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down('sm')); // screen less than 600px
  const drawerWidth = isScreenSmall ? smallDrawerWidth : largeDrawerWidth;
  const [open, setOpen] = useState(!isScreenSmall);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const StyledDrawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  return (
    <Box sx={{ display: "flex" }}>
      {/* Navbar */}
      <NavBar
        AppBar={AppBar}
        handleDrawerOpen={handleDrawerOpen}
        drawerOpen={open}
      />

      {/* Drawer */}
      <Drawer
        StyledDrawer={StyledDrawer}
        DrawerHeader={DrawerHeader}
        theme={theme}
        handleDrawerClose={handleDrawerClose}
        drawerOpen={open}
      />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        { children }
      </Box>
    </Box>
  );
};
