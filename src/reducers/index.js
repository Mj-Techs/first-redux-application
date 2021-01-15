import { combineReducers } from "redux";
import countReducer from "./counter";
import studentReducer from "./studentList";

const rootReducer = combineReducers({
  counter: countReducer,
  students: studentReducer,
});
export default rootReducer;
