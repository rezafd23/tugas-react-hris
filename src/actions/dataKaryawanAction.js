// export const GET_EMPLOYEE_LIST = "GET_EMPLOYEE_LIST";

// export const getEmployeeList = () => {
//   return (dispatch) => {
//     fetch("https://my-json-server.typicode.com/dyhancrspo/reactjs-redux-latihan/dataEmployee").then((response) =>
//       response.json()
//     );
//     console.log(response);
//   };
// };

import axios from "axios";

export const GET_EMPLOYEE_LIST = "GET_EMPLOYEE_LIST";
export const GET_EMPLOYEE_DETAILS = "GET_EMPLOYEE_DETAILS";

// Data Empolyee List
export const getEmployeeList = () => {
  return (dispatch) => {
    axios
      .get(
        "https://my-json-server.typicode.com/dyhancrspo/reactjs-redux-latihan/dataEmployee"
      )
      // fetch("https://my-json-server.typicode.com/dyhancrspo/reactjs-redux-latihan/dataEmployee")
      .then((response) => {
        dispatch({
          type: GET_EMPLOYEE_LIST,
          payload: {
            data: response.data,
            error: false,
          },
        });
        console.log(response);
      })
      .catch((error) => {
        dispatch({
          type: GET_EMPLOYEE_LIST,
          payload: {
            data: false,
            error: error.message,
          },
        });
        console.log(error);
      });
  };
};

// Data Empolyee Details
export const getEmployeeDetails = (id) => {
  return (dispatch) => {
    axios
      .get(
        "https://my-json-server.typicode.com/dyhancrspo/reactjs-redux-latihan/dataEmployee/" +
          id
      )
      .then((response) => {
        dispatch({
          type: GET_EMPLOYEE_DETAILS,
          payload: {
            data: response.data,
            error: false,
          },
        });
        console.log(response);
      })
      .catch((error) => {
        dispatch({
          type: GET_EMPLOYEE_DETAILS,
          payload: {
            data: false,
            error: error.message,
          },
        });
        console.log(error);
      });
  };
};

// Data Empolyee Refresh
export const deleteEmployeeDetails = (id) => {
  return (dispatch) => {
    dispatch({
      type: GET_EMPLOYEE_DETAILS,
      payload: {
        data: false,
        error: false,
      },
    });
  };
};
