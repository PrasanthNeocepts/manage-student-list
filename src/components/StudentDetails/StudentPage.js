import React from "react";
import { connect } from "react-redux";
import * as studentActions from "../../redux/actions/StudentActions";
import * as branchAction from "../../redux/actions/branchAction";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import StudentList from "./StudentList";
import { Redirect } from 'react-router-dom';

class StudentPage extends React.Component {
   state={
     redirectToAddStudentPage: false
   };

  componentDidMount() {
    const { students,branches,  actions } = this.props;

    if (students.length === 0) {
      actions.loadstudents().catch(error => {
        alert("Loading students failed" + error);
      });
    }
    if(branches.length === 0){
      actions.loadBranches().catch(error => {
        alert("Loading branches failed" +error);
      });
    }
  }

  render() {
    return (
      <>
        {this.state.redirectToAddStudentPage && <Redirect to="/student" />}
        <h2 style={{textAlign:'center',color:'green'}}>StudentLists</h2>
        <StudentList students={this.props.students} />
        
        <button 
            className="btn btn-primary add-student"
            style={{ textAlign:'center' }}
            onClick={() => this.setState({redirectToAddStudentPage:true })}
            >
              Add Student
            </button>
      </>
    );
  }
}

StudentPage.propTypes = {
  branches:PropTypes.array.isRequired,
  students: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    students:
      state.branches.length === 0
        ? []
        : state.students.map(student => {
            return {
              ...student,
              branchName: state.branches.find(a => a.id === student.branchId).name
            };
          }),
    branches: state.branches
  };
  }


function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadstudents: bindActionCreators(studentActions.loadstudents, dispatch),
      loadBranches:bindActionCreators(branchAction.loadBranches,dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentPage);
