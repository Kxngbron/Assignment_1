/* Projects.js, Bron Banks, 301391190, September 27, 2024 */

import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

const projects = [
    { name: "SPA Resort",
     image: project1,
     description: "A Web Application to Browse the SPA Services Provided by Tropical Resort.", 
     link: "/Project1/palmsprings.html" 
    },
    { name: "Story Generator",
     image: project2,
     description: "An HTML that Allows the User to Insert Values that will be displayed in a Story Genarator.", 
     link: "/Project2/index.html" 
     },
    { name: "Word Guessing Game",
     image: project3,
     description: "A Word Puzzle.", 
     link: "/Project3/index.html"  
    },
  ];

  const Projects = () => {
    return (
      <div className="pageDisplay">
        <br/><h1 id="title">My Projects</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img className="project-image" src={project.image} alt={project.name} />
              <h4 className="project-name">{project.name}</h4>
              <p className="project-description">{project.description}</p>
            <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
              View Project </a>
            </div>
          ))}
        </div> 
        </div>
    );
 };
    
export default Projects;