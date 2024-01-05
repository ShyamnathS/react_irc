// EmployeeDashboard.js
import React from 'react';
import './dash.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Avatar, Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail'; // Import MailIcon from Material-UI icons



const EmployeeDashboard = () => {
 
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
      <Avatar id ="mail"alt="Shyam" src="./cris.jpg" />
        <h1>Mr.Safeer</h1>

    <Link to="/email">
    <Badge badgeContent={4} color="primary">
  <MailIcon color="action" />
</Badge>

    </Link>
      </header>

      <main className="dashboard-main">
        <div className="card welcome-card">

        <Link to="/employee" id="routess">


          <h2>Welcome, Safeer!</h2>
    
</Link>
          <p>Your personalized dashboard provides quick access to your tasks and projects.</p>
        </div>
afeer
        <div className="card task-card">
          <h2>Upcoming Tasks</h2>
          <ul>
            <li>Task 1 - Due on mm/dd/yyyy</li>
            <li>Task 2 - Due on mm/dd/yyyy</li>
          </ul>
        </div>

        <div className="card project-card">
          <h2>Projects</h2>
          <table>
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Project A</td>
                <td>In Progress</td>
              </tr>
              <tr>
                <td>Project B</td>
                <td>Completed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default EmployeeDashboard;
