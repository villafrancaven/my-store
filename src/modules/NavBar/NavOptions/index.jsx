import MenuBar from "./MenuBar";
import { useMediaQuery } from "@mui/material";
import NavButtons from "./NavButtons";

function NavOptions() {
  const isSmallScreen = useMediaQuery("(max-width:720px)");

  const RenderedMenuBar = isSmallScreen ? MenuBar : NavButtons;

  return <RenderedMenuBar />;
}

export default NavOptions;
