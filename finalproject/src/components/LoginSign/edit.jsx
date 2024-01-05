// src/components/EditEmployeeForm.js
import React, { useState } from 'react';

const EditEmployeeForm = ({ employee, onSave, onCancel }) => {
  const [editedEmployee, setEditedEmployee] = useState({
    id: employee.id,
    name: employee.name,
    position: employee.position,
    email: employee.email,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedEmployee);
  };

  return (
    <div className="edit-employee-form">
      <h2>Edit Employee</h2>
      <label>
        Name:
        <input type="text" name="name" value={editedEmployee.name} onChange={handleChange} />
      </label>
      <label>
        Position:
        <input type="text" name="position" value={editedEmployee.position} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="text" name="email" value={editedEmployee.email} onChange={handleChange} />
      </label>
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default EditEmployeeForm;
