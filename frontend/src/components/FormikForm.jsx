import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import AddForm from "./AddForm";

export default function FormikForm() {
  return (
    <>
      <Formik
        initialValues={{
          fname: "",
          lname: "",
          email: "",
          companyname: "",
          phoneno: "",
          month: "",
          amt: "",
        }}
        validationSchema={Yup.object().shape({
          fname: Yup.string().required("First Name is required"),
          lname: Yup.string().required("Last Name is required"),
          email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
          companyname: Yup.string().required("Company Name is required"),
          phoneno: Yup.number()
            .typeError("Phone Number must be in numbers")
            .required("Phone Number is required"),
          month: Yup.string().required("Month is required"),
          amt: Yup.number()
            .typeError("Salary must be in numbers")
            .required("Salary is required"),
        })}
        onSubmit={(values, { resetForm }) => {
          console.log("SUCCESS: ", JSON.stringify(values, null, 4));
          axios
            .post(`http://localhost:5000/setdata`, {
              fname: values.fname,
              lname: values.lname,
              email: values.email,
              phoneno: values.phoneno,
              companyname: values.companyname,
              month: values.month,
              amt: values.amt,
            })
            .then((res) => console.log(res.data))
            .catch((e) => console.log(e));
          resetForm();
        }}
      >
        {(props) => <AddForm {...props} />}
      </Formik>
    </>
  );
}
