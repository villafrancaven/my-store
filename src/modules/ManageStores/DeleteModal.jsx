import { MyStoreContext } from "@component/provider/my-store-provider";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import PropTypes from "prop-types";
import { useContext } from "react";

function DeleteModal({ open, handleClose, id }) {
  const { handleDeleteStore } = useContext(MyStoreContext);

  const handleDelete = () => {
    handleDeleteStore(id);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Are you sure you want to delete this store?</DialogTitle>
      <DialogActions sx={{ p: "16px" }}>
        <Button variant="contained" onClick={handleDelete}>
          Yes
        </Button>
        <Button variant="contained" onClick={handleClose}>
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
}

DeleteModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default DeleteModal;
