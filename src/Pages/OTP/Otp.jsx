import React, { useState, useRef } from "react";
import "./Otp.css";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { customerAuthUrl } from "../../assets/Api/api";
import instance from "../../assets/axios/axios";
import { Form } from "react-bootstrap";
const Otp = () => {
  const location = useLocation();

  const [formData, setFormData] = useState(location.state);
  const [validateOtp, setValidateOtp] = useState(false);
  const [OTP, setOTP] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  });
  // const password = location.state;

  // console.log(formData,'tdhyrh')

  const nevigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setOTP((prevOTP) => ({
      ...prevOTP,
      [name]: value,
    }));

    // Move focus to the next input field (if not the last field)
    if (value !== "" && name !== "otp6") {
      inputRefs[`otp${parseInt(name.charAt(3)) + 1}`].current.focus();
    }
  };

  const addAcount = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      console.log("validity false");
    } else {
      console.log("validity true");
      const userOtp =
        OTP.otp1 + OTP.otp2 + OTP.otp3 + OTP.otp4 + OTP.otp5 + OTP.otp6;
      if (Number(formData.otp) == Number(userOtp)) {
        console.log("correct otp now go ahead");
        const data = {
          roleId: 2,
          name: formData.firstName + formData.lastName,
          email: formData.email,
          password: formData.password,
          mobileNumber: formData.mobileNumber,
          status: 1,
          isGuest: false,
        };
        console.log(data, "from data");

        instance
          .post(`${customerAuthUrl}/AddGlobalCustomer`, data)
          .then((response) => {
            console.log(response);
            
            nevigate("/otpSucess");
          })
          .catch((error) => {
            console.log(error.response);
            toast.info({
              text: error.response?.data?.message,
              position: "bottom",
            });
          });
      } else {
        toast.warning({
          text: "Incorrect otp! please enter correct otp.",
          position: "bottom",
        });
        console.log("error");
      }
    }
    setValidateOtp(true);
  };

  const inputRefs = {
    otp1: useRef(null),
    otp2: useRef(null),
    otp3: useRef(null),
    otp4: useRef(null),
    otp5: useRef(null),
    otp6: useRef(null),
  };

  return (
    <>
      <div className="container">
        <center>
          <div className="row mt-5">
            <div className="col mt-5">
              <img src="src/assets/Images/otplogo.PNG" alt="otp" />
            </div>
          </div>
          <div className="row">
            <div className="col mt-5">
              <h6 className="htag">One Time Password (OTP)</h6>
            </div>
          </div>
          <div className="row mt-3">
            <p>
              <b>Please enter OTP</b>
            </p>
            <br />
            <p className="mt-3">
              your OTP has been sent via SMS to your registered mobile number
            </p>
          </div>
          <Form
            action="
            "
            noValidate
            validated={validateOtp}
            onSubmit={addAcount}
          >
            {/* <div className="row rowtext mt-5">
              <div className="col coltext">
                <input
                  type="number"
                  className="optfield"
                  id=""
                  maxLength="1"
                  value={OTP.otp1}
                  name="otp1"
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
              <div className="col coltext">
                <input
                  type="number"
                  className="optfield"
                  id=""
                  maxLength="1"
                  name="otp2"
                  value={OTP.otp2}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
              <div className="col coltext">
                <input
                  type="number"
                  className="optfield"
                  id=""
                  maxLength="1"
                  name="otp3"
                  value={OTP.otp3}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
              <div className="col coltext">
                <input
                  type="number"
                  className="optfield"
                  id=""
                  maxLength="1"
                  name="otp4"
                  value={OTP.otp4}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
              <div className="col coltext">
                <input
                  type="number"
                  className="optfield"
                  id=""
                  maxLength="1"
                  name="otp5"
                  value={OTP.otp5}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
              <div className="col coltext">
                <input
                  type="number"
                  className="optfield"
                  id=""
                  maxLength="1"
                  name="otp6"
                  value={OTP.otp6}
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>
            </div> */}
            <div className="row rowtext mt-5">
              {Object.keys(OTP).map((key) => (
                <div className="col coltext" key={key}>
                  <input
                    type="number"
                    className="optfield"
                    id={`otp-input-${key}`}
                    maxLength="1"
                    name={key}
                    value={OTP[key]}
                    onChange={handleChange}
                    autoComplete="off"
                    ref={inputRefs[key]}
                  />
                </div>
              ))}
            </div>

            <div className="row mt-5">{/* <p>Resend code in 0:56</p> */}</div>
            <div className="row mt-5">
              <div className="col">
                <button className="logInBtn" >
                  Continue
                </button>
              </div>
            </div>
          </Form>
        </center>
      </div>

      {/* otp success  */}

      {/* OTP Success Final */}

      {/* <div className="container">
        <center>
          <div className="row mt-5">
            <div className="col mt-5">
              <img src="src/assets/Images/otpSucessLogo.PNG" alt="sucessLogo" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className="htag">Success !</p>
              <br />
              <p>We have sent the verification code to your email address</p>
            </div>
          </div>
          <div className="row">
            <div className="col mt-5">
            <button className="logInBtn">Continue</button>
            </div>
          </div>
        </center>
      </div> */}
    </>
  );
};

export default Otp;
