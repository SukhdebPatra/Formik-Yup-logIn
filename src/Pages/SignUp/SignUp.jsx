import React, { useRef, useState } from "react";
// import Card from "../../components/Card";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import CustomCard from "../../components/Card";
import { Form } from "react-bootstrap";
import instance from "../../assets/axios/axios";
import { toast } from "react-toastify";
import { vendorAuthUrl } from "../../assets/Api/api";

const SignUp = () => {
  const [signupDetails, setSignupDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
  });
  const [password, setPassword] = useState("");

  const [validated, setValidated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e) => {
    setSignupDetails({
      ...signupDetails,
      [e.target.name]: e.target.value,
    });
  };

  const nevigate = useNavigate();

  const handleSignIn = () => {
    nevigate("/sign-in");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      console.log("validity false");
      // if (
      //   signupDetails.mobileNumber.length > 8 ||
      //   signupDetails.mobileNumber.length < 8
      // ) {
      //   toast.warning("Mobile number should be of 8 digit.", {
      //     position: toast.POSITION.TOP_RIGHT,
      //     hideProgressBar: true,
      //     autoClose: 3000,
      //   });
      // } else if (
      //   !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,12}$/.test(
      //     signupDetails.password
      //   )
      // ) {
      //   // const msg = "Password must contain minimum eight characters, maximum 12 characters, at least one upppercase letter, at least one lowercase letter and one number and one special character."
      //   toast.warning(
      //     "Password must contain minimum eight characters, maximum 12 characters, at least one upppercase letter, at least one lowercase letter and one number and one special character.",
      //     {
      //       position: toast.POSITION.TOP_RIGHT,
      //       hideProgressBar: true,
      //       autoClose: 5000,
      //     }
      //   );
      // }
      setValidated(true);
    } else {
      instance
        .post(`${vendorAuthUrl}/ValidateEmail`, signupDetails)
        .then((response) => {
          console.log(response.data.data, "signup success");
          setSignupDetails({
            firstName: "",
            lastName: "",
            email: "",
            mobileNumber: "",
          });
          toast.info("Otp sent!", {
            position: toast.POSITION.TOP_RIGHT,
            hideProgressBar: true,
            autoClose: 3000,
          });

          // pusing the password in response and geting the data in OTP component
          const data = {
            ...response.data.data,
            password: password,
          };

          //nevigating to opt page and sending the state to opt page
          nevigate("/otp", { state: data });
        })
        .catch((error) => {
          console.log(error);
        });

      setValidated(false);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div>
        <div className="textoverflow">
          <h5 className="h5">Sign up</h5>
          <p>Create and Account</p>
        </div>
        <img
          src="/src/assets/Images/signUp.png"
          alt="img2"
          className="imgclass"
        />
      </div>

      <div className="container p-0">
        <div className="row">
          <Form
            action=""
            validated={validated}
            noValidate
            onSubmit={handleSubmit}
          >
            <CustomCard>
              <div className="row">
                <div className="col">
                  <label className="" htmlFor="">
                    FirstName
                  </label>
                  <input
                    type="text"
                    className="InputField"
                    name="firstName"
                    required
                    value={signupDetails.firstName}
                    onChange={handleChange}
                  />
                  {validated && !signupDetails.firstName && (
                    <div className="invalid-feedback">
                      Please enter valid first name.
                    </div>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label className="" htmlFor="">
                    LastName
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="InputField"
                    required
                    value={signupDetails.lastName}
                    onChange={handleChange}
                  />
                  {validated && !signupDetails.lastName && (
                    <div className="invalid-feedback">
                      Please enter valid last name.
                    </div>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label className="" htmlFor="">
                    Email
                  </label>
                  <br />
                  <input
                    type="email"
                    className="InputField"
                    name="email"
                    required
                    value={signupDetails.email}
                    onChange={handleChange}
                  />
                  {validated && !signupDetails.email && (
                    <div className="invalid-feedback">
                      Please enter valid email.
                    </div>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label className="" htmlFor="">
                    Mobile no.
                  </label>
                  <br />
                  <input
                    type="number"
                    className="InputField"
                    name="mobileNumber"
                    required
                    value={signupDetails.mobileNumber}
                    onChange={handleChange}
                  />
                  {validated && !signupDetails.mobileNumber && (
                    <div className="invalid-feedback">
                      Please enter valid mobileNumber.
                    </div>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label className="" htmlFor="">
                    Choose Password
                  </label>
                  <br />
                  <input
                    type="password"
                    className="InputField"
                    name="password"
                    // type={showPassword ? "text" : "password"}
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  {/* <div className="show-hide">
                    <span
                      onClick={toggleShowPassword}
                      style={{ cursor: "pointer" }}
                      className="show"
                    ></span>
                  </div> */}
                  {validated && !signupDetails.password && (
                    <div className="invalid-feedback">
                      Please enter valid Password.
                    </div>
                  )}
                </div>
              </div>

              <div className="col">
                <p
                  className="text-center mt-2 "
                  style={{ marginRight: "37px" }}
                >
                  I agree tearms and conditions
                </p>
              </div>
              <div className="col mt-3">
                <button className="logInBtn" style={{ marginLeft: "10px" }}>
                  Register
                </button>
              </div>
            </CustomCard>
          </Form>
        </div>
        <div className="col">
          <p
            className="text-center"
            style={{ marginRight: "30px" }}
            onClick={handleSignIn}
          >
            Already registered ? <span></span>
            <b>
              <u>Login here</u>
            </b>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
