import React, { useState, useEffect, useRef } from 'react';
import Fade from 'react-reveal/Fade';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
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

    const { register, handleSubmit, formState: { errors } } = useForm();

    const sendEmail = (e) => {
        emailjs.sendForm('service_k6vwh6a', 'template_er8c0rg', form.current, 'user_UnRZIZUNeWGnLe12QfBTC')
        .then((result) => {
            console.log(result.text);
            form.current.reset();
            document.getElementById('success-message').style.display = "block";
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
                    <form id="contact-form" ref={form} onSubmit={handleSubmit(sendEmail)}>
                        <input type="text" name="user_name" placeholder="Name" {...register("user_name", {required: true})}/>
                        {errors.user_name && <p className="error-message">Please type in your name</p>}
                        <input type="email" name="user_email" placeholder="Email" {...register("user_email", {required: true})}/>
                        {errors.user_email && <p className="error-message">Please type in your email address</p>}
                        <textarea name="message" placeholder="Message" {...register("message", {required: true})}/>
                        {errors.message && <p className="error-message">Please type in your message</p>}
                        <input type="submit" value="Send" className="submit-button"/>
                        {<p id="success-message" className="success-message">Your message has been sent! I'll get back to you as soon as possible.</p>}
                    </form>
                </div>
            </Fade>
            <Fade bottom>
                <div className="footer">
                    <p className="copyright-footer"> &copy;2021<br/>David Koppany</p>
                    <div className="socials">
                        <IconContext.Provider value={{size: '1.2em', className: "github-icon" }}>
                            <a href="https://www.github.com/kdavid96" target="_blank" className="link-footer"><GrGithub /> GitHub</a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{size: '1.2em', className: "linkedin-icon" }}>
                            <a href="https://www.linkedin.com/in/d%C3%A1vid-kopp%C3%A1ny-580449205/" target="_blank" className="link-footer"><GrLinkedin />LinkedIn</a>
                        </IconContext.Provider>
                    </div>
                </div>
            </Fade>
        </div>
    )
}