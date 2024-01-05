// EmailInbox.jsx
import React, { useState } from 'react';
import './email.css';
import { CircularProgress } from '@mui/material';

const EmailInbox = () => {
  const [emails, setEmails] = useState([
    {
      id: 1,
      sender: 'john.doe@example.com',
      subject: 'Meeting Tomorrow',
      content: 'Hi, let\'s have a meeting tomorrow at 10 AM.'
    },
    {
      id: 2,
      sender: 'jane.smith@example.com',
      subject: 'Project Update',
      content: 'The project is progressing well. Here is the latest update.'
    },
    {
        id: 3,
        sender: 'bob.jones@example.com',
        subject: 'Upcoming Event',
        content: 'Dear team, we have an upcoming team-building event next week. Please confirm your attendance by the end of the day. We look forward to a fun and productive day together!'
      },
      {
        id: 4,
        sender: 'mary.johnson@example.com',
        subject: 'Important Announcement',
        content: 'Dear all, I wanted to inform you about an important update regarding our company policies. Please review the attached document for details. If you have any questions, feel free to reach out.'
      },
      {
        id: 5,
        sender: 'david.wilson@example.com',
        subject: 'Feedback Request',
        content: 'Hi team, I would appreciate your feedback on the recent project. Your insights will help us improve our processes and deliver better results in the future. Thank you in advance for your cooperation.'
      }
    // Add more emails as needed
  ]);

  const [selectedEmail, setSelectedEmail] = useState(null);

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
  };

  return (

    
    <div className="email-inbox">
      <h1>Email Inbox                          <CircularProgress color="inherit" /></h1>
      

      <div className="email-list">
        {emails.map((email) => (
          <div
            key={email.id}
            className="email-list-item"
            onClick={() => handleEmailClick(email)}
          >
            <h3>{email.sender}</h3>
            <p>{email.subject}</p>
            <small>{/* You can add a date or other info here */}</small>
          </div>
        ))}
      </div>

      {selectedEmail && (
        <div className="email-content">
          <h2>{selectedEmail.subject}</h2>
          <p>{selectedEmail.content}</p>
          <small>From: {selectedEmail.sender}</small>
        </div>
      )}
    </div>
  );
};

export default EmailInbox;
