// src/components/DeleteConfirmation.js
import React from 'react';

const DeleteConfirmation = ({ onConfirm, onCancel }) => {
  return (
    <div className="delete-confirmation-modal">
      <h2>Confirm Deletion</h2>
      <p>Are you sure you want to delete this employee?</p>
      <button onClick={onConfirm}>Confirm</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default DeleteConfirmation;
