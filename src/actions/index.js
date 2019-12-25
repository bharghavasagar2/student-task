import history from "../history";

export const CreateRegister = values => {
  history.push("/dashboard");
  return {
    type: "VALUES",
    payload: values
  };
};

export const editRegister = (id, values) => {
  history.push("/dashboard");
  return {
    type: "EDIT",
    payload: values,
    id
  };
};
