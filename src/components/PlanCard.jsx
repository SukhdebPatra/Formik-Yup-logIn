import React from 'react'

const PlanCard = () => {
  return (
    <>
        <center>
          <div className="row mt-2" style={{ padding: "10px" }}>
            <div className="col colBg">
              <p className="coltextColor">
                <i class="bi bi-calendar-event "></i> <br /> 2 Months
              </p>
            </div>
            <div className="col colBg">
              <p className="coltextColor">
                <i class="bi bi-calendar-event "></i> <br /> 1 Month
              </p>
            </div>
            <div className="col colBg">
              <p className="coltextColor">
                <i class="bi bi-calendar-event "></i> <br />3 Weeks
              </p>
            </div>
            <div className="col colBg">
              <p className="coltextColor">
                <i class="bi bi-calendar-event "></i> <br />2 Weeks
              </p>
            </div>
          </div>
        </center>
        <div className="row rowBackground">
          <div className="col p-0" width="50%">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D"
              alt="img"
            />
          </div>
          {/* <div className="col">
          <p className="">28 Days</p>
          </div> */}
          <div className="col" width="50%" style={{ marginTop: "10px" }}>
            <p className="daystext p-1">
              <span className="daySpan"> 28 Days</span>
            </p>
            <p className="rowtext p-1.5">2 Meals + Snack</p>
            <p className="rowtext p-1.5">Include (72) Meals</p>
            <p className="rowtext p-1.5">2150.0 QAR</p>
          </div>
        </div>
    </>
  )
}

export default PlanCard
