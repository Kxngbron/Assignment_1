/* Contact.js, Bron Banks, 301391190, September 27, 2024 */

const Contact = () => {
    return (
        <>
            <div className="pageDisplay">
                <br/><h1 id="title">Contact Me</h1><br/>
                <section>
                    <legend>Contact Info</legend>
                    <p id="contact">
                        <i className="fas fa-phone"></i> Phone Number: 647-642-0305<br/>
                        <i className="fas fa-envelope"></i> Email: bronbanks.bab@gmail.com<br/><br/>
                        <i id="sub-contact">Socials:</i><br/>
                        <a href="https://www.instagram.com/whoisbron._/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i> Instagram
                        </a><br/>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i> Linkedin
                        </a><br/>
                        <a href="https://github.com/Kxngbron" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i> GitHub
                        </a>
                    </p><br/>
                </section><br/><br/>
            <main>
                <form action="mailto:bronbanks.bab@gmail.com" method="post">
                <fieldset>
                    <legend>Send A Message</legend>
                        <p>
                            <label id="personal" for="fname">First Name:</label>
                            <input type="text" name="fname" size="25" tabindex="1" id="fname" placeholder="John" required />
                        </p>
                        <p>
                            <label id="personal" for="lname">Last Name:</label>
                            <input type="text" name="lname" size="25" tabindex="3" id="lname" placeholder="Doe" required />
                        </p>
                        <p>
                            <label for="tele">Contact Number:</label>
                            <input type="text" name="tele" size="12" tabindex="19" id="tele" placeholder="123-456-7089" required />
                        </p>
                        <p>
                            <label id="personal" for="email">Email Address:</label>
                            <input type="text" name="email" size="25" tabindex="7" id="email" placeholder="Johndoe@gmail.com"/>
                        </p>
                        <p>
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="5" cols="33" placeholder="Write your message here..." required></textarea>
                        </p><br/>
                        <p id="button">
                            <input type="submit" name="subbutton" value="Submit" tabindex="59" />
                            <input type="reset" name="resetbutton" value="Reset" tabindex="61" />
                        </p>
                    </fieldset>
                </form>
            </main>

            </div>
        </>
    )
};

export default Contact;