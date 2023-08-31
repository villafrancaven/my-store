import { Stack, useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";

function FormContainer({ children, onSubmit, isEdit = false }) {
    const sm = useMediaQuery("(max-width:720px)");

  return (
    <Stack
      onSubmit={onSubmit}
      component="form"
      spacing={2.5}
      sx={{
        position: "relative",
        top: isEdit ? 0 : "170px",
        width: sm ? "100%" : '500px',
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
