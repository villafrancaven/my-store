import PropTypes from "prop-types";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import StoreTwoToneIcon from "@mui/icons-material/StoreTwoTone";
import ModeTwoToneIcon from "@mui/icons-material/ModeTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import EditModal from "../EditModal";
import DeleteModal from "../DeleteModal";
import { useState } from "react";

function StoreItem({ storeName, data }) {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  return (
    <>
      <ListItem
        secondaryAction={
          <>
            <IconButton
              edge="end"
              aria-label="edit"
              onClick={() => setEditModalOpen((prev) => !prev)}
            >
              <ModeTwoToneIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="edit"
              onClick={() => setDeleteModalOpen((prev) => !prev)}
            >
              <DeleteTwoToneIcon />
            </IconButton>
          </>
        }
      >
        <ListItemAvatar>
          <Avatar>
            <StoreTwoToneIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={storeName} />
      </ListItem>
      <EditModal
        open={editModalOpen}
        handleClose={() => setEditModalOpen((prev) => !prev)}
        data={data}
      />
      <DeleteModal
        open={deleteModalOpen}
        handleClose={() => setDeleteModalOpen((prev) => !prev)}
        id={data.id}
      />
    </>
  );
}

StoreItem.propTypes = {
  storeName: PropTypes.node.isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
};

export default StoreItem;
