import PropTypes from "prop-types";
import { FormProvider, useForm } from "react-hook-form";
import { ADD_STORES_YUP_RESOLVER } from "./constants";
import StoreName from "./inputs/StoreName";
import { Button } from "@mui/material";
import FormContainer from "../layout/FormContainer";
import Address from "./inputs/Address";
import Email from "./inputs/Email";
import MobileNumber from "./inputs/MobileNumber";
import useMyStoreServices from "@component/hooks/useMyStoreServices";

function AddStoresForm({
  isEdit = false,
  data = {
    storeName: "",
    address: "",
    email: "",
    mobile: "",
    id: null,
  },
  handleCancel = () => {},
}) {
  const { handleAddStore, handleEditStoreMember } = useMyStoreServices();

  const AddStoresFormMethods = useForm({
    defaultValues: data,
    mode: "onChange",
    resolver: ADD_STORES_YUP_RESOLVER,
  });

  const onSubmit = (formData) => {
    handleAddStore(formData);
    AddStoresFormMethods.reset(data);
  };

  const onFormEdit = (formData) => {
    handleEditStoreMember(data.id, formData);
    handleCancel();
  };

  const onFormSubmit = isEdit ? onFormEdit : onSubmit;

  const {
    handleSubmit,
    formState: { isValid },
  } = AddStoresFormMethods;

  return (
    <FormProvider {...AddStoresFormMethods}>
      <FormContainer onSubmit={handleSubmit(onFormSubmit)} isEdit={isEdit}>
        <StoreName />
        <Address />
        <Email />
        <MobileNumber />

        <Button type="submit" disabled={!isValid} variant="contained">
          {isEdit ? "Edit Details" : "Add Store"}
        </Button>
        {isEdit && (
          <Button variant="contained" onClick={handleCancel}>
            Cancel
          </Button>
        )}
      </FormContainer>
    </FormProvider>
  );
}

AddStoresForm.propTypes = {
  isEdit: PropTypes.bool,
  data: PropTypes.instanceOf(Object),
  handleCancel: PropTypes.func,
};

export default AddStoresForm;
