import React, {useEffect,useState} from "react";
import { connect } from "react-redux";
import {loadstudents,saveStudent} from "../../redux/actions/StudentActions";
import {loadBranches} from "../../redux/actions/branchAction";
import PropTypes from "prop-types";
import StudentForm from './StudentForm';
import {newStudent} from '../../../tools/mockData';

function ManageStudentPage({
  students, 
  branches,
  loadBranches,
  loadstudents, 
  saveStudent, 
  history, 
  ...props
}) {
  const [student,setStudent] = useState({...props.student});
  const [errors,setErrors] =useState({});
    useEffect(() =>{

    if (students.length === 0) {
      loadstudents().catch(error => {
        alert("Loading students failed" + error);
      });
    }else {
      setStudent({...props.student});
    }

    if(branches.length ===0){
      loadBranches().catch(error => {
        alert("Loading branches error" +error)
      });
    }
}, [props.student]);

   

function handleChange(event){
  const { name,value } = event.target;
  setStudent(prevstudent => ({
    ...prevstudent,
    [name]: name==='branchId' ? parseInt(value,10):value
  }));

}

function handleSave(event){
  event.preventDefault();
  saveStudent(student).then(() => {
    history.push("/students");
  });
}

    return  (
    <StudentForm 
       student={student} 
       errors={errors} 
       branches={branches} 
       onChange={handleChange} 
       onSave={handleSave}
       />
    );
}

ManageStudentPage.propTypes = {
  student:PropTypes.object.isRequired,
  branches:PropTypes.array.isRequired,
  students: PropTypes.array.isRequired,
  loadstudents: PropTypes.func.isRequired,
  loadBranches:PropTypes.func.isRequired,
  saveStudent:PropTypes.func.isRequired,
  history:PropTypes.object.isRequired
};

export function getStudentByName(students, studentName){
  return students.find(student => student.studentName === studentName) || null;
}

function mapStateToProps(state,ownProps) {
  const studentName= ownProps.match.params.studentName;
  const student= studentName && state.students.length > 0 ? getStudentByName(state.students,studentName) :newStudent;
  return {
    student,
    students:state.students,
    branches:state.branches
  };
}

const mapDispatchToProps = {
      loadstudents,
      loadBranches,
      saveStudent
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageStudentPage);
