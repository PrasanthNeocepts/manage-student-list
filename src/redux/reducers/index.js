import { combineReducers } from "redux";
import students from "./studentReducer";
import branches from "./branchReducers";

const rootReducer = combineReducers({
  students,
  branches
});

export default rootReducer;
