import  Select  from "./Select";
import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import Radio from "./Radio";

const FormikControl = (props) => {
    const { control, ...rest } = props;
  switch (control) {
      case "input":
          return <Input {...rest}/>
      case "textarea":
          return <Textarea {...rest}/>
      case "select":
          return <Select {...rest}/>
      case "radio":
          return <Radio {...rest}/>
    case "checkbox":
    case "date":
    default:
      return null;
  }
};

export default FormikControl;
