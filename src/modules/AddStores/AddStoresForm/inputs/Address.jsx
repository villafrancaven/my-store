import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { useFormContext } from "react-hook-form";

function Address() {
  const { register } = useFormContext();

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="address">Store Address</InputLabel>
      <OutlinedInput
        {...register("address", { required: true })}
        id="address"
        placeholder="Enter Store Address"
        label="Store Address"
      />
    </FormControl>
  );
}

export default Address;
