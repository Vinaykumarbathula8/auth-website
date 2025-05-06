import React, { useState } from 'react';
import './QuickActions.css';

function NewTask() {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`New Task Created: ${task}`);
    setTask('');
  };

  return (
    <div className="action-screen">
      <h2>Create New Task</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Enter task name"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="input"
        />
        <button type="submit" className="button">Create Task</button>
      </form>
    </div>
  );
}

export default NewTask;
