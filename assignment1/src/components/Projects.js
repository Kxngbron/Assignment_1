import React from "react";
import project1_image from "../assets/project1.png";
//import porject1_link from "../assets/palmsprings";

const Projects = () => {
    return (
        <>
            <div className="pageDisplay">
                <h1 id="title">Projects</h1><br/>
                <p>
                    These are Projects I have Worked On: <br/><br/>
                </p>

                <table>
                    <tbody>
                        <tr>
                            <td><img src={project1_image} alt="Image" id="project_photo"/></td>
                            <td id="space">
                            <a href="/Project1/palmsprings.html" target="_blank" id="service"><b>Project 1</b></a><br/> This is a Spa HTML, I created in my first semester at centennial college in my Web Design Class.
                            </td>
                        </tr><br/><br/><br/>
                        <tr>
                            <td><img src={project1_image} alt="Image" id="project_photo"/></td>
                            <td id="space">
                            <a href="/Project1/palmsprings.html" target="_blank" id="service"><b>Project 2</b></a><br/> This is a Spa HTML, I created in my first semester at centennial college in my Web Design Class.
                            </td>
                        </tr><br/><br/><br/>
                        <tr>
                            <td><img src={project1_image} alt="Image" id="project_photo"/></td>
                            <td id="space">
                            <a href="/Project1/palmsprings.html" target="_blank" id="service"><b>Project 3</b></a><br/> This is a Spa HTML, I created in my first semester at centennial college in my Web Design Class.
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    )
};

export default Projects;