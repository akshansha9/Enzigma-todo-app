import React from 'react';

const Header = ({ onNewTask, onRefresh, onSearch }) => {
  return (
    <div className="header">
      <input 
        type="text" 
        placeholder="Search tasks..." 
        onChange={(e) => onSearch(e.target.value)} 
        className="search-bar"
      />
      <button onClick={onNewTask} className="new-task-button">New Task</button>
      <button onClick={onRefresh} className="refresh-button">Refresh</button>
    </div>
  );
};

export default Header;
