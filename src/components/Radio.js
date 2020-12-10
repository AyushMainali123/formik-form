import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../TextError";
const Radio = (props) => {
  const { name, label, radioOptions, ...rest } = props;
    console.log(radioOptions)
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      {radioOptions.map((radioOption) => {
        return (
          <Field key={radioOption} name={name} id={name} value={radioOption} {...rest} />
        );
      })}
      <ErrorMessage name={name} component = {TextError} />
    </div>
  );
};

export default Radio;
