export default (state = [], action) => {
  switch (action.type) {
    case "VALUES":
      return [...state, action.payload];
    case "EDIT":
      return state.map(student =>
        student.name === action.payload.name ? action.payload : student
      );
    default:
      return state;
  }
};
