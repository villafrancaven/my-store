import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { useFormContext } from "react-hook-form";

function StoreName() {
  const { register } = useFormContext();

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="store-name">Store Name</InputLabel>
      <OutlinedInput
        {...register("storeName", { required: true })}
        id="store-name"
        placeholder="Enter Store Name"
        label="Store Name"
      />
    </FormControl>
  );
}

export default StoreName;
