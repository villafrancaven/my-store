import PropTypes from "prop-types";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

function ConfirmationModal({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Successful addition of store</DialogTitle>
      <DialogActions sx={{ p: "16px" }}>
        <Button
          variant="contained"
          fullWidth
          onClick={handleClose}
        >
          Okay
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ConfirmationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ConfirmationModal;
