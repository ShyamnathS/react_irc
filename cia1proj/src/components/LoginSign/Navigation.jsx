// Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <Link to="/login">Login</Link>
      <Link to="/sign">Sign</Link>
    </div>
  );
};

export default Navigation;
