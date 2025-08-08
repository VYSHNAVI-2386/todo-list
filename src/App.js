import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTodos([...todos, { text: task, completed: false }]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleTask = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div style={{ 
      padding: '20px',
      backgroundColor: '#e8f4fd',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '500px',
        margin: '0 auto',
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{
          color: '#2980b9',
          textAlign: 'center',
          marginBottom: '30px',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          letterSpacing: '1px'
        }}>
          ✨ My To-Do List ✨
        </h1>

        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task..."
            style={{
              width: '70%',
              padding: '10px',
              fontSize: '16px',
              border: '2px solid #3498db',
              borderRadius: '5px',
              marginRight: '10px'
            }}
          />
          <button
            onClick={addTask}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Add
          </button>
        </div>

        <div>
          {todos.map((todo, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              padding: '15px',
              marginBottom: '10px',
              backgroundColor: todo.completed ? '#d4edda' : '#ffffff',
              border: '1px solid #dee2e6',
              borderRadius: '5px'
            }}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTask(index)}
                style={{
                  marginRight: '15px',
                  width: '18px',
                  height: '18px'
                }}
              />
              <span style={{
                flex: 1,
                fontSize: '16px',
                color: todo.completed ? '#6c757d' : '#2c3e50',
                textDecoration: todo.completed ? 'line-through' : 'none'
              }}>
                {todo.text}
              </span>
              <button
                onClick={() => deleteTask(index)}
                style={{
                  padding: '8px 15px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '3px',
                  cursor: 'pointer'
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {todos.length === 0 && (
          <p style={{
            textAlign: 'center',
            color: '#6c757d',
            fontSize: '18px',
            marginTop: '30px'
          }}>
            No tasks yet! Add one above.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;