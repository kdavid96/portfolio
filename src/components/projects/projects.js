import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade';
import { ProjectCard } from '../project-card/ProjectCard';
import { ProjectList } from './Projectlist';
import '../style.css' 

export const Projects = () => {
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
        <div className={`projects ${isActive ? "container-focus" : "" }`} id="projects">
            <Fade bottom>
                <div className="content">
                    <h1 style={{marginTop: 100 + 'px'}}>Projects</h1>
                    <ul className="card-container">
                        {ProjectList.map((data) => <li key={data.id}><ProjectCard name={data.name} desc={data.desc} techstack={data.techstack} date={data.date} img={data.img} repo_name={data.repo_name} id={data.id} live={data.live}/></li>)}
                    </ul>                    
                </div>
            </Fade>
        </div>
    )
}