import '../style.css';
import CopyIcon from './copy-button.svg';

import React, { useEffect, useRef, useState } from 'react';

import ImpressumPopUp from './impressumPopUp';
import { GrGithub } from 'react-icons/gr';
import { GrLinkedin } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';

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
        emailjs.init(process.env.REACT_APP_PUBLIC_KEY);
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current)
        .then((result) => {
            form.current.reset();
            document.getElementById('success-message').style.display = "block";
        }, (error) => {
            document.getElementById('error-message').style.display = "block";
        });
    }

    const copyToClipboard = () => {
        let isCopy = copy("contact@davidkoppany.com");
        if (isCopy) {
          toast.success("Email address was copied to the clipboard!");
        }
    };

    var isActive = false;
    if(scrollPosition >= 3430){isActive = true}
    return (
        <div className={`container contact ${isActive ? "container-focus prevent-scroll" : "" } ${!isDark ? "container-dark" : ''}`} id="contact">
            <div className="contact-box content">
                <h1 className="container-title title" style={{marginTop: 50 + 'px', color: isDark ? theme.textDark : theme.textLight}}>Contact</h1>
                <div className="contact-contents">
                    <p>To contact me, you can send me an email with this form.<br/><br/>

                    If you would like to use a different platform:<br/>
                    Email: <a href='mailto:contact@koppanydavid.com' style={{color: "#13da94", textDecoration: "none"}}>contact@davidkoppany.com</a>
                    <button className='copy_email_parent'><svg onClick={copyToClipboard} className='copy_email_button' fill="#ffffff" height="40px" width="40px" version="1.1" id="Layer_1" 
                        viewBox="0 0 64 64" enable-background="new 0 0 64 64">
                    <g id="Text-files">
                        <path d="M53.9791489,9.1429005H50.010849c-0.0826988,0-0.1562004,0.0283995-0.2331009,0.0469999V5.0228
                            C49.7777481,2.253,47.4731483,0,44.6398468,0h-34.422596C7.3839517,0,5.0793519,2.253,5.0793519,5.0228v46.8432999
                            c0,2.7697983,2.3045998,5.0228004,5.1378999,5.0228004h6.0367002v2.2678986C16.253952,61.8274002,18.4702511,64,21.1954517,64
                            h32.783699c2.7252007,0,4.9414978-2.1725998,4.9414978-4.8432007V13.9861002
                            C58.9206467,11.3155003,56.7043495,9.1429005,53.9791489,9.1429005z M7.1110516,51.8661003V5.0228
                            c0-1.6487999,1.3938999-2.9909999,3.1062002-2.9909999h34.422596c1.7123032,0,3.1062012,1.3422,3.1062012,2.9909999v46.8432999
                            c0,1.6487999-1.393898,2.9911003-3.1062012,2.9911003h-34.422596C8.5049515,54.8572006,7.1110516,53.5149002,7.1110516,51.8661003z
                            M56.8888474,59.1567993c0,1.550602-1.3055,2.8115005-2.9096985,2.8115005h-32.783699
                            c-1.6042004,0-2.9097996-1.2608986-2.9097996-2.8115005v-2.2678986h26.3541946
                            c2.8333015,0,5.1379013-2.2530022,5.1379013-5.0228004V11.1275997c0.0769005,0.0186005,0.1504021,0.0469999,0.2331009,0.0469999
                            h3.9682999c1.6041985,0,2.9096985,1.2609005,2.9096985,2.8115005V59.1567993z"/>
                        <path d="M38.6031494,13.2063999H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0158005
                            c0,0.5615997,0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4542999,1.0158997-1.0158997
                            C39.6190491,13.6606998,39.16465,13.2063999,38.6031494,13.2063999z"/>
                        <path d="M38.6031494,21.3334007H16.253952c-0.5615005,0-1.0159006,0.4542999-1.0159006,1.0157986
                            c0,0.5615005,0.4544001,1.0159016,1.0159006,1.0159016h22.3491974c0.5615005,0,1.0158997-0.454401,1.0158997-1.0159016
                            C39.6190491,21.7877007,39.16465,21.3334007,38.6031494,21.3334007z"/>
                        <path d="M38.6031494,29.4603004H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                            s0.4544001,1.0158997,1.0159006,1.0158997h22.3491974c0.5615005,0,1.0158997-0.4543991,1.0158997-1.0158997
                            S39.16465,29.4603004,38.6031494,29.4603004z"/>
                        <path d="M28.4444485,37.5872993H16.253952c-0.5615005,0-1.0159006,0.4543991-1.0159006,1.0158997
                            s0.4544001,1.0158997,1.0159006,1.0158997h12.1904964c0.5615025,0,1.0158005-0.4543991,1.0158005-1.0158997
                            S29.0059509,37.5872993,28.4444485,37.5872993z"/>
                    </g>
                    </svg></button>
                    <br/>
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
                        {<p id="error-message" className="error-message">An error has occured while sending the message. Please send an email manually to the address above.</p>}
                    </form>
                </div>
                <div className="footer">
                        <IconContext.Provider value={{size: '1.2em', className: "github-icon" }}>
                            <a style={{color: isDark ? '' : 'black'}} href="https://www.github.com/kdavid96" target="_blank" rel="noreferrer" className="link-footer"><GrGithub /> GitHub</a>
                        </IconContext.Provider>
                        <ImpressumPopUp />
                        <IconContext.Provider value={{size: '1.2em', className: "linkedin-icon" }}>
                            <a style={{color: isDark ? '' : 'black'}} href="https://www.linkedin.com/in/d%C3%A1vid-kopp%C3%A1ny-580449205/" target="_blank" rel="noreferrer" className="link-footer"><GrLinkedin />LinkedIn</a>
                        </IconContext.Provider>
                </div>
            </div>
        </div>
    )
}
