import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <strong>Task Name:</strong> {task.taskName}<br />
            <strong>Assign To:</strong> {task.assignTo}<br />
            <strong>Status:</strong> {task.status}<br />
            <strong>Due Date:</strong> {task.dueDate}<br />
            <strong>Priority:</strong> {task.priority}<br />
            <strong>Description:</strong> {task.description}<br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
