import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from './Navbar'; 
import Sidenav from './Sidebar';
import "bootstrap/dist/css/bootstrap.css";
import "./style/Task.css";

export default function Task() {
  const [tasks, setTasks] = useState([]); 
  const [searchTerm, setSearchTerm] = useState("");
  const [filterValues, setFilterValues] = useState({
    startDate: '',
    endDate: '',
    status: '',
    priority: ''
  });
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidenav = () => {
    setIsSidenavOpen(!isSidenavOpen);
  };

  function Date_Time(e) {
    const date = new Date(e);
    const options = {
      day: 'numeric',
      hour: '2-digit',
      month: 'long',
      minute: '2-digit',
      second: '2-digit',
      year: 'numeric',
    };
    return date.toLocaleString(options);
  }

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (Array.isArray(savedTasks)) {
      setTasks(savedTasks);
    } else {
      setTasks([]);  
    }
  }, []);

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  // Edit task
  const editTask = (task) => {
    navigate('/Form', { state: { task } });
  };

  const filteredTasks = tasks.filter((task) => {
    let matchesSearchTerm = false;
    let matchesStartDate = true;
    let matchesEndDate = true;
    let matchesStatus = true;
    let matchesPriority = true;

    if (searchTerm) {
      if (task.taskName.toLowerCase().includes(searchTerm.toLowerCase()) || task.status.toLowerCase().includes(searchTerm.toLowerCase())) {
        matchesSearchTerm = true;
      } else {
        matchesSearchTerm = false;
      }
    } else {
      matchesSearchTerm = true;
    }

    if (filterValues.startDate) {
      if (new Date(task.startDate) >= new Date(filterValues.startDate)) {
        matchesStartDate = true;
      } else {
        matchesStartDate = false;
      }
    }

    if (filterValues.endDate) {
      if (new Date(task.endDate) <= new Date(filterValues.endDate)) {
        matchesEndDate = true;
      } else {
        matchesEndDate = false;
      }
    }

    if (filterValues.status) {
      if (task.status.toLowerCase() === filterValues.status.toLowerCase()) {
        matchesStatus = true;
      } else {
        matchesStatus = false;
      }
    }

    if (filterValues.priority) {
      if (task.priority.toLowerCase() === filterValues.priority.toLowerCase()) {
        matchesPriority = true;
      } else {
        matchesPriority = false;
      }
    }

    return matchesSearchTerm && matchesStartDate && matchesEndDate && matchesStatus && matchesPriority;
  });

  return (
    <div>
      <Navbar setSearchTerm={setSearchTerm} />
      
      <div style={{ marginLeft: "266px", transition: "0.5s", marginTop: "105px" }} className='p-3'>
        <button className='btn btn-info' onClick={toggleSidenav}>
          {isSidenavOpen ? 'Close Filter' : 'Filter'}
        </button>

        {isSidenavOpen && <Sidenav setFilterValues={setFilterValues} />}

        <table className='table'>
          <thead>
            <tr>
              <th>No</th>
              <th>Task Name</th>
              <th>Start Date & Time</th>
              <th>End Date & Time</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task, index) => (
                <tr key={task.id}>
                  <td>{index + 1}</td>
                  <td>{task.taskName}</td>
                  <td>{Date_Time(task.startDate)}</td>
                  <td>{Date_Time(task.endDate)}</td>
                  <td>{task.status}</td>
                  <td>{task.priority}</td>
                  <td>
                    <button role="button" className='button-55 btn btn-success' onClick={() => editTask(task)}>
                      <i className="bi bi-pencil-square"></i>
                    </button>
                  </td>
                  <td>
                    <button role="button" className='button-55 btn btn-danger' onClick={() => deleteTask(task.id)}>
                      <i className="bi bi-trash-fill"></i>
                    </button>
                  </td>
                  <td>
                    <Link to={`/Task_view/${task.id}`}>
                      <button role="button" className='button-55 btn btn-info'>
                        <i className="bi bi-eye"></i>
                      </button>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center">No tasks.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
