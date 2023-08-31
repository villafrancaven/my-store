import { Box, List, Typography } from "@mui/material";
import BackgroundLayout from "./layout/BackgroundLayout";
import StoreListContainer from "./layout/StoreListContainer";
import { useContext, useState } from "react";
import { MyStoreContext } from "@component/provider/my-store-provider";
import StoreItem from "./layout/StoreItem";
import EditModal from "./EditModal";

function ManageStoresModule() {
  const { storeList } = useContext(MyStoreContext);
  const [modalOpen, setModalOpen] = useState(false);

  const isStoreWithData = storeList.length !== 0;

  return (
    <BackgroundLayout>
      <StoreListContainer>
        <Typography variant="h4">Store List</Typography>

        {isStoreWithData && (
          <List>
            {storeList.map((store) => (
              <Box key={store.id}>
                <StoreItem
                  storeName={store.storeName}
                  onEdit={() => setModalOpen((prev) => !prev)}
                />
                <EditModal
                  open={modalOpen}
                  handleClose={() => setModalOpen((prev) => !prev)}
                  data={store}
                />
              </Box>
            ))}
          </List>
        )}
      </StoreListContainer>
    </BackgroundLayout>
  );
}

export default ManageStoresModule;
