import { Box, useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";

function BackgroundInfo({ children }) {
  const sm = useMediaQuery("(max-width:720px)");

  return (
    <Box
      sx={{
        bgcolor: "black",
        color: "white",
        top: sm ? 200 : 0,
        position: "relative",
        p: sm ? "70px 25px 40px 50px" : "25vh 50px 40px 50px",
        width: sm ? "300px" : "400px",
      }}
    >
      {children}
    </Box>
  );
}

BackgroundInfo.propTypes = { children: PropTypes.node.isRequired };

export default BackgroundInfo;
