import history from "../history";

export const CreateRegister = values => {
  history.push("/dashboard");
  return {
    type: "VALUES",
    payload: values
  };
};
export const onDelete = id => {
  history.push("/dashboard");
  return {
    type: "DELETE",
    payload: id
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
