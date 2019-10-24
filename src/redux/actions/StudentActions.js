import * as types from "./actionTypes";
import * as studentApi from "../../api/studentApi";



export function loadstudentsuccess(students) {
  return { type: types.LOAD_STUDENTS_SUCCESS, students };
}

export function createStudentSuccess(student){
  return { type:types.CREATE_STUDENT_SUCCESS,student };
}

export function updateStudentSuccess(student){
  return { type:types.UPDATE_STUDENT_SUCCESS,student };
}

export function loadstudents() {
  return function(dispatch) {
    return studentApi
      .getstudents()
      .then(students => {
        dispatch(loadstudentsuccess(students));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function saveStudent(student){
  return function(dispatch,getState){
    return studentApi
        .saveStudent(student)
        .then(savedstudent => {
          student.id
            ? dispatch(updateStudentSuccess(savedstudent))
            : dispatch(createStudentSuccess(savedstudent));
        })
        .catch(error =>{
          throw error;
        });
  };
}
