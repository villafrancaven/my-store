import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import useNavBar from "@component/hooks/useNavBar";
import Link from "next/link";

function MenuBar() {
  const { isMenuOpen, anchorEl, handleClickMenu, handleCloseMenu } =
    useNavBar();

  return (
    <Box>
      <IconButton sx={{ p: 0 }} onClick={handleClickMenu}>
        <MenuIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={isMenuOpen} onClose={handleCloseMenu}>
        <MenuItem
          component={Link}
          href="/view-stores"
          onClick={handleCloseMenu}
        >
          View Stores
        </MenuItem>
        <MenuItem
          component={Link}
          href="/add-stores"
          onClick={handleCloseMenu}
        >
          Add Stores
        </MenuItem>
        <MenuItem
          component={Link}
          href="/manage-stores"
          onClick={handleCloseMenu}
        >
          Manage Stores
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default MenuBar;
