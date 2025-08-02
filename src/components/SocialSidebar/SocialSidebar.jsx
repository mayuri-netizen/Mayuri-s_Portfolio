import React from 'react';
import './SocialSidebar.css';

// SVG Icons
const icons = {
    linkedin: <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
    resume: <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><title>Resume</title><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
};

const SocialSidebar = () => {
    return (
        <aside className="social-sidebar">
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/mayurikhadse55/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        {icons.linkedin}
                    </a>
                </li>
                <li>
                    <a href="https://drive.google.com/file/d/1DtL6pRAXzisDdsoT1SiKV6o1le82Tk2k/view?usp=drive_link" target="_blank" rel="noopener noreferrer" aria-label="Resume">
                        {icons.resume}
                    </a>
                </li>
            </ul>
        </aside>
    );
};

export default SocialSidebar;
