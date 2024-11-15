
import React from 'react';
import './style/Dashboard.css'; // Import the corresponding CSS file for styling

export default function Dashboard() {
  return (
    <div className="dashboard-container" style={{marginTop:"150px", marginLeft:"300px"}}>
      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card text-white bg-primary">
            <div className="card-body">
              <h5 className="card-title">Total Users</h5>
              <p className="card-text">3500</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card text-white bg-success">
            <div className="card-body">
              <h5 className="card-title">Active Tasks</h5>
              <p className="card-text">102</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card text-white bg-danger">
            <div className="card-body">
              <h5 className="card-title">Overdue Tasks</h5>
              <p className="card-text">10</p>
            </div>
          </div>
        </div>
      </div>

 
      <div className="row mt-4">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header bg-info p-2">
              <h5>Recent Activities</h5>
            </div>
            <div className="card-body">
              <ul>
                <li>Task #234 completed by yash parmar</li>
                <li>New user "Jane Smith" signed up</li>
                <li>Task #123 was marked as overdue</li>
                <li>Admin updated system settings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
