import React from "react";
import "./CaloriesNutritionist.css";
import { useNavigate } from "react-router-dom";
const CaloriesNutritionist = () => {
  const nevigate = useNavigate();

  const enterCalorie = () => {
    nevigate("/EnterCalories");
  };

  const knowYourCalories = () => {
    nevigate("/KnowYourCalories");
  };

  const appointment = () => {
    nevigate("/Appointment");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="col d-flex justify-content-center mt-5 ptag">
              <b>"Your Path to Wellness Begins Here!"</b>
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <img
          src="src/assets/Images/Group 45.png"
          onClick={enterCalorie}
          alt="cal"
        />
      </div>
      <div className="row">
        <img
          src="src/assets/Images/Group 46.png"
          onClick={knowYourCalories}
          alt="enter"
        />
      </div>
      <div className="row">
        <img
          src="src/assets/Images/Group 47.png"
          alt="app"
          onClick={appointment}
        />
      </div>
    </>
  );
};

export default CaloriesNutritionist;
