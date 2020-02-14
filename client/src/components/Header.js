import React from 'react'
import useDarkMode from '../hooks/useDarkMode'

const Header = () => {
    const [darkMode, setDarkMode] = useDarkMode(false)

    const toggleDark = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    }

    return (
        <div>
            <h1>Women's World Cup Players</h1>
            <button onClick={toggleDark}>Toggle Dark Mode</button>
        </div>
    );
}

export default Header;