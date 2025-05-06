import React, { useState } from 'react';
import './QuickActions.css';

function AddUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    alert(`User Added: ${name} (${email})`);
    setName('');
    setEmail('');
  };

  return (
    <div className="action-screen">
      <h2>Add New User</h2>
      <form onSubmit={handleAdd} className="form">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
        <button type="submit" className="button">Add User</button>
      </form>
    </div>
  );
}

export default AddUser;
