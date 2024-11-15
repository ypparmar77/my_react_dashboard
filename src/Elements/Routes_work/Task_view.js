import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function Date_Time(e) {
  const date = new Date(e);
  const Working = {
    day: 'numeric',
    hour: '2-digit',
    month: 'long',
    minute: '2-digit',
    second: '2-digit',
    year: 'numeric',
  };
  return date.toLocaleString(Working);
}

export default function Task_view() {
  const { id } = useParams();  
  const [task, setTask] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskDetails = savedTasks.find(task => task.id === parseInt(id));
    setTask(taskDetails);
  }, [id]);

  if (!task) {
    return (
      <div id="work_spinner" className="spinner-border text-success">
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const No = savedTasks.findIndex(task => task.id === parseInt(id)) +1;

  return (
    <div  style={{marginTop:"150px", marginLeft:"300px"}}>
      <h1>Task Details</h1>
      <table className="table">
        <tbody>
          <tr>
            <td><b>No :</b></td>
            <td>{No}</td> 
          </tr>
          <tr>  
            <td><b>Task Name :</b></td>
            <td>{task.taskName}</td>
          </tr>
          <tr>
            <td><b>Start Date & Time :</b></td>
            <td>{Date_Time(task.startDate)}</td>
          </tr>
          <tr>
            <td><b>End Date & Time :</b></td>
            <td>{Date_Time(task.endDate)}</td> 
          </tr>
          <tr>
            <td><b>Status :</b></td>
            <td>{task.status}</td>
          </tr>
          <tr>
            <td><b>Priority :</b></td>
            <td>{task.priority}</td>
          </tr>
        </tbody>
      </table>
      <Link to="/Navbar/Task" role="button" style={{fontSize:"30px"}} className='button-55 btn btn-success'><i className="bi bi-skip-backward"></i></Link>
    </div>
  );
}
