import { Box } from "@mui/material";
import PropTypes from "prop-types";

function StoreListContainer({ children }) {
  return (
    <Box
      sx={{
        position: "relative",
        top: "170px",
        width: "100%",
        bgcolor: "whitesmoke",
        borderRadius: "8px",
        p: '12px'
      }}
    >
      {children}
    </Box>
  );
}

StoreListContainer.propTypes = { children: PropTypes.node.isRequired };

export default StoreListContainer;
