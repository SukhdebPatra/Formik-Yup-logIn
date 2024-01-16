import * as Yup from "yup";

export const logInSchemas = Yup.object({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const signUpSchemas = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email().required("Email is required"),
  mobileNumber: Yup.number().required("Mobile Number is required"),
});

export const CaloriesSchemas = Yup.object({
  // goal: Yup.string().required(),
  dob: Yup.string().required(),
  genderId: Yup.string().required(),
  //   height: Yup.string().required(),
  //   weight: Yup.string().required(),
  //   activity: Yup.string().required(),
  portion: Yup.string().required(),
});

export const KnowYourCaloriesSchemas = Yup.object({
  goal: Yup.string().required(),
  dob: Yup.string().required(),
  genderId: Yup.string().required(),
  height: Yup.string().required(),
  weight: Yup.string().required(),
  activity: Yup.string().required(),
  // portion: Yup.string().required(),
});
