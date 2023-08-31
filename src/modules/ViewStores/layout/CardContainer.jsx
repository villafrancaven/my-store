import { Stack } from "@mui/material";
import PropTypes from "prop-types";

function CardContainer({ children }) {
  return (
    <Stack
      sx={{
        border: "1px solid #9E9FA5",
        borderRadius: "8px",
        p: "16px",
        width: "100%",
        bgcolor: "white",
      }}
    >
      {children}
    </Stack>
  );
}

CardContainer.propTypes = { children: PropTypes.node.isRequired };

export default CardContainer;
