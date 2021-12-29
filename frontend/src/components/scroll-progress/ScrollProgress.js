import React, { useState, useEffect } from 'react';
import '../style.css';

export function ScrollProgress() {
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () =>{
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 100;
        console.log(scrolled);
        setScrollTop(scrolled);
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll);
    })

    return (
        <div className="progressMainWrapper">
            <div className="progressMainStyle" style={{width: `${scrollTop}%`}}></div>
        </div>
    )
}
