import React from 'react';
import './Hero.css';

// Impactful Name Animation Component
const ImpactfulNameAnimation = ({ text }) => {
    return (
        <h1 className="name">
            {text.split("").map((char, index) => (
                <span
                    key={index}
                    style={{ animationDelay: `${index * 0.05}s` }}
                >
                    {char === " " ? "\u00A0" : char}
                </span>
            ))}
        </h1>
    );
};

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <p className="intro">Hi, my name is</p>
                <ImpactfulNameAnimation text="Mayuri Khadse" />
                <h2 className="role">MERN Stack Developer</h2>
                <p className="summary">
                    I build things for the web. A passionate software engineer with 2 years of hands-on experience in Full-stack Web Development and cloud technologies.
                </p>
                <a href="#contact" className="btn">Get In Touch</a>
            </div>
        </section>
    );
};

export default Hero;
