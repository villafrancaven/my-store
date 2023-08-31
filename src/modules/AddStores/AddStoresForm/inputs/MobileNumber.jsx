import {
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { useFormContext } from "react-hook-form";

function MobileNumber() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor="mobile">Store Number</InputLabel>
      <OutlinedInput
        {...register("mobile", { required: true })}
        id="mobile"
        placeholder="09XXXXXXXXX"
        label="Store Number"
      />
      {errors.mobile && (
        <Typography sx={{ color: "#ff3333" }}>
          {errors.mobile.message}
        </Typography>
      )}
    </FormControl>
  );
}

export default MobileNumber;
