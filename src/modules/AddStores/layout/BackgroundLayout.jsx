import PropTypes from "prop-types";
import { Stack } from "@mui/material";

function BackgroundLayout({ children }) {
  return (
    <Stack
      sx={{
        height: "70vh",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
        position: "relative",
        px: "24px",
        alignItems: "center",
      }}
    >
      {children}
    </Stack>
  );
}

BackgroundLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BackgroundLayout;
