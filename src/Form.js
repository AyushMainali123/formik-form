import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, TextField } from "@material-ui/core";
import { object, string } from "yup";
import TextError from "./TextError";
const initialValues = {
  username: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
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
        validationSchema={object({
          username: string()
            .required("Please enter your username")
            .matches(
              /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
              "Please Enter valid username"
            ),
          email: string()
            .email("Please enter valid email address")
            .required("Please enter your email address"),
          channel: string().required("Please enter channel name"),
          comments: string()
            .required("Please enter your comment")
            .max(250, "Comment shouldnot exceed 250 letters")
            .min(3, "Comment should be atleast 3 letters long!"),
          address: string().required(),
        })}
      >
        <Form autoComplete="off">
          {/* User Name */}
          <div className="form__form_control">
            <div className="form__label">
              <label htmlFor="username">Username</label>
            </div>
            <Field name="username" id="username" />
            <ErrorMessage name="username" component={TextError} />
          </div>

          {/* Email */}
          <div className="form__form_control">
            <div className="form__label">
              <label htmlFor="email">Email Address</label>
            </div>
            <Field name="email" id="email" />
            <ErrorMessage name="email" component={TextError} />
          </div>

          {/* Channel */}
          <div className="form__form_control">
            <div className="form__label">
              <label htmlFor="channel">Channel</label>
            </div>
            <Field name="channel" id="channel" />
            <ErrorMessage name="channel" component={TextError} />
          </div>

          {/* Comments */}
          <div className="form__form_control">
            <div className="form__label">
              <label htmlFor="comments">Comments</label>
            </div>
            <Field name="comments" id="comments" as={"textarea"} />
            <ErrorMessage name="comments" component={TextError} />
          </div>

          {/* Address */}
          <div className="form__form_control">
            <div className="form__label">
              <label htmlFor="address">Address</label>
            </div>
            <Field name="address" id="address" as={"textarea"} />
            <ErrorMessage name="address" component={TextError} />
          </div>

          {/* Social */}
          <div className="form__form_control">
            <div>
              <div className="form__label">
                <label htmlFor="facebook">Facebook</label>
              </div>
              <Field name="social.facebook" id="facebook" />
              <ErrorMessage name="social.facebook" component={TextError} />
            </div>
            <div>
              <div className="form__label">
                <label htmlFor="twitter">Twitter</label>
              </div>
              <Field name="social.twitter" id="twitter" />
              <ErrorMessage name="social.twitter" component={TextError} />
            </div>
          </div>

          {/* Submit Button */}
          <div className="form__form_control">
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;
