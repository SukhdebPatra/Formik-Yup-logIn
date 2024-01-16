import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomCard from "../../components/Card";
import * as yup from "yup";
import CardImage from "../../components/CardImage";
import "./login.css";
import { Form, Toast } from "react-bootstrap";
import instance from "../../assets/axios/axios";
import { toast } from "react-toastify";
import { customerPreferenceUrl } from "../../assets/Api/api";

import { useFormik } from "formik";
import { logInSchemas } from "../../assets/schemas/Index";

const user = JSON.parse(window.localStorage.getItem("user"))

// const validationSchema = yup.object().shape({
//   email: yup
//     .string()
//     .email("Invalid email address")
//     .required("Email is required"),
//   password: yup.string().required("Password is required"),
// });

const LogIn = () => {
  // const [user, setUser] = useState({ email: "", password: "" });
  // const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/sign-up");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: logInSchemas,
    onSubmit: async (values) => {
      try {
        const response = await instance.post(
          "/CustomerAuth/CustomerLogin",
          values
        );
        console.log(response, "Logged in successfully");

        window.localStorage.setItem("user", JSON.stringify(response.data.data));
        
        // Assume getCustomerPrefrence is a function that handles additional actions
        // You need to implement this function according to your requirements
        getCustomerPrefrence(response.data.data.id);

        toast.success("Logged in successfully", {
          position: toast.POSITION.TOP_RIGHT,
          hideProgressBar: true,
          autoClose: 3000,
        });

        // Navigate to the home page or any other page after successful login
        navigate("/");
      } catch (error) {
        // Handle login failure, display error messages, etc.
        console.error("Login failed:", error);
        toast.error(
          "Login failed. Please check your credentials and try again."
        );
      }
    },
  });
  const getCustomerPrefrence = (id) => {
    instance
      .get(`${customerPreferenceUrl}/GetGlobalCustomerPreference/${id}`)
      .then((response) => {
        console.log(response, "from get customerprefrence");
        const res = response.data.data;
        if (res.length > 0) {
          localStorage.setItem("userPreference", JSON.stringify(res[0]));
          navigate("/");
        } else {
          navigate("/caloriesNutritionist");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <CardImage
        images={"/src/assets/Images/loginImg.png"}
        title="Sign In"
        text="Let’s get you logged in"
      />
      <div className="container">
        <div className="row">
          <CustomCard>
            <Form onSubmit={formik.handleSubmit}>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                className="InputField"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <div style={{ color: "red" }}>{formik.errors.email}</div>
              )}

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                className="InputField"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password && (
                <div style={{ color: "red" }}>{formik.errors.password}</div>
              )}

              <button
                type="submit"
                className="logInBtn mt-5"
                style={{
                  background:
                    "linear-gradient(270deg, #0DBB8A 10.39%, #0BCD86 79.75%)",
                }}
              >
                Log In
              </button>
            </Form>
          </CustomCard>

          <div className="row">
            <div className="col">
              <button className="signInBtn"> Continue as Guest </button>
            </div>

            <div className="col">
              <button className="signInBtn" onClick={handleSignUp}>
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
};

export default LogIn;
