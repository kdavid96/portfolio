import React from 'react';
import { SidebarLink } from './Sidebar';
import cv from '../../cv.pdf';
import './style.css';


export const Sidebar = ({isOpen, setOpen}) => {
    const openLink = () =>{
        document.getElementById('sidebar').style.transform = 'translateY(-140%)';
        setOpen(!isOpen);
    } 
    return (
        <div id="sidebar" className="sidebar-div" style={{transform: isOpen ? 'translateY(80%)' : 'translateY(-140%)', transition: '.5s ease-in-out' }}>
            {/*<SidebarLink className="top-links" to="about" onClick={openLink}>About</SidebarLink>
            <SidebarLink className="top-links" to="education" onClick={openLink}>Education</SidebarLink>*/}
            <SidebarLink className="top-links" to="projects" onClick={openLink}>Projects</SidebarLink>
            <SidebarLink className="top-links" to="contact" onClick={openLink}>Contact</SidebarLink>
            <SidebarLink className="top-links" to="projects"><a className="navLinkHamburger" href={cv} target="_blank" rel="noreferrer">CV</a></SidebarLink>
        </div>
    )
}