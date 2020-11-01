import {
  GET_EMPLOYEE_DETAILS,
  GET_EMPLOYEE_LIST,
} from "../actions/dataKaryawanAction";

let initialState = {
  dataEmployee: false,
  error: false,
  detailsDataEmployee: false,
  errorDetailsEmployee: false,
};

// const DataEmployee = (state = initialState, action) => {
//   switch (action.type) {
//     case "addData":
//       return {
//         ...state,
//         dataEmployee: action.payload.dataEmployee,
//       };
//     default:
//       return state;
//   }
// };

const DataEmployee = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEE_LIST:
      return {
        ...state,
        dataEmployee: action.payload.data,
        error: action.payload.errorMessage,
      };
    case GET_EMPLOYEE_DETAILS:
      return {
        ...state,
        detailsDataEmployee: action.payload.data,
        errorDetailsEmployee: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default DataEmployee;
