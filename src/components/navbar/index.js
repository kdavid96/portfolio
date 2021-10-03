import React, {useState, useEffect} from 'react'
import Fade from 'react-reveal/Fade';
import { links } from '../../Data'
import { Sidebar } from '../sidebar';
import { Sling } from 'hamburger-react';
import './Navbar.css';

export const Navbar = ({ isOpen, setOpen }) => {
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
      <nav className="navbar sticky" style={{backgroundColor: isActive ? 'rgba(4, 6, 15, 1)' : 'rgba(4, 6, 15, 1)'}}>
        <Fade top>
            <a href="navLink" onClick={handleClick}><img className="favicon-header" src="./favicon.png"></img></a>
            <Sling toggled={isOpen} onToggle={toggled => {
              setOpen(!isOpen);
              }} rounded color="#fff" className="hamburger"/>
            {/*<Bars isOpen={isOpen} onClick={() => setOpen(!isOpen)} />*/}
            <div className="links">
              {links.map((link)=>{
                return <a className="navLink" href={link.url} key={link.id} onClick={handleClick} ref={React.createRef()}>{link.text}</a>
              })}
              <div><Sidebar isOpen={isOpen} setOpen={setOpen}/></div>
            </div>
          </Fade>
      </nav>
    )
}
