/* About.js, Bron Banks, 301391190, September 27, 2024 */

import {Link} from 'react-router-dom';
import personal_photo from "../assets/bron.png";

const About = () => {
    return (
        <>
            <div className="pageDisplay">
                <br/><h1 id="title">About Me</h1><br/>
                <table>
                    <tbody>
                        <tr>
                            <td id ="test"><img src={personal_photo} alt="Me" id="project_photo"/></td>
                            <td id="space">
                                Name: Bron Banks<br/>
                                Resume: <a href="/Resume/Bron_Resume.pdf" download="Bron's Resume.pdf"> Click Here to Download the PDF File</a> (Old One, Need to Make a Professional<br/> Software Engineer Resume)<br/><br/>
                            </td>
                        </tr><br/><br/><br/>
                    </tbody>
                </table>
                <p>
                    Description: I am an aspiring Software Engineer Student at Centennial College who have a strong problem solving ability with the desire to create something that will make life significantly easier for everyone. I'm not sure how I'm going to do that but if you believe anything can happen - 'TRUST'. However, in my spare time I like to play video games, browse social media, and visit new places.
                </p>
            </div>
        </>
    )
};

export default About;
/*
<p>
<td><img src={personal_photo} alt="Me" id="project_photo"/></td>
                    Name: Bron Banks<br/>
                    Resume: <a href="/Resume/Bron_Resume.pdf" download="Bron's Resume.pdf"> Click Here to Download the PDF File</a> (Old One, Need to Make a Professional<br/> Software Engineer Resume)<br/><br/>

                    Description: I am an aspiring Software Engineer Student at Centennial College who have a strong problem solving ability with the desire to create something that may make life even easier for all living creatures. I'm not sure how I'm going to do that but if you believe anything can happen - 'TRUST'. However, in my spare time I like to play video games, browse social media, and visit new places.
                </p>

                */