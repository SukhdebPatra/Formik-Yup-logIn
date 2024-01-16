import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./Pages/LogIn/LogIn";
import SignUp from "./Pages/SignUp/SignUp";
import Home from "./Pages/Home/Home";
import Location from "./Pages/Location/Location";
import CaloriesNutritionist from "./Pages/Calories & Nutritionist/CaloriesNutritionist";
import EnterCalories from "./Pages/Calories/EnterCalories";
import KnowYourCalories from "./Pages/Calories/KnowYourCalories";
import Appointment from "./Pages/Appointment/Appointment";
import Filter from "./Pages/Filter/Filter";
import Otp from "./Pages/OTP/Otp";
import IdealPlan from "./Pages/IdealPlan/IdealPlan";
import PlanDetails from "./Pages/PlanDetails/PlanDetails";
import { PureComponent } from "react";
import Chart from "./Pages/PlanDetails/chart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SucessOtp from "./Pages/OTP/SucessOtp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<LogIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/location" element={<Location />} />
          <Route
            path="/caloriesNutritionist"
            element={<CaloriesNutritionist />}
          />
          <Route path="/EnterCalories" element={<EnterCalories />} />
          <Route path="/KnowYourCalories" element={<KnowYourCalories />} />
          <Route path="/Appointment" element={<Appointment />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/otpSucess" element={<SucessOtp />} />
          <Route path="/IdealPlan" element={<IdealPlan />} />
          <Route path="/plan-details" element={<PlanDetails />} />
          <Route path="/chart" element={<Chart />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
