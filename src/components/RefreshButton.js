import React from 'react';

const RefreshButton = ({ refreshTasks }) => {
  return (
    <div className="refresh-button">
      <button onClick={refreshTasks}>Refresh</button>
    </div>
  );
};

export default RefreshButton;
