import '../style.css'

import React, { useEffect, useState } from 'react'

import Fade from 'react-reveal/Fade';
import { TechnologyList } from '../home/Technologylist';

export const Home = ({isDark, theme}) => {
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
        <div className={`container home ${isActive ? "container-focus" : "" }  ${!isDark ? "container-dark" : "" }`} id="home" style={{top: '10vh'}}>
            <Fade bottom>
                <div className="content">
                    <div className="top-page-content">
                        <div className="top-page-text">
                            <p className="robo">Hi <span className="wave">👋</span><span className="spaceholder"></span>, my name is</p>
                                <h1 className="title">David <a className="rainbow_text_animated" href="/">Koppany</a></h1>
                            <p className="text">I'm a ServiceNow/JavaScript developer based in Budapest, Hungary</p>
                        </div>
                        <div className="top-page-image-div">
                            <div className="background-outline">
                                <img alt="cv_image" className="top-page-image" src="./cv_image_big.png"/>
                            </div>
                        </div>
                    </div>
                    <div className="technology-container">
                            {TechnologyList.map((data) => <Fade delay={100} bottom><li className="technology-card"  style={{backgroundColor: isDark ? theme.cardDark : theme.cardLight}} key={data.id}><img className="technology-image" alt={data.name} src={data.img}></img></li></Fade>)}
                    </div>
                </div>
            </Fade>
        </div>
    )
}
