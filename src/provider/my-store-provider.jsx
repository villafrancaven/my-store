import PropTypes from "prop-types";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { MY_STORE_CONTEXT_VALUES } from "./constants";

export const MyStoreContext = createContext(MY_STORE_CONTEXT_VALUES);

function MyStoreProvider({ children }) {
  const [storeList, setStoreList] = useState(MY_STORE_CONTEXT_VALUES.storeList);

  const handleStoreList = useCallback((newStores) => {
    setStoreList((prevStores) => [...prevStores, ...newStores]);
  }, []);

  const handleDeleteStore = useCallback((storeId) => {
    setStoreList((prevStores) =>
      prevStores.filter((store) => store.id !== storeId)
    );
  }, []);

  const handleEditStore = useCallback((id, updatedData) => {
    setStoreList((prevStores) => {
      return prevStores.map((store) =>
        store.id === id ? { ...store, ...updatedData } : store
      );
    });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/storeList")
      .then((response) => response.json())
      .then((data) => {
        handleStoreList(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const memoizedContextValues = useMemo(
    () => ({
      storeList,
      handleStoreList,
      handleDeleteStore,
      handleEditStore,
    }),
    [storeList, handleStoreList, handleDeleteStore, handleEditStore]
  );

  return (
    <MyStoreContext.Provider value={memoizedContextValues}>
      {children}
    </MyStoreContext.Provider>
  );
}

MyStoreProvider.propTypes = { children: PropTypes.node.isRequired };

export default MyStoreProvider;
