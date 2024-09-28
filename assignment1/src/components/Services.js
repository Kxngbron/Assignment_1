/* Services.js, Bron Banks, 301391190, September 27, 2024 */

import service_photo from "../assets/services.png";

const Services = () => {
    return (
        <>
            <div className="pageDisplay">
                <br/><h1 id="title">Services</h1>
                <img src={service_photo} alt="Image" id="service_photo" /><br></br><br></br>
                <p>As a Sotware Engineering Students, Here is  a list of my capabilties:</p>
                <ul id="services">
                    <li><i className="fas fa-laptop-code"></i> General Programming</li>
                    <ul id="service">
                        <li>Java</li>
                        <li>Python</li>
                        <li>C#</li>
                    </ul>
                    <li><i className="fas fa-globe"></i>  Web Development</li>
                    <ul id="service">
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul><br/>
                    <li><i className="fas fa-mobile-alt"></i> Mobile Application Development</li><br/>
                    <li><i className="fas fa-gamepad"></i> Game Programming</li><br/>
                    <li><i className="fas fa-puzzle-piece"></i> Problem Solving</li><br/>
                    <li><i className="fas fa-comment"></i> Great Communication Skills</li>
                </ul>

            </div>
        </>
    )
};

export default Services;