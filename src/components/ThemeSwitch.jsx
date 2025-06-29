import React from "react";
import { useEffect, useState } from "react";
import './ThemeSwitch.css';
import sunIcon from '../assets/icon-moon.svg';
import moonIcon from '../assets/icon-sun.svg'

export default function ThemeSwitch() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

    }

    return (
        <button onClick={toggleTheme} className='theme-switch'>
            <span>{theme === 'light' ? 'DARK' : 'LIGHT'}</span>
            <img src={theme === 'light' ? sunIcon : moonIcon}
                alt="Theme icons" />
        </button>
    )
}
