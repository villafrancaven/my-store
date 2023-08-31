import { Box, List, Typography } from "@mui/material";
import BackgroundLayout from "./layout/BackgroundLayout";
import StoreListContainer from "./layout/StoreListContainer";
import { useContext, useState } from "react";
import { MyStoreContext } from "@component/provider/my-store-provider";
import StoreItem from "./layout/StoreItem";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

function ManageStoresModule() {
  const { storeList } = useContext(MyStoreContext);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

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
                  onEdit={() => setEditModalOpen((prev) => !prev)}
                  onDelete={() => setDeleteModalOpen((prev) => !prev)}
                />
                <EditModal
                  open={editModalOpen}
                  handleClose={() => setEditModalOpen((prev) => !prev)}
                  data={store}
                />
                <DeleteModal
                  open={deleteModalOpen}
                  handleClose={() => setDeleteModalOpen((prev) => !prev)}
                  id={store.id}
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
