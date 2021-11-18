import '../style.css'

import React, { useEffect, useState } from 'react'

import Fade from 'react-reveal/Fade';

export const About = ({isDark}) => {
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

    var isActive = false;
    if(scrollPosition >= 860 && scrollPosition < 1720){isActive = true}

    return (
        <div className={`container about about-container ${isActive ? "container-focus" : "" } ${isDark ? "container-dark" : "" }`} id="about">
            <Fade bottom>
                <div className="content">
                    <h1>About</h1>
                    <p>This is the about section, that has to be filled up with some interesting text and maybe some fascinating data.</p>

                </div>
            </Fade>
        </div>
    )
}
