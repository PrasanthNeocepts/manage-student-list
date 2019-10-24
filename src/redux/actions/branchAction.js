import * as types from "./actionTypes";
import * as branchesApi from "../../api/branchesApi";

export function loadBranchSuccess(branches) {
    return { type: types.LOAD_BRANCHES_SUCCESS, branches };
  }

export function loadBranches(){
    return function(dispatch){
        return branchesApi
           .getBranches()
           .then(branches => {
               dispatch(loadBranchSuccess(branches));
           })
           .catch(error =>{
              throw error;
           }
           );
    }
}