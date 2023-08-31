import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;

const MOBILE_REGEX = /^(09|\+639)\d{9}$/;

export const ADD_STORES_YUP_RESOLVER = yupResolver(
  yup.object().shape({
    storeName: yup.string().required(),
    address: yup.string().required(),
    email: yup
      .string()
      .matches(EMAIL_REGEX, "Invalid email address")
      .required("Email is required"),
    mobile: yup
      .string()
      .matches(MOBILE_REGEX, "Invalid Mobile Number")
      .required("Mobile Number is required"),
  })
);
