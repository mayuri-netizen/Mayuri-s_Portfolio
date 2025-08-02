import React from 'react';
import './Projects.css';

// SVG Icons for links
const icons = {
    github: <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>,
    external: <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><title>External Link</title><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>,
};

const projectsData = [
    {
        type: "Personal",
        title: "Portfolio Website",
        description: "This personal portfolio, built from scratch with React and Vite. Features a modern, responsive design with a theme toggle and elegant animations.",
        tags: ["React", "Vite", "CSS", "Responsive Design"],
        sourceCode: "https://github.com/mayuri-netizen/Mayuri-s_Portfolio",
        livePreview: "https://mayuri-s-portfolio.vercel.app/"
    },
    {
        type: "Personal",
        title: "Dev-Connect App",
        description: "A social networking platform for developers. Features user profiles, posts, comments, and real-time chat functionality using MERN stack technologies.",
        tags: ["MongoDB", "Express", "React", "Node.js"],
        sourceCode: "https://github.com/mayuri-netizen/DevConnect",
        livePreview: "https://dev-connect-self.vercel.app/"
    },
    {
        type: "Company",
        title: "Gaming Web Application",
        description: "A browser-based interactive gaming web application, designed to be accessible and responsive. Managed complete frontend development for six themed games.",
        tags: ["React", "JavaScript", "CSS", "ARIA"]
    },
    {
        type: "Company",
        title: "Medical E-Learning Platform",
        description: "A multilingual web application delivering lessons for medical professionals. Built responsive pages and worked directly with international clients.",
        tags: ["HTML/CSS", "JavaScript", "Multilingual"]
    },
    {
        type: "Company",
        title: "Interactive Educational App",
        description: "Enhanced an existing web application to support higher-grade educational content. Developed new lessons, updated UI, and ensured full responsiveness.",
        tags: ["UI/UX", "Responsiveness", "Bug Fixing", "JIRA"],
    },
    {
        type: "Company",
        title: "Audio-Integrated Learning Platform",
        description: "An interactive platform for kindergarten students combining visual and auditory learning by integrating audio playback with synchronized text highlighting.",
        tags: ["JavaScript", "HTML5 Audio", "Animation"],
    },
    {
        type: "Company",
        title: "Custom Lesson Delivery Platform",
        description: "Web application development involving advanced UI customization and content integration. Acted as short-term lead, guiding junior developers.",
        tags: ["Leadership", "UI Customization", "Client Communication"],
    },
    {
        type: "Company",
        title: "Legacy Web App Maintenance",
        description: "Worked on a decade-old legacy application, adding full Thai and Vietnamese language support while managing version control and bug fixes.",
        tags: ["Legacy Code", "Localization", "SVN"],
    },
];

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2>Things I've Built</h2>
            <div className="projects-grid">
                {projectsData.map((project, i) => (
                    <div key={project.title} className="project-card" style={{ '--i': i }}>
                        <div className="project-content">
                            <p className="project-type">{project.type} Project</p>
                            <h3>{project.title}</h3>
                            <p className="description">{project.description}</p>
                            <div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                        </div>
                        <div className="project-links">
                            {project.sourceCode && <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" aria-label="GitHub Link">{icons.github}</a>}
                            {project.livePreview && <a href={project.livePreview} target="_blank" rel="noopener noreferrer" aria-label="Live Preview Link">{icons.external}</a>}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
