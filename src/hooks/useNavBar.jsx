import { useState } from "react";

function useNavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return {
    anchorEl,
    isMenuOpen,
    handleClickMenu,
    handleCloseMenu,
  };
}

export default useNavBar;
