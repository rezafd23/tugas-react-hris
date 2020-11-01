import { combineReducers } from "redux";
import DataEmployee from "./dataEmployee";
import { reducer as formReducer } from "redux-form";

const AllReducers = combineReducers({
  getDataEmployeeList: DataEmployee,
  form: formReducer,
});

export default AllReducers;
