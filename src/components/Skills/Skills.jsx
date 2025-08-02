import React, { useState } from 'react';
import './Skills.css';

const skillsData = {
    "Frontend": ["HTML", "CSS", "JavaScript", "React", "jQuery", "Bootstrap"],
    "Backend": ["Node.js", "Express"],
    "Databases": ["MongoDB", "MySQL", "BigQuery", "Cloud SQL"],
    "Cloud/DevOps": ["GCP", "CI/CD", "Pub/Sub", "Cloud Functions"],
    "Tools": ["Git", "GitHub", "Jira", "SVN", "Python"]
};

const Skills = () => {
    const [activeTab, setActiveTab] = useState(Object.keys(skillsData)[0]);

    return (
        <section id="skills" className="skills">
            <h2>My Tech Stack</h2>
            <div className="skills-container">
                <div className="skills-tabs">
                    {Object.keys(skillsData).map(category => (
                        <div
                            key={category}
                            className={`skill-tab ${activeTab === category ? 'active' : ''}`}
                            onClick={() => setActiveTab(category)}
                        >
                            {category}
                        </div>
                    ))}
                </div>
                <div className="skills-content">
                    {skillsData[activeTab].map(skill => (
                        <div key={skill} className="skill-card">
                            <span className="skill-text">{skill}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
