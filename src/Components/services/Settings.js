import React, { useState } from 'react';
import NavBar from '../Layout/NavBar';

function Settings() {
  const [schemaName, setSchemaName] = useState('');
  const [userName, setUserName] = useState('');

  const handleSchemaNameChange = (event) => {
    setSchemaName(event.target.value);
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Code to submit the form data to the server would go here
  };

  return (
    <div className='container'>
     <div className="nav_bar">
    <NavBar />
      </div>
      <h1>Settings</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Database Schema Name:
          <input type="text" value={schemaName} onChange={handleSchemaNameChange} />
        </label>
        <br />
        <label>
          Database User Name:
          <input type="text" value={userName} onChange={handleUserNameChange} />
        </label>
        <br />
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
}

export default Settings;
