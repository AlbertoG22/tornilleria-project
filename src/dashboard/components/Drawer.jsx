import { useState } from 'react';
import { ChevronLeft, ChevronRight, Logout } from '@mui/icons-material';
import { Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { pages } from '../../data/pages';
import { useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '@mui/material';

export const Drawer = ({ StyledDrawer, DrawerHeader, theme, handleDrawerClose, drawerOpen }) => {
  // const [activeItem, setActiveItem] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const initialActiveItem = pages.find((page) => page.path === currentPath)?.title || '';

  const [activeItem, setActiveItem] = useState(initialActiveItem);

  const handleMenuItemClick = (path, title) => {
    // handleDrawerClose();
    navigate(path);
    setActiveItem(title);
  };

  return (
    <StyledDrawer variant="permanent" open={drawerOpen}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRight />
          ) : (
            <ChevronLeft />
          )}
        </IconButton>
      </DrawerHeader>

      <Divider />
      <Box display='flex' flexDirection='column' height='100%' justifyContent='space-between'>
        <Box>
          <List>
            {pages.map((page) => (
              <ListItem key={page.title} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  onClick={ () => handleMenuItemClick(page.path, page.title) }
                  sx={{
                    minHeight: 48,
                    justifyContent: drawerOpen ? "initial" : "center",
                    px: 2.5,
                    backgroundColor: activeItem === page.title ? '#EFEFEF' : 'transparent',
                    borderLeft: activeItem === page.title ? 4 : 0,
                    borderColor: activeItem === page.title ? 'primary.main' : '',
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: drawerOpen ? 3 : "auto",
                      justifyContent: "center",
                      color: activeItem === page.title ? 'primary.main' : '',
                    }}
                  >
                    { page.icon }
                  </ListItemIcon>
                  <ListItemText
                    primary={page.title}
                    sx={{
                      opacity: drawerOpen ? 1 : 0,
                      // fontWeight: activeItem === page.title ? 'bold' : ''
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>

        <Box>
          <List>
            {["Cerrar sesión"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: drawerOpen ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: drawerOpen ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <Logout />
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: drawerOpen ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

        </Box>
      </Box>
    </StyledDrawer>
  );
};
