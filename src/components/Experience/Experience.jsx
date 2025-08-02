import React from 'react';
import './Experience.css';

const experienceData = [
    {
        role: "Software Engineer",
        company: "MITR Learning & Media",
        date: "July 2023 - June 2025",
        points: [
            "Developed and maintained scalable, responsive web applications using React, ensuring high-quality user experiences.",
            "Built and integrated RESTful APIs, managed database interactions, and implemented end-to-end application features.",
            "Acted as a short-term lead, guiding junior developers and managing client communications to ensure timely delivery.",
            "Collaborated with cross-functional teams, conducted code reviews, and utilized Jira for bug tracking and project management."
        ]
    },
    {
        role: "Full Stack Web Development Intern",
        company: "SOLAR SECURE SOLUTIONS",
        date: "Feb 2023 - May 2023",
        points: [
            "Gained hands-on experience in full-stack development, contributing to both frontend and backend tasks.",
            "Assisted in the development of new features and bug fixing on a live client project.",
            "Learned to work within an agile development environment and use version control systems like Git."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="experience">
            <h2>Where I've Worked</h2>
            {experienceData.map((job, i) => (
                <div key={job.company} className="experience-card" style={{ '--i': i }}>
                    <div className="experience-header">
                        <h3>{job.role} <span className="company">@ {job.company}</span></h3>
                        <p className="date">{job.date}</p>
                    </div>
                    <ul>
                        {job.points.map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                </div>
            ))}
        </section>
    );
};

export default Experience;
