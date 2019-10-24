import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const StudentForm = ({
  student,
  branches,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{student.id ? "Edit" : "Add"} Student Details</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="studentName"
        label="Enter Name"
        value={student.studentName}
        onChange={onChange}
        error={errors.studentName}
      />

      <TextInput
        name="age"
        label="Enter age"
        value={student.age}
        onChange={onChange}
        error={errors.age}
      />

      <TextInput
        name="email"
        label="Email"
        value={student.email}
        onChange={onChange}
        error={errors.email}
      />

      <TextInput
          name="phnNumber"
          label="Enter Mobile Number"
          value={student.phnNumber}
          onChange={onChange}
          error={errors.phnNumber}
          />

          <SelectInput
              name="branchId"
              label="Branch"
              value={student.branchId || ""}
              defaultOption="Select Branch"
              options={branches.map(branch => ({
                value: branch.id,
                text: branch.name
              }))}
              onChange={onChange}
              error={errors.branch}

              />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

StudentForm.propTypes = {
  branches:PropTypes.array.isRequired,
  student: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default StudentForm;
