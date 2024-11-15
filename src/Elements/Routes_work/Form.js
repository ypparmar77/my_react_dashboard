import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../style/Form.css';

export default function Form() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const existingTask = location.state?.task;

  const [taskName, setTaskName] = useState(existingTask?.taskName || '');
  const [startDate, setStartDate] = useState(existingTask?.startDate || '');
  const [endDate, setEndDate] = useState(existingTask?.endDate || '');
  const [status, setStatus] = useState(existingTask?.status || '');
  const [priority, setPriority] = useState(existingTask?.priority || '');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const task = {
      id: existingTask ? existingTask.id : Date.now(),
      taskName,
      startDate,
      endDate,
      status,
      priority,
    };
  
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
    if (!Array.isArray(tasks)) {
      tasks = [];
    }
  
    if (existingTask) {
      tasks = tasks.map(t => (t.id === task.id ? task : t));
    } else {
      tasks.push(task);
    }
  
    localStorage.setItem('tasks', JSON.stringify(tasks));
  
    setTaskName('');
    setStartDate('');
    setEndDate('');
    setStatus('');
    setPriority('');
  
    navigate('/Task');
  };
  

  return (
    <form onSubmit={handleSubmit} className='mt-2'>
      <label>Task name:<br />
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
      </label><br />

      <label>Start Date & Time:<br />
        <input
          type="datetime-local"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </label><br />

      <label>End Date & Time:<br />
        <input
          type="datetime-local"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
      </label><br />

      <label>Select Status & Priority</label>
      <div className="select_container">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required >
          <option value="">Select Status</option>
          <option value="Started">Started</option> 
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          required >
          <option value="">Select Priority</option>
          <option value="High">High </option>
          <option value="Medium">Medium </option>
          <option value="Low">Low</option>
        </select>
      </div>
      <input id='submit' type="submit" value={existingTask ? "Update" : "Submit"} />
    </form>
  );
}
