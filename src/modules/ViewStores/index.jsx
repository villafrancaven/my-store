import { useContext } from "react";
import BackgroundLayout from "./layout/BackgroundLayout";
import StoreCard from "./StoreCard.jsx";
import { MyStoreContext } from "@component/provider/my-store-provider";
import { Box, Typography } from "@mui/material";

function ViewStoresModule() {
  const { storeList } = useContext(MyStoreContext);

  const isStoreEmpty = storeList.length === 0;

  return (
    <BackgroundLayout>
      <Box sx={{ position: "relative", top: 270 }}>
        {isStoreEmpty ? (
          <Typography
            sx={{
              border: "1px solid",
              borderRadius: "4px",
              p: "16px",
              bgcolor: "white",
              textAlign: "center",
            }}
          >
            No Stores Listed
          </Typography>
        ) : (
          <>
            {storeList.map((store) => (
              <StoreCard key={store.id} data={store} />
            ))}
          </>
        )}
      </Box>
    </BackgroundLayout>
  );
}

export default ViewStoresModule;
