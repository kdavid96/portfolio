import React, { useState, useEffect, useRef } from 'react'
import Fade from 'react-reveal/Fade';
import emailjs from 'emailjs-com';
import '../style.css';
import { IconContext } from 'react-icons';
import { GrGithub } from 'react-icons/gr';
import { GrLinkedin } from 'react-icons/gr';

export const Contact = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_k6vwh6a', 'template_er8c0rg', form.current, 'user_UnRZIZUNeWGnLe12QfBTC')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    var isActive = false;
    if(scrollPosition >= 3430){isActive = true}
    return (
        <div className={`container contact ${isActive ? "container-focus prevent-scroll" : "" }`} id="contact">
            <Fade bottom>
                <div className="contact-box content">
                    <h1 className="contact-title">Contact Me ✉️</h1>
                    <form id="contact-form" ref={form} onSubmit={sendEmail}>
                        <input type="text" name="user_name" placeholder="Name" />
                        <input type="email" name="user_email" placeholder="Email" />
                        <textarea name="message" placeholder="Message" />
                        <input type="submit" value="Send" className="submit-button"/>
                    </form>
                </div>
            </Fade>
            <Fade bottom>
                <div className="footer">
                    <p className="copyright-footer"> &copy;2021<br/>David Koppany</p>
                    <div className="socials">
                        <IconContext.Provider value={{size: '1.2em', className: "github-icon" }}>
                            <a href="https://www.github.com/kdavid96" className="link-footer"><GrGithub /> GitHub</a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{size: '1.2em', className: "linkedin-icon" }}>
                            <a href="https://www.linkedin.com/in/d%C3%A1vid-kopp%C3%A1ny-580449205/" className="link-footer"><GrLinkedin />LinkedIn</a>
                        </IconContext.Provider>
                    </div>
                </div>
            </Fade>
        </div>
    )
}