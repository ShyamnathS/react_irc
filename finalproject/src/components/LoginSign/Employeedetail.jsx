// src/components/EmployeeDetails.js
import React from 'react';

const EmployeeDetails = ({ employee }) => {
  return (
    <div className="employee-details-modal">
      <h2>Employee Details</h2>
      <p>ID: {employee.id}</p>
      <p>Name: {employee.name}</p>
      <p>Position: {employee.position}</p>
      <p>Email: {employee.email}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default EmployeeDetails;
