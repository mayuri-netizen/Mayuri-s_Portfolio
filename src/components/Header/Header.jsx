import React, { useState } from 'react';
import './Header.css';

// SVG Icons
const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
);

const socialIcons = {
    linkedin: <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
    resume: <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><title>Resume</title><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
};

const ThemeToggle = ({ theme, toggleTheme }) => (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        <div className={`icon-container ${theme === 'dark' ? 'active' : ''}`}><SunIcon /></div>
        <div className={`icon-container ${theme === 'light' ? 'active' : ''}`}><MoonIcon /></div>
    </button>
);

const Header = ({ theme, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="header">
            <nav className="navbar">
                <div className="nav-logo">
                    <a href="#hero">
                        <img src="/favicon.jpg" alt="Logo" className="logo-image" />
                    </a>
                </div>
                <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li className="nav-item"><a href="#skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
                    <li className="nav-item"><a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
                    <li className="nav-item"><a href="#experience" className="nav-link" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
                    <li className="nav-item"><a href="#certifications" className="nav-link" onClick={() => setIsMenuOpen(false)}>Certifications</a></li>
                    <li className="nav-item"><a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                    <li className="nav-item"><ThemeToggle theme={theme} toggleTheme={toggleTheme} /></li>
                    <li className="mobile-social-links">
                        <a href="https://www.linkedin.com/in/mayurikhadse55/" target="_blank" rel="noopener noreferrer">{socialIcons.linkedin}</a>
                        <a href="https://drive.google.com/file/d/1DtL6pRAXzisDdsoT1SiKV6o1le82Tk2k/view?usp=drive_link" target="_blank" rel="noopener noreferrer">{socialIcons.resume}</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
