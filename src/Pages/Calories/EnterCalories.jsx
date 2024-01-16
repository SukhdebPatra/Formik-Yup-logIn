import React, { useEffect, useState } from "react";
import CardImage from "../../components/CardImage";
import CustomCard from "../../components/Card";
import { GenderUrl, customerPreferenceUrl } from "../../assets/Api/api";
import instance from "../../assets/axios/axios";
import { useFormik } from "formik";
import { CaloriesSchemas } from "../../assets/schemas/Index";
import { Form } from "react-bootstrap";

const user = JSON.parse(window.localStorage.getItem("user"));
const config = {
  headers: { Authorization: `Bearer ${user?.token}` },
};
console.log(config, ",from token");

const EnterCalories = () => {
  const [genders, setGenders] = useState([]);
  const [userPreference, setUserPreference] = useState({
    goal: "",
    dob: "",
    genderId: "",
    height: "",
    weight: "",
    activity: "",
    portion: "",
  });

  const formikForGlobalCustomerPreference = useFormik({
    initialValues: {
      // goal: "",
      dob: "",
      genderId: "",
      // height: "",
      // weight: "",
      // activity: "",
      portion: "",
    },
    validationSchema: CaloriesSchemas,
    onSubmit: async (values) => {
      try {
        let data = {
          portion: values.portion,
          dob: values.dob,
          genderId: values.genderId,
        };
        console.log(data, "from data");
        data.globalCustomersId = user.id;
        const response = await instance.post(
          `${customerPreferenceUrl}/AddGlobalCustomerPreference`,
          data,
          config
        );
        console.log(response, "from response");
      } catch (error) {
        // Handle login failure, display error messages, etc.
        console.error("failed:", error);
        toast.error(" Please check your credentials and try again.");
      }
    },
  });

  const handleInput = (event) => {
    setUserPreference({
      ...userPreference,
      [event.target.name]: event.target.value,
    });
  };

  const getGenders = () => {
    instance
      .get(`${GenderUrl}/GetAllGender`)
      .then((response) => {
        setGenders(response.data.data);
        if (response.data.data.lenght > 0) {
          setUserPreference({
            ...userPreference,
            genderId: response.data.data[0].id,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getGenders();
  }, []);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   const form = event.currentTarget;
  //   if (form.checkValidity() === false) {
  //     console.log("vali in if");
  //   } else {
  //     instance
  //       .post(`${customerPreferenceUrl}/AddGlobalCustomerPreference`, data, {
  //         headers: {
  //           authorization: "Bearer " + user.token,
  //         },
  //       })
  //       .then((response) => {
  //         console.log(response);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  //   setValidated(true);
  // };

  return (
    <>
      <CardImage
        images={"/src/assets/Images/loginImg.png"}
        title="Enter Calories"
        text="Fueling Your Wellness Journey"
      />
      <div className="container">
        <div className="row">
          <CustomCard>
            <Form onSubmit={formikForGlobalCustomerPreference.handleSubmit}>
              <div className="col">
                <label className="" htmlFor="portion">
                  Input your daily calorie requirements
                </label>
                <br />
                <input
                  // style={{ padding: "35px" }}
                  type="number"
                  className="InputField"
                  id="portion"
                  onChange={formikForGlobalCustomerPreference.handleChange}
                  onBlur={formikForGlobalCustomerPreference.handleBlur}
                  value={formikForGlobalCustomerPreference.values.portion}
                  // required
                  name="portion"
                />
                {formikForGlobalCustomerPreference.touched.portion &&
                  formikForGlobalCustomerPreference.errors.portion && (
                    <div style={{ color: "red" }}>
                      {formikForGlobalCustomerPreference.errors.portion}
                    </div>
                  )}
              </div>
              {/* <div className="col">
              <label className="" htmlFor="">
                Calories
              </label>

              <input type="text" className="InputField" />
            </div> */}
              <div className="col">
                <label className="" htmlFor="dob">
                  Date Of Birth
                </label>

                <input
                  type="date"
                  className="InputField"
                  // onChange={handleInput}
                  name="dob"
                  // value={userPreference.dob}
                  id="dob"
                  onChange={formikForGlobalCustomerPreference.handleChange}
                  onBlur={formikForGlobalCustomerPreference.handleBlur}
                  value={formikForGlobalCustomerPreference.values.dob}
                />
                {formikForGlobalCustomerPreference.touched.dob &&
                  formikForGlobalCustomerPreference.errors.dob && (
                    <div style={{ color: "red" }}>
                      {formikForGlobalCustomerPreference.errors.dob}
                    </div>
                  )}
              </div>
              <div className="col">
                <label className="" htmlFor="genderId">
                  Gender
                </label>
                <select
                  className="InputField"
                  name="genderId"
                  id="genderId"
                  style={{ padding: "10px" }}
                  // onChange={handleInput}
                  // value={userPreference.genderId}
                  onChange={formikForGlobalCustomerPreference.handleChange}
                  onBlur={formikForGlobalCustomerPreference.handleBlur}
                  value={formikForGlobalCustomerPreference.values.genderId}
                >
                  {genders.map((gen) => (
                    <option key={gen.id} value={gen.id}>
                      {gen.name}
                    </option>
                  ))}
                </select>
                {formikForGlobalCustomerPreference.touched.genderId &&
                  formikForGlobalCustomerPreference.errors.genderId && (
                    <div style={{ color: "red" }}>
                      {formikForGlobalCustomerPreference.errors.genderId}
                    </div>
                  )}
                {/* <input type="text"  name="" id="" /> */}
              </div>
              <div className="col mt-4">
                <button
                  className="logInBtn"
                  type="submit"
                  style={{
                    background:
                      "linear-gradient(270deg, #0DBB8A 10.39%, #0BCD86 79.75%)",
                  }}
                >
                  Submit
                </button>
              </div>
            </Form>
          </CustomCard>
        </div>
      </div>
    </>
  );
};

export default EnterCalories;
