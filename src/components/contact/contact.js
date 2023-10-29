import '../style.css';

import React, { useEffect, useRef, useState } from 'react';

import Fade from 'react-reveal/Fade';
import ImpressumPopUp from './impressumPopUp';
import { GrGithub } from 'react-icons/gr';
import { GrLinkedin } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

export const Contact = ({isDark, theme}) => {
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
        emailjs.sendForm('service_kj4mzt5', 'template_kaspj5p', form.current, 'user_UnRZIZUNeWGnLe12QfBTC')
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
        <div className={`container contact ${isActive ? "container-focus prevent-scroll" : "" } ${!isDark ? "container-dark" : ''}`} id="contact">
            <div className="contact-box content">
                <h1 className="container-title title" style={{marginTop: 50 + 'px', color: isDark ? theme.textDark : theme.textLight}}>Contact</h1>
                <div className="contact-contents">
                    <p>To contact me, you can send me an email with this form.<br/><br/>

                    If you would like to use a different platform:<br/>
                    Email: <span style={{color: "#13da94"}}>info@davidkoppany.com</span><br/>
                    </p>
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
                <div className="footer">
                        <IconContext.Provider value={{size: '1.2em', className: "github-icon" }}>
                            <a style={{color: isDark ? '' : 'black'}} href="https://www.github.com/kdavid96" target="_blank" className="link-footer"><GrGithub /> GitHub</a>
                        </IconContext.Provider>
                        <ImpressumPopUp />
                        <IconContext.Provider value={{size: '1.2em', className: "linkedin-icon" }}>
                            <a style={{color: isDark ? '' : 'black'}} href="https://www.linkedin.com/in/d%C3%A1vid-kopp%C3%A1ny-580449205/" target="_blank" className="link-footer"><GrLinkedin />LinkedIn</a>
                        </IconContext.Provider>
                </div>
            </div>
        </div>
    )
}
