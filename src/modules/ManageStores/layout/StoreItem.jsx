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

function StoreItem({ storeName, onEdit, onDelete }) {
  return (
    <ListItem
      secondaryAction={
        <>
          <IconButton edge="end" aria-label="edit" onClick={onEdit}>
            <ModeTwoToneIcon />
          </IconButton>
          <IconButton edge="end" aria-label="edit" onClick={onDelete}>
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
  );
}

StoreItem.propTypes = {
  storeName: PropTypes.node.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default StoreItem;
