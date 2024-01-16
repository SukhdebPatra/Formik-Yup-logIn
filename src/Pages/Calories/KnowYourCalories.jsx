import React, { useEffect, useState } from "react";
import CardImage from "../../components/CardImage";
import CustomCard from "../../components/Card";
import { goals } from "../../assets/Data/goals";
import { GenderUrl, customerPreferenceUrl } from "../../assets/Api/api";
import instance from "../../assets/axios/axios";
import { activities } from "../../assets/Data/activity";
import { useFormik } from "formik";
import { KnowYourCaloriesSchemas } from "../../assets/schemas/Index";
import { Form } from "react-bootstrap";

const user = JSON.parse(window.localStorage.getItem("user"));
const config = {
  headers: { Authorization: `Bearer ${user?.token}` },
};
// console.log(config, ",from token");

const KnowYourCalories = () => {
  const [userPreference, setUserPreference] = useState({
    goal: "",
    dob: "",
    genderId: "",
    height: "",
    weight: "",
    activity: "",
    portion: "",
  });
  const [genders, setGenders] = useState([]);
  const [formData, setFormData] = useState();

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

  const FormikKnowYourCustomer = useFormik({
    initialValues: {
      goal: "",
      dob: "",
      genderId: "",
      height: "",
      weight: "",
      activity: "",
      // portion: "",
    },
    validationSchema: KnowYourCaloriesSchemas,
    onSubmit: async (values) => {
      try {
        let data = {
          dob: values.dob,
          height: values.height,
          weight: values.weight,
          activity: values.activity,
          goal: values.goal,
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

  // console.log(FormikKnowYourCustomer.values, "from formik values");

  // const calculateBMR = () => {
  //   const { dob, height, weight, gender } = formData;

  //   // Convert date of birth to age
  //   const today = new Date();
  //   const birthDate = new Date(dob);
  //   const age = today.getFullYear() - birthDate.getFullYear();

  //   // BMR Calculation logic based on the Harris-Benedict equation
  //   let bmr;
  //   if (genders === "male") {
  //     bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
  //   } else if (genders === "female") {
  //     bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
  //   } else {
  //     bmr = null; // Invalid gender
  //   }
  //   setFormData({
  //     ...formData,
  //     bmr: bmr ? bmr.toFixed(2) : null,
  //   });
  // };

  return (
    <>
      <CardImage
        images={"/src/assets/Images/loginImg.png"}
        title="Know Your Calories"
        text="Knowledge is power, especially when it comes to your nutrition"
      />
      <div className="container mt-2">
        <div className="row">
          <Form onSubmit={FormikKnowYourCustomer.handleSubmit}>
            <CustomCard>
              <div className="col">
                <label className="" htmlFor="goal">
                  Your Goal
                </label>
                <select
                  className="InputField"
                  id="goal"
                  placeholder="Your Goal"
                  style={{ padding: "10px" }}
                  name="goal"
                  onChange={FormikKnowYourCustomer.handleChange}
                  onBlur={FormikKnowYourCustomer.handleBlur}
                  value={FormikKnowYourCustomer.values.goal}
                >
                  <option value="">Select your goal</option>
                  {goals.map((goal) => (
                    <option key={goal.id} value={goal.id}>
                      {goal.name}
                    </option>
                  ))}
                </select>
                {/* Error Message  */}
                {FormikKnowYourCustomer.touched.goal &&
                  FormikKnowYourCustomer.errors.goal && (
                    <div style={{ color: "red" }}>
                      {FormikKnowYourCustomer.errors.goal}
                    </div>
                  )}
              </div>
              <div className="col">
                <label className="" htmlFor="">
                  Date Of Birth
                </label>

                <input
                  type="date"
                  className="InputField"
                  name="dob"
                  onChange={FormikKnowYourCustomer.handleChange}
                  onBlur={FormikKnowYourCustomer.handleBlur}
                  value={FormikKnowYourCustomer.values.dob}
                  id="dob"
                />
                {FormikKnowYourCustomer.touched.dob &&
                  FormikKnowYourCustomer.errors.dob && (
                    <div style={{ color: "red" }}>
                      {FormikKnowYourCustomer.errors.dob}
                    </div>
                  )}
              </div>
              <div className="col">
                <label className="" htmlFor="">
                  Gender
                </label>

                <select
                  className="InputField"
                  name="genderId"
                  style={{ padding: "10px" }}
                  id=""
                  onChange={FormikKnowYourCustomer.handleChange}
                  onBlur={FormikKnowYourCustomer.handleBlur}
                  value={FormikKnowYourCustomer.values.genderId}
                >
                  {genders.map((gen) => (
                    <option key={gen.id} value={gen.id}>
                      {gen.name}
                    </option>
                  ))}
                </select>
                {FormikKnowYourCustomer.touched.genderId &&
                  FormikKnowYourCustomer.errors.genderId && (
                    <div style={{ color: "red" }}>
                      {FormikKnowYourCustomer.errors.genderId}
                    </div>
                  )}
              </div>
              <div className="col">
                <label className="" htmlFor="height">
                  Height (Cms)
                </label>

                <input
                  type="number"
                  className="InputField"
                  name="height"
                  onChange={FormikKnowYourCustomer.handleChange}
                  onBlur={FormikKnowYourCustomer.handleBlur}
                  value={FormikKnowYourCustomer.values.height}
                  id="height"
                />
                {FormikKnowYourCustomer.touched.height &&
                  FormikKnowYourCustomer.errors.height && (
                    <div style={{ color: "red" }}>
                      {FormikKnowYourCustomer.errors.height}
                    </div>
                  )}
              </div>
              <div className="col">
                <label className="" htmlFor="weight">
                  Weight (KGs)
                </label>

                <input
                  type="number"
                  className="InputField"
                  name="weight"
                  id="weight"
                  onChange={FormikKnowYourCustomer.handleChange}
                  onBlur={FormikKnowYourCustomer.handleBlur}
                  value={FormikKnowYourCustomer.values.weight}
                />
                {FormikKnowYourCustomer.touched.weight &&
                  FormikKnowYourCustomer.errors.weight && (
                    <div style={{ color: "red" }}>
                      {FormikKnowYourCustomer.errors.weight}
                    </div>
                  )}
              </div>
              <div className="col">
                <label className="" htmlFor="activity">
                  Activity
                </label>
                <select
                  className="InputField"
                  style={{ padding: "10px" }}
                  id="activity"
                  onChange={FormikKnowYourCustomer.handleChange}
                  onBlur={FormikKnowYourCustomer.handleBlur}
                  value={FormikKnowYourCustomer.values.activity}
                  name="activity"
                >
                  <option value="">Select activity</option>
                  {activities.map((act) => (
                    <option key={act.id} value={act.id}>
                      {act.name}
                    </option>
                  ))}
                </select>
                {FormikKnowYourCustomer.touched.activity &&
                  FormikKnowYourCustomer.errors.activity && (
                    <div style={{ color: "red" }}>
                      {FormikKnowYourCustomer.errors.activity}
                    </div>
                  )}
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
            </CustomCard>{" "}
          </Form>
        </div>
      </div>
    </>
  );
};

export default KnowYourCalories;
