import React from 'react'
import useDarkMode from '../hooks/useDarkMode'

const Header = () => {
    const [darkMode, setDarkMode] = useDarkMode(false)

    const toggleDark = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }

    return (
        <div className='header'>
            <h1>Women's World Cup Players</h1>
            <button onClick={toggleDark}>Toggle Dark Mode</button>
            <p className='colorSchemeText'>Color scheme: 
                <span className={`${darkMode ? 'hidden' : ''}`}> Goldenrod</span>
                <span className={`${darkMode ? '' : 'hidden'}`}> Deep Space</span>
            </p>
        </div>
    );
}

export default Header;