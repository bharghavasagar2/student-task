export const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values["Student id"]) {
    errors["Student id"] = "Required";
  } else if (isNaN(Number(values["Student id"]))) {
    errors["Student id"] = "Must be a number";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (isNaN(Number(values.password))) {
    errors.password = "Must be a number";
  }
  if (values.password !== values["confirm password"]) {
    errors["confirm password"] = "password dont match";
  }
  if (!values.country) {
    errors.country = "Required";
  }
  return errors;
};
