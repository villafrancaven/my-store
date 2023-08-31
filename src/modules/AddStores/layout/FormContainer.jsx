import { Stack } from "@mui/material";
import PropTypes from "prop-types";

function FormContainer({ children, onSubmit }) {
  return (
    <Stack
      onSubmit={onSubmit}
      component="form"
      spacing={2.5}
      sx={{
        position: "relative",
        top: "170px",
        width: "100%",
        border: "1px solid #9E9FA5",
        borderRadius: "8px",
        p: "24px",
        bgcolor: "whitesmoke",
      }}
    >
      {children}
    </Stack>
  );
}

FormContainer.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default FormContainer;
