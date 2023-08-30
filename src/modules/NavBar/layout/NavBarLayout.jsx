import PropTypes from "prop-types";
import { Stack } from "@mui/material";

export function NavBarContainer({ children }) {
  return (
    <Stack
      sx={{
        p: "16px",
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
