import React from "react";

const SucessOtp = () => {
  return (
    <div className="container">
      <center>
        <div className="row" style={{ marginTop: "70%" }}>
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
    </div>
  );
};

export default SucessOtp;
