import '../style.css'

import React, { useEffect, useState } from 'react'

import Fade from 'react-reveal/Fade';
import { ProjectCard } from '../project-card/ProjectCard';
import { ProjectList } from './Projectlist';

export const Projects = ({isDark, theme}) => {
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
    if(scrollPosition >= 2575 && scrollPosition < 3350){isActive = true}
    return (
        <div className={`content ${isActive ? "container-focus" : "" }`} id="projects" style={{position: 'relative', top: '20vh'}}>
            <Fade left><h1 className="container-title title" style={{marginTop: 50 + 'px', color: isDark ? theme.textDark : theme.textLight}}>Projects</h1></Fade>
            <ul className="card-container">
                {ProjectList.map((data) => <li key={data.id}><ProjectCard name={data.name} desc={data.desc} techstack={data.techstack} date={data.date} img={data.img} img1={data.imgSmall} img2={data.imgLaptop} img3={data.imgPC} repo_name={data.repo_name} id={data.id} live={data.live} isDark={isDark} theme={theme}/></li>)}
            </ul>                    
        </div>
    )
}