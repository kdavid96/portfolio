import '../style.css'

import React, { useEffect, useState } from 'react'

import Fade from 'react-reveal/Fade';

export const Education = () => {
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
    if(scrollPosition >= 1720 && scrollPosition < 3333){isActive = true}
    return (
        <div className={`container education education-container ${isActive ? "container-focus" : "" }`} id="education">
            <Fade bottom>
                <div className="content">
                    <h1>Education</h1>
                    <div className="education-filler-img">
                        <ul className="education-list">
                            <li className="education-li">University of Szeged</li>
                            <li className="education-li">Istvan Szechenyi High School</li>
                        </ul>
                    </div>
                </div>
            </Fade>
        </div>
    )
}