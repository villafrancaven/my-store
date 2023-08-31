import { useContext } from "react";
import BackgroundLayout from "./layout/BackgroundLayout";
import StoreCard from "./StoreCard.jsx";
import { MyStoreContext } from "@component/provider/my-store-provider";
import { Box, Stack, Typography } from "@mui/material";

function ViewStoresModule() {
  const { storeList } = useContext(MyStoreContext);

  const isStoreEmpty = storeList.length === 0;

  return (
    <BackgroundLayout>
      <Box sx={{ position: "relative", top: 270 }}>
        {isStoreEmpty ? (
          <Stack sx={{ alignItems: "center" }}>
            <Typography
              sx={{
                border: "1px solid",
                borderRadius: "4px",
                p: "16px",
                bgcolor: "white",
                textAlign: "center",
                alignSelf: "center",
                width: "300px",
                flexWrap: "wrap",
              }}
            >
              No Stores Listed
            </Typography>
          </Stack>
        ) : (
          <>
            <Stack spacing={2} sx={{ mb: "24px" }}>
              {storeList.map((store) => (
                <StoreCard key={store.id} data={store} />
              ))}
            </Stack>
          </>
        )}
      </Box>
    </BackgroundLayout>
  );
}

export default ViewStoresModule;
