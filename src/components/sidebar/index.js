import './style.css';

import React from 'react';
import { SidebarLink } from './Sidebar';
import cv from '../../cv.pdf';

export const Sidebar = ({isOpen, setOpen, isDark}) => {
    const openLink = () =>{
        document.getElementById('sidebar').style.transform = 'translateY(-140%)';
        setOpen(!isOpen);
    } 
    return (
        <div id="sidebar" className="sidebar-div" style={{transform: isOpen ? 'translateY(100%)' : 'translateY(-140%)', transition: 'transform .5s ease-in-out', backgroundColor: isDark ? '' : 'rgb(91, 125, 196)' }}>
            {/*<SidebarLink className="top-links" to="about" onClick={openLink}>About</SidebarLink>
            <SidebarLink className="top-links" to="education" onClick={openLink}>Education</SidebarLink>*/}
            <SidebarLink className="top-links" to="projects" onClick={openLink}>Projects</SidebarLink>
            <SidebarLink className="top-links" to="contact" onClick={openLink}>Contact</SidebarLink>
            <a className="navLinkHamburger top-links" style={{display: 'flex', alignItems: 'center'}}href={cv} target="_blank" rel="noreferrer">CV</a>
        </div>
    )
}