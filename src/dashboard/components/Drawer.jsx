import { ChevronLeft, ChevronRight, Mail, MoveToInbox } from '@mui/icons-material';
import { Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export const Drawer = ({ StyledDrawer, DrawerHeader, theme, handleDrawerClose, drawerOpen }) => {
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
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
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
                <MoveToInbox />
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: drawerOpen ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
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
                {index % 2 === 0 ? <MoveToInbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: drawerOpen ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </StyledDrawer>
  );
};
