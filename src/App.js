import React, { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskFormModal from './components/TaskFormModal';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleNewTask = () => {
    setShowModal(true);
  };

  const handleSaveTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleRefresh = () => {
    // Logic for refreshing tasks
    console.log('Tasks refreshed');
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredTasks = tasks.filter(task => 
    task.taskName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header 
        onNewTask={handleNewTask} 
        onRefresh={handleRefresh} 
        onSearch={handleSearch} 
      />
      <TaskList tasks={filteredTasks} />
      <TaskFormModal 
        show={showModal} 
        onClose={handleCloseModal} 
        onSave={handleSaveTask} 
      />
    </div>
  );
};

export default App;
