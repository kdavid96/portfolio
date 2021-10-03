import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade';
import '../style.css' 
export const Home = () => {
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
    if(scrollPosition < 860){isActive = true}
    return (
        <div className={`container home ${isActive ? "container-focus" : "" }`} id="home">
            <Fade bottom>
                <div className="content">
                    <div className="top-page-content">
                        <div className="top-page-text">
                            <p className="robo">Hi <span className="wave">👋</span><span className="spaceholder"></span>, my name is</p>
                                <h1 className="title">David <a className="rainbow_text_animated" href="/">Koppany</a></h1>
                            <p className="text">I'm a junior front-end developer based in Budapest, Hungary</p>
                        </div>
                        <div className="top-page-image-div">
                            <div className="background-outline">
                                <img alt="cv_image" className="top-page-image" src="./cv_image_big.png"/>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    )
}
