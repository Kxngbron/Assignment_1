import {Link} from 'react-router-dom';
import image_logo from "../assets/ghost.jpg";

const About = () => {
    return (
        <>
            <div className="pageDisplay">
                <h1 id="title">About</h1>
                <img src={image_logo} alt="Image" id="photo" /><br></br><br></br>
                <p>Name: Bron Banks<br/> Description:</p>


            </div>
        </>
    )
};

export default About;