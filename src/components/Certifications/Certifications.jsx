import React from 'react';
import './Certifications.css';

const certificationsData = [
    {
        name: "Associate Cloud Engineer",
        issuer: "Google Cloud",
        link: "https://www.credly.com/badges/e17193f5-2499-4b97-88c3-bc63597971f4/public_%20url",
        badge: "/ace.png"
    },
    {
        name: "Cloud Digital Leader",
        issuer: "Google Cloud",
        link: "https://www.credly.com/badges/5b4cdd96-ccab-44a0-a812-24d7b63b1ad9/public_%20url",
        badge: "/digital-leader.png"
    }
];

const Certifications = () => {
    return (
        <section id="certifications" className="certifications">
            <h2>Certifications</h2>
            <div className="certifications-grid">
                {certificationsData.map((cert, i) => (
                    <a href={cert.link} key={cert.name} className="cert-card" target="_blank" rel="noopener noreferrer" style={{ '--i': i }}>
                        <div className="cert-badge">
                            <img src={cert.badge} alt={`${cert.name} Badge`} />
                        </div>
                        <h4>{cert.name}</h4>
                        <p>{cert.issuer}</p>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
