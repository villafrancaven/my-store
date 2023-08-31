import { Box } from "@mui/material";
import PropTypes from "prop-types";

function BackgroundInfo({ children }) {
  return (
    <Box
      sx={{
        bgcolor: "black",
        color: "white",
        top: 200,
        position: "relative",
        p: '70px 25px 40px 50px',
        width: '300px'
      }}
    >
      {children}
    </Box>
  );
}

BackgroundInfo.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BackgroundInfo;
