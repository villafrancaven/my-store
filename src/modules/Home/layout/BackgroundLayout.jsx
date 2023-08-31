import PropTypes from "prop-types";
import { Box } from "@mui/material";

function BackgroundLayout({ children }) {
  return (
    <Box
      sx={{
        height: "70vh",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1527368746281-798b65e1ac6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
        position: "relative",
      }}
    >
      {children}
    </Box>
  );
}

BackgroundLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BackgroundLayout;
