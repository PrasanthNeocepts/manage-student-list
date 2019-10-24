import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function branchReducer(state=initialState.branches,action){
    switch(action.type){
        case types.LOAD_BRANCHES_SUCCESS:
            return action.branches;
            default:
                return state;
    }
}