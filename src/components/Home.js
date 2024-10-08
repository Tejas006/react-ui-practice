import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";

export default function Home() {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = (open) => {
    setDrawer(open);
  };
  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ marginRight: 2 }}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MyWeb
          </Typography>
          <Button sx={{ color: "inherit" }}>Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawer} onClose={() => toggleDrawer(false)}>
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
        </List>
      </Drawer>
    </Container>
  );
}
