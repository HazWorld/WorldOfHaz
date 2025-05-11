import React from 'react';
import './Projects.css'; // Optional, for custom styling

const projectData = [
  {
    name: 'Orchestra Management App',
    image: 'https://s3a.visitbelfast.com/app/uploads/2019/05/Ulster-Orchestra_1557859910.jpeg',
    link: 'https://example.com/project1',
  },
  {
    name: 'Afterparty Promotion Site',
    image: '/images/Screenshot 2025-05-11 at 16.54.36.png',
    link: 'https://example.com/project2',
  },
  {
    name: 'Save The World',
    image: 'https://via.placeholder.com/300x200',
    link: 'https://example.com/project3',
  },
  {
    name: 'Guitar Learning App',
    image: 'https://via.placeholder.com/300x200',
    link: 'https://example.com/project3',
  },
  {
    name: 'Game Design',
    image: 'https://via.placeholder.com/300x200',
    link: 'https://example.com/project3',
  },

];

function Projects() {
  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Projects</h2>
      <div className="row">
        {projectData.map((project, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img
                src={project.image}
                className="card-img-top"
                alt={project.name}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{project.name}</h5>
                <a
                  href={project.link}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;