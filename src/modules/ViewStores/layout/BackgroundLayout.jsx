import PropTypes from "prop-types";
import { Box } from "@mui/material";

function BackgroundLayout({ children }) {
  return (
    <Box
      sx={{
        height: "70vh",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1604066867775-43f48e3957d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
        position: "relative",
        px: "24px",
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
