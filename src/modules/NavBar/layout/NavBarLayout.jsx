import PropTypes from "prop-types";
import { Stack, useMediaQuery } from "@mui/material";

export function NavBarContainer({ children }) {
  const sm = useMediaQuery("(max-width:720px)");

  return (
    <Stack
      sx={{
        p: sm ? "16px" : "16px 42px",
        boxShadow: "0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1)",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      direction="row"
    >
      {children}
    </Stack>
  );
}

NavBarContainer.propTypes = { children: PropTypes.node.isRequired };
