import { Outlet, NavLink, Link } from "react-router-dom";
import home_photo from "../assets/home_photo.png";

const Home = () => {
    return (
        <>
            <div className="pageDisplay">
                <br/><h3 id="title"><i>Hello</i>, Welcome to My Personal Porfolio (Ghöst) <i className="fas fa-ghost"></i></h3><br/><br/>
                <p>
                    <img src={home_photo} alt="Home Photo" id="home_photo" />
                    <b id="sub_heading">Links to Each Page: </b>
                    <ul>
                        <li className="nav-item">
                            <NavLink className="home-link" to="/services">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="home-link" to="/projects">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="home-link" to="/about">About Me</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="home-link" to="/contact">Contact Me</NavLink>
                        </li>
                    </ul><br/><br/><br/><br/>
                    <b id="sub_heading">Mission Statement: </b> As a software engineering student, my goal is to keep learning and growing every day, whether it's by solving complex coding problems or building software that makes life easier for others. I’m excited by the challenge of turning ideas into practical, working solutions that people can actually use and benefit from. I want to master the skills that help me build software that’s not just functional, but also meaningful—software that makes a difference. I believe in working hard, staying curious, and always pushing myself to improve, while staying true to ethical values and being part of a community that makes tech better for everyone.
                </p>

            </div>
        </>
    )
};

export default Home;