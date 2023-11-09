import { Toolbar, Typography, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';

export const NavBar = ({ AppBar, handleDrawerOpen, drawerOpen }) => {
  return (
    <AppBar position="fixed" open={drawerOpen}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(drawerOpen && { display: "none" }),
          }}
        >
          <Menu />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Tornillería
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
