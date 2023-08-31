import { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Collapse,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DetailsLabel, DetailsRow } from "../layout/StoreCardLayout";
import CardContainer from "../layout/CardContainer";

function StoreCard({
  data = {
    storeName: "",
    address: "",
    email: "",
    mobile: "",
    id: null,
  },
}) {
  const [expand, setExpand] = useState(false);
  const { storeName, address, email, mobile } = data;

  return (
    <CardContainer>
      <Stack
        direction="row"
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Box>
          <Typography>{storeName}</Typography>
          <Typography sx={{ color: "#919191", mt: "4px" }}>{email}</Typography>
        </Box>
        <IconButton
          sx={{ transform: "translateY(-10%)", p: 0 }}
          onClick={() => setExpand((prev) => !prev)}
        >
          <Stack
            sx={({ transitions }) => ({
              transform: expand ? "rotate(-90deg)" : "rotate(0deg)",
              transition: transitions.create("transform", {
                duration: transitions.duration.short,
              }),
            })}
          >
            <ExpandMoreIcon />
          </Stack>
        </IconButton>
      </Stack>

      <Collapse in={expand}>
        <Divider sx={{ my: "15px", borderColor: "#C5C5C5" }} />
        <Stack spacing={1}>
          <DetailsRow>
            <DetailsLabel>Address</DetailsLabel>
            <Typography>{address}</Typography>
          </DetailsRow>
          <DetailsRow>
            <DetailsLabel>MobileNumber</DetailsLabel>
            <Typography>{mobile}</Typography>
          </DetailsRow>
        </Stack>
      </Collapse>
    </CardContainer>
  );
}

StoreCard.propTypes = { data: PropTypes.instanceOf(Object) };

export default StoreCard;
