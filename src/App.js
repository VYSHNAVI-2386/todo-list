import React, { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="app-container">
      <div className="todo-box">
        <h1>✨ My To-Do List ✨</h1>

        <div className="input-section">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task..."
          />
          <button onClick={addTask}>Add</button>
        </div>

        <div>
          {todos.map((todo, index) => (
            <div key={index} className="todo-item">
              <span>{todo}</span>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </div>
          ))}
        </div>

        {todos.length === 0 && <p className="empty-text">No tasks yet! Add one above.</p>}
      </div>
    </div>
  );
}

export default App;
