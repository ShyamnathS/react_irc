// src/components/EmployeeList.js
import React from 'react';
import './Employee.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import EmployeeDetails from './Employeedetail';
import EditEmployeeForm from './edit';
import DeleteConfirmation from './delete';
import { Pagination } from '@mui/material';

const EmployeeList = () => {

  const employees = [
    { id: 1, name: 'John Doe', position: 'Software Engineer', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', position: 'Product Manager', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', position: 'UI/UX Designer', email: 'bob@example.com' },
    { id: 4, name: 'Alice Williams', position: 'Frontend Developer', email: 'alice@example.com' },
    { id: 5, name: 'Charlie Brown', position: 'Marketing Specialist', email: 'charlie@example.com' },
    { id: 6, name: 'Eva Martinez', position: 'HR Manager', email: 'eva@example.com' },
    { id: 7, name: 'David Lee', position: 'Financial Analyst', email: 'david@example.com' },
    { id: 8, name: 'Grace Taylor', position: 'Customer Support Representative', email: 'grace@example.com' },
  ];

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [deletingEmployee, setDeletingEmployee] = useState(null);

  const handleViewDetails = (employeeId) => {
    const selected = employees.find((employee) => employee.id === employeeId);
    setSelectedEmployee(selected);
  };

  const handleEdit = (employeeId) => {
    const employeeToEdit = employees.find((employee) => employee.id === employeeId);
    setEditingEmployee(employeeToEdit);
  };

  const handleSaveEdit = (editedEmployee) => {
    // Add logic to save the edited employee data
    console.log('Save edited employee:', editedEmployee);

    // Reset editing state
    setEditingEmployee(null);
  };

  const handleCancelEdit = () => {
    // Reset editing state
    setEditingEmployee(null);
  };

  const handleDelete = (employeeId) => {
    const employeeToDelete = employees.find((employee) => employee.id === employeeId);
    setDeletingEmployee(employeeToDelete);
  };

  const handleConfirmDelete = () => {
    // Add logic to delete the employee
    console.log(`Delete employee with ID ${deletingEmployee.id}`);

    // Reset deleting state
    setDeletingEmployee(null);
  };

  const handleCancelDelete = () => {
    // Reset deleting state
    setDeletingEmployee(null);
  };

  return (
    <div className="employee-list-container">


<Link to={"/dash"} id="change"><h2>Employee List</h2></Link>
<div id="pag">

<Pagination count={10} color="primary" />
</div>
    
    
    
    {/* <h2>Employee List</h2> */}
    <table className="employee-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Position</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.position}</td>
            <td>{employee.email}</td>
            <td>
              <button className="action-button view" onClick={() => handleViewDetails(employee.id)}>
                View Details
              </button>
              <button className="action-button edit" onClick={() => handleEdit(employee.id)}>
                Edit
              </button>
              <button className="action-button delete" onClick={() => handleDelete(employee.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {selectedEmployee && (
        <EmployeeDetails employee={selectedEmployee} />
      )}

{editingEmployee && (
        <EditEmployeeForm
          employee={editingEmployee}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
        />
      )}

{deletingEmployee && (
        <DeleteConfirmation
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
  </div>
  );
};

export default EmployeeList;
