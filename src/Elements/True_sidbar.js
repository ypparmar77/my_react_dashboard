import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './style/True_sidbar.css';

const True_sidbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div>
      <div className="sid-container bg-dark">
        <div className="sid">
          <div className="profile-section text-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-link p-0"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://yt3.googleusercontent.com/uWoHxoXX9rUG7VlnMEU35GoqFhdjhExWqhoUxVU0ivmaUnKgnGJMoH1ST1kewm5S-1QrkWThFfM=s160-c-k-c0x00ffffff-no-rj"
                  alt="Profile"
                  className="profile-img rounded-circle"
                />
              </button>

              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link to="/Profile" className="dropdown-item">
                    <i className="bi bi-person"></i> Profile
                  </Link>
                </li>
                <li>
                  <Link to="/Settings" className="dropdown-item">
                    <i className="bi bi-gear"></i> Settings
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button className="dropdown-item" onClick={handleLogout}>
                    <i className="bi bi-box-arrow-right"></i> Logout
                  </button>
                </li>
              </ul>
            </div>
            <h4 className="mt-2">Yash Parmar</h4>
            <p>Admin</p>
          </div>


          <div className="nav-links">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="/Dashboard" className="nav-link">
                  <i className="bi bi-house-door"></i> Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Settings" className="nav-link">
                  <i className="bi bi-gear"></i> Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Projects" className="nav-link">
                  <i className="bi bi-person-workspace"></i> Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Task" className="nav-link">
                  <i className="bi bi-list-task"></i> Task
                </Link>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={handleLogout}>
                  <i className="bi bi-box-arrow-right"></i> Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default True_sidbar;
