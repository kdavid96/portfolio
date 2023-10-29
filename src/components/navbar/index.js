import './Navbar.css';

import React, {useEffect, useState} from 'react'

import Fade from 'react-reveal/Fade';
import ProgressBar from "react-scroll-progress-bar";
import { Sidebar } from '../sidebar';
import { Sling } from 'hamburger-react';
import ToggleButton from './ToggleButton';
import cv from '../../cv.pdf';
import { links } from '../../Data'

export const Navbar = ({ isOpen, setOpen, isDark, setDark }) => {
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
  if(scrollPosition >= 60){isActive = true}

  const handleClick = (e) => {
    e.preventDefault()
    const target = e.target.getAttribute('href');
    const location = document.querySelector(target) ? document.querySelector(target).offsetTop : 0;
    if(location == null){
      window.scrollTo({
        left: 0,
        top: 0
      })
    }else{
      window.scrollTo({
        left: 0,
        top: location - 64
      })
    }
  }
    return (
      <>
      <nav className={"navbar sticky"} style={{backgroundColor: isDark ? '#03040B' : 'rgb(91, 125, 196)'}}>
        <Fade top>
            <a href="navLink" onClick={handleClick}><img className="favicon-header" src="./favicon.png" alt="logo"/></a>
            <div className="links">
              {links.map((link)=>{
                if(link.url === '#cv'){
                  return <a className={isDark ? "navLink" : "navLinkDark"} href={cv} key={link.id} target="_blank" rel="noreferrer" ref={React.createRef()}>{link.text}</a>
                }
                else if(link.url === 'blog'){
                  return <a className={isDark ? "navLink" : "navLinkDark"} href={'blog'} key={link.id} ref={React.createRef()}>{link.text}</a>
                }else{
                  return <a className={isDark ? "navLink" : "navLinkDark"} href={link.url} key={link.id} onClick={handleClick} ref={React.createRef()}>{link.text}</a>
                }
              })}
            <ToggleButton  isDark={isDark} setDark={setDark} />
            <Sling toggled={isOpen} onToggle={toggled => {
            setOpen(!isOpen);
            }} rounded color="#fff" className="hamburger"/>
          {/*<Bars isOpen={isOpen} onClick={() => setOpen(!isOpen)} />*/}
          </div>
          </Fade>
          <div className="progress-bar">
            <ProgressBar bgcolor={isDark ? "#00CC83" : "#0B5ED7"} className="progress-bar"/>
          </div>
      </nav>
      <Sidebar isOpen={isOpen} setOpen={setOpen} isDark={isDark}/>
      </>
    )
}
