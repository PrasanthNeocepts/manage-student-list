import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const StudentList = ({ students }) => (
  <table className="table">
    <thead>
      <tr>
        
        <th>Name</th>
        <th>age</th>
        <th>email</th>
        <th>phnNumber</th>
        <th>branch</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {students.map(student => {
        return (
          <tr key={student.id}>
            
            <td>
            {student.studentName}
            </td>
            <td>{student.age}</td>
            <td>{student.email}</td>
            <td>{student.phnNumber}</td>
            <td>{student.branchName}</td>
            <td>
              <button>
                <Link to={"/student/" + student.studentName}>Edit</Link>
                </button>
              </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

StudentList.propTypes = {
  students: PropTypes.array.isRequired
};

export default StudentList;
