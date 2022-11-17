import React from "react";
import { Field, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

export default function AddForm({ errors, status, touched, isSubmitting }) {
  const nav = useNavigate();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <Form className="form">
      <div className="form-group">
        <label htmlFor="fname">First Name</label>
        <Field
          name="fname"
          type="text"
          className={
            "form-control" +
            (errors.fname && touched.fname ? " is-invalid" : "")
          }
        />
        <ErrorMessage
          name="fname"
          component="div"
          className="invalid-feedback"
        />
      </div>
      <div className="form-group">
        <label htmlFor="lname">Last Name</label>
        <Field
          name="lname"
          type="text"
          className={
            "form-control" +
            (errors.lname && touched.lname ? " is-invalid" : "")
          }
        />
        <ErrorMessage
          name="lname"
          component="div"
          className="invalid-feedback"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <Field
          name="email"
          type="text"
          className={
            "form-control" +
            (errors.email && touched.email ? " is-invalid" : "")
          }
        />
        <ErrorMessage
          name="email"
          component="div"
          className="invalid-feedback"
        />
      </div>
      <div className="form-group">
        <label htmlFor="companyname">Company Name</label>
        <Field
          name="companyname"
          type="text"
          className={
            "form-control" +
            (errors.companyname && touched.companyname ? " is-invalid" : "")
          }
        />
        <ErrorMessage
          name="companyname"
          component="div"
          className="invalid-feedback"
        />
      </div>
      <div className="form-group">
        <label htmlFor="phoneno">Phone Number</label>
        <Field
          name="phoneno"
          type="text"
          className={
            "form-control" +
            (errors.phoneno && touched.phoneno ? " is-invalid" : "")
          }
        />
        <ErrorMessage
          name="phoneno"
          component="div"
          className="invalid-feedback"
        />
      </div>
      <div className="form-group">
        <label htmlFor="month">Month</label>
        <Field
          as="select"
          name="month"
          className={
            "form-control" +
            (errors.month && touched.month ? " is-invalid" : "")
          }
        >
          <option value="">Select Month</option>
          {months.map((val) => {
            return <option value={val}>{val}</option>;
          })}
        </Field>
        <ErrorMessage
          name="month"
          component="div"
          className="invalid-feedback"
        />
      </div>
      <div className="form-group">
        <label htmlFor="amt">Salary</label>
        <Field
          name="amt"
          type="text"
          className={
            "form-control" + (errors.amt && touched.amt ? " is-invalid" : "")
          }
        />
        <ErrorMessage name="amt" component="div" className="invalid-feedback" />
      </div>

      <div className="form-group">
        <button
          type="submit"
          className="btn btn-primary mr-2"
          disabled={isSubmitting}
        >
          Register
        </button>
        <button type="reset" className="btn btn-secondary mr-2">
          Reset
        </button>
        <button
          type="button"
          className="btn btn-info"
          onClick={() => nav("/showdata")}
        >
          Show All Data
        </button>
      </div>
    </Form>
  );
}
