import { MyStoreContext } from "@component/provider/my-store-provider";
import { useContext } from "react";

function useMyStoreServices() {
  const { handleStoreList, handleDeleteStore, handleEditStore } =
    useContext(MyStoreContext);

  const handleAddStore = (newStore) => {
    fetch("http://localhost:3001/storeList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newStore),
    })
      .then((response) => response.json())
      .then((data) => handleStoreList([data]));
  };

  const handleDeleteStoreMember = (id) => {
    fetch(`http://localhost:3001/storeList/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        handleDeleteStore(id);
      })
      .catch((error) => {
        console.error("Error deleting member:", error);
      });
  };

  const handleEditStoreMember = (id, updatedData) => {
    fetch(`http://localhost:3001/storeList/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then(() => {
        handleEditStore(id, updatedData);
      })
      .catch((error) => {
        console.error("Error deleting member:", error);
      });
  };

  return {
    handleAddStore,
    handleDeleteStoreMember,
    handleEditStoreMember,
  };
}

export default useMyStoreServices;
