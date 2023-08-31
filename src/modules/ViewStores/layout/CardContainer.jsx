import { Stack, useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";

function CardContainer({ children }) {
  const sm = useMediaQuery("(max-width:720px)");

  return (
    <Stack
      sx={{
        border: "1px solid #9E9FA5",
        borderRadius: "8px",
        p: "16px",
        width: sm ? "100%" : "500px",
        bgcolor: "white",
      }}
    >
      {children}
    </Stack>
  );
}

CardContainer.propTypes = { children: PropTypes.node.isRequired };

export default CardContainer;
