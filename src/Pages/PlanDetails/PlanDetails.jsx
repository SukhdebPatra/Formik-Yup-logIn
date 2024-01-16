import React from "react";
import "./PlanDetails.css";
import { Doughnut, Pie } from "react-chartjs-2";
// import { Pie } from 'react-chartjs-2';
// import { Chart, ArcElement } from "chart.js";
// Chart.register(ArcElement);
import Chart from "./chart";

const PlanDetails = () => {
  //   const data = {
  //     labels: ["one", "Two"],
  //     datasets: [
  //       {
  //         // label: "My First Dataset",
  //         data: [300, 50],
  //         backgroundColor: ["#3EAEBD", "#47FBA4"],
  //         hoverOffset: 4,
  //       },
  //     ],
  //   };

  return (
    <>
      <h2 className="headerh2">Plan Details</h2>
      <div className="">
        <div className="row headertag">
          <div className="col d-flex">
            <i className="bi bi-globe-central-south-asia ml-2 mt-2.5"></i>
            <p className="headertext">Company Name</p>
          </div>
          <div className="col d-flex ">
            <p className="headertexttwo">
              <span className="headertextThree ">24 Days</span>
            </p>
            <p className="headertexttwo ml-2">
              <span className="headertextThree mb-2">120 meals</span>
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <h4 className="h4">Your Results</h4>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like
            </p>
          </div>
        </div>
        <div className="row mt-5 d-flex">
          <div className="col">
            <p className="p-2">
              282g
              {/* <span className="spantag">ece</span>  */}
            </p>

            <p className="p-2">56g</p>
            <p className="p-2">352g</p>
          </div>
          {/* <div className="col" style={{ height: "250px", width: "200px" }}> */}
          {/* <p>Total Calories</p> */}
          {/* <Doughnut data={data} /> */}
          {/* <p>4520</p> */}
          {/* </div> */}
          <div className="col" >
            <Chart />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="h2 mt-2">Breakfast 25% Of total Calories</p>
            <p>
              Established fact <br /> Established <br /> Established fact <br />{" "}
              Established
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="h2 mt-2">Breakfast 25% Of total Calories</p>
            <p>
              Established fact <br /> Established <br /> Established fact <br />{" "}
              Established
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="h2 mt-2">Breakfast 25% Of total Calories</p>
            <p>
              Established fact <br /> Established <br /> Established fact <br />{" "}
              Established
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanDetails;
