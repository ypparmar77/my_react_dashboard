import React from 'react';
import './style/Sidebar.css';

export default function Sidenav({ setFilterValues }) {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterValues(prevState => ({
      ...prevState,[name]: value
    }));
  };

  return (
    <div className="sidenav">
      <form className='Form bg-dark'>
       <div style={{display:"flex" }}>
        
        <label className="label_work">Start Date & Time
          <input type="datetime-local" name="startDate" onChange={handleFilterChange} />
        </label>

        <label className="label_work">End Date & Time 
          <input type="datetime-local" name="endDate" onChange={handleFilterChange} />
        </label>
   

        <div>
        <label className="label_work">Select Status / Select Priority</label>
        
        <div className="select_container_2" style={{marginTop:"100px"}}>
          <select name="status" onChange={handleFilterChange}>
            <option value="">Select Status</option>
            <option value="Started">Started</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>

          <select name="priority" onChange={handleFilterChange} >
            <option value="">Select Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        </div>
       </div>
      </form>
    </div>
  );
}
