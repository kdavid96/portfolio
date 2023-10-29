import './Navbar.css';

import React from 'react';

const ToggleButton = ({isDark, setDark}) => {
    const setTheme = () => {
        setDark(!isDark);
    }
    return(
        <div onClick={setTheme} className="wrg-toggle">
            <div onClick={setTheme} className="wrg-toggle-container" style={{backgroundColor: isDark ? "#4d4d4d" : "yellow"}}>
                <div onClick={setTheme} className="wrg-toggle-check" style={{opacity: isDark ? 1 : 0}}>
                    <span>🌜</span>
                </div>
                <div onClick={setTheme} className="wrg-toggle-uncheck" style={{opacity: !isDark ? 1 : 0}}>
                    <span>🌞</span>
                </div>
            </div>
            <div className="wrg-toggle-circle" style={{left: isDark ? '26px' : '1px'}}></div>
            <input className="wrg-toggle-input" type="checkbox" aria-label="Toggle Button" />
        </div>
    )
}

export default ToggleButton;