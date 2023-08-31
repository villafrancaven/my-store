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

function StoreItem({ storeName, onEdit }) {
  return (
    <ListItem
      onClick={onEdit}
      secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <ModeTwoToneIcon />
        </IconButton>
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
};

export default StoreItem;
