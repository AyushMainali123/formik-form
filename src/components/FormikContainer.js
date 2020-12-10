import React from "react";
import { Formik, Form } from "formik";
import { object } from "yup";
import { string } from "yup";
import FormikControl from "./FormikControl";

const FormikContainer = () => {
  const initialValues = {
    email: "",
    description: "",
      selectOption: '',
    radioOption: ''
  };
  const validationSchema = object({
    email: string()
      .email("Please enter valid email address")
      .required("Required"),
    description: string().required("Required"),
    selectOption: string().required("Required"),
  });
    
    const radioOptions = ['Male', 'Female'];
    
  const onSubmit = (values) =>
    console.log("%c Form Data", "color: green; font-weight: bold;", { values });
  const dropdownOptions = [
    { key: "Select an option", value: "" },
    { key: "Option 1", value: "Option 1" },
    { key: "Option 2", value: "Option 2" },
    { key: "Option 3", value: "Option 3" },
  ];
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="textarea"
              type="textarea"
              label="Description"
              name="description"
            />
            <FormikControl
              control="select"
              label="Select a topic"
              name="selectOption"
              options={dropdownOptions}
                />
                <FormikControl
                    control="radio"
                    type="radio"
                    name="radioOption"
                    radioOptions = {radioOptions}
                />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikContainer;
