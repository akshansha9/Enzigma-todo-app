import React, { useState } from 'react';

const TaskFormModal = ({ show, onClose, onSave }) => {
  const [taskName, setTaskName] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [status, setStatus] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    const newTask = { taskName, assignTo, status, dueDate, priority, description };
    onSave(newTask);
    onClose(); // Close the modal after saving
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>New Task</h2>
        <label>Task Name:</label>
        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />

        <label>Assign To:</label>
        <input type="text" value={assignTo} onChange={(e) => setAssignTo(e.target.value)} />

        <label>Status:</label>
        <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />

        <label>Due Date:</label>
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />

        <label>Priority:</label>
        <input type="text" value={priority} onChange={(e) => setPriority(e.target.value)} />

        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default TaskFormModal;
