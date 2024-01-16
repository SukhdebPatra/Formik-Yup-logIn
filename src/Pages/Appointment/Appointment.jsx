import React from "react";
import CardImage from "../../components/CardImage";
import CustomCard from "../../components/Card";

const Appointment = () => {
  return (
    <>
      <CardImage
        images={"/src/assets/Images/loginImg.png"}
        title="Appointment With Nutritionist"
        text="Personalized guidance for a healthier you"
      />
      <div className="container">
        <div className="row">
          <CustomCard>
            <div className="row ">
              <div className="col-3" style={{ width: "" }}>
                <img
                  src="http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRFT_a_TDOR9EbzfAnoY-nFczlNF_qcoGWVvPVqGp7XEWWp8L1OBcn77XRs6TOqg_a7UE2h3VUj0G7AeAnzl4g"
                  alt="img"
                  //   className="circularImage"
                  style={{
                    height: "50px",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="col-9">
                <div className="row">
                  <div className="col-12">
                    <p>Aya Mustafa</p>
                    <p>Nutritionist</p>
                  </div>
                  <div className="col">
                    <p
                      className="me-2"
                      style={{
                        background:
                          "linear-gradient(114.34deg, #0ED07E 11.6%, #027E4A 78.31%)",
                        color: "white",
                        display: "inline-block",
                      }}
                    >
                      WhatsApp
                    </p>
                    <p
                      className="ms-2"
                      style={{
                        background:
                          "linear-gradient(104.13deg, #0E73D0 15.28%, #0C027E 71.28%)",
                        color: "white",
                        display: "inline-block",
                      }}
                    >
                      Phone Call
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <label className="" htmlFor="">
                Select nutritionist
              </label>
              {/* <input type="text" className="InputField" name="" id="" /> */}
              <select
                name=""
                className="InputField"
                id=""
                style={{ padding: "10px" }}
              >
                <option value="one">One</option>
                <option value="Two">Two</option>
              </select>
            </div>
            <div className="col mt-4">
              {/* <input
                type="text"
                className="InputField"
                name=""
                id=""
              /> */}
              <select
                name=""
                className="InputField"
                id=""
                style={{ padding: "10px" }}
              >
                <option value="one">One</option>
                <option value="Two">Two</option>
              </select>
              <label className="" htmlFor="">
                Select Day time should reflect
              </label>
              <br />
            </div>
          </CustomCard>
        </div>
      </div>
    </>
  );
};

export default Appointment;
