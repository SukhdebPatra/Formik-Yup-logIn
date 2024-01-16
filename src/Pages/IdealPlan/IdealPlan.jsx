import React from "react";
import "./IdealPlan.css";
import PlanCard from "../../components/PlanCard";
const IdealPlan = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <center>
            <div className="col">
              <p>
                <b>Select the Ideal Plan for Your Needs</b>{" "}
              </p>
            </div>
          </center>
        </div>
      <PlanCard/>
      </div>
    </>
  );
};

export default IdealPlan;
