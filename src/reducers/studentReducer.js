export default (state = [], action) => {
  switch (action.type) {
    case "VALUES":
      return [...state, action.payload];
    case "EDIT":
      return state.map(student =>
        student.name === action.payload.name ? action.payload : student
      );
    case "DELETE":
      return state.filter(student => student["Student id"] !== action.payload);
    default:
      return state;
  }
};
