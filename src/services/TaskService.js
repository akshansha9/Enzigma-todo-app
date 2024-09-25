// services/TaskService.js

const TaskService = {
    getTasks: () => {
      return JSON.parse(localStorage.getItem('tasks')) || [];
    },
    saveTasks: (tasks) => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  };
  
  export default TaskService;
  