import React, { useState } from 'react';
import './style/Projects.css'; 

export default function Projects() {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Project Alpha', description: 'Description of project alpha', status: 'Active' },
    { id: 2, name: 'Project Beta', description: 'Description of project beta', status: 'Completed' },
    { id: 3, name: 'Project Gamma', description: 'Description of project gamma', status: 'In Progress' },
  ]);

  return (
    <div className="projects-container" style={{marginTop:"80px", marginLeft:"290px"}}>

      <div className="projects-list">
        <h4>Project List</h4>
        <div className="list-group">
          {projects.map((project) => (
            <div className="list-group-item" key={project.id}>
              <h5>{project.name}</h5>
              <p>{project.description}</p>
              <span className={`badge bg-${project.status === 'Completed' ? 'success' : project.status === 'In Progress' ? 'warning' : 'primary'}`}>
                {project.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
