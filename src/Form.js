import React from "react";
import { Formik, Form, Field } from "formik";
import { Input, Button, TextField } from "@material-ui/core";

const initialValues = {
  firstName: "",
  lastName: "",
};

const handleSubmit = (values) => {
  console.log(values);
};

const FormikForm = () => {
  return (
    <div className="form">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form>
          <div>
            <Field name="firstName">
              {(props) => {
                return <TextField {...props.field} type="text" error label="First Name" />;
              }}
            </Field>
          </div>
          <div>
            <Field name="lastName" />
          </div>

          <Button variant={"contained"} type="Submit">Submit</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;
