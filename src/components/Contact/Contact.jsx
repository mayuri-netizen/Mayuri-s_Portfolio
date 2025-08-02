import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <p className="subtitle">What's Next?</p>
            <h2>Get In Touch</h2>
            <p className="contact-text">
                I'm currently open to new opportunities and my inbox is always open.
                Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </p>
            <a href="mailto:khadsemayuri9@gmail.com" className="btn">Say Hello</a>
        </section>
    );
};

export default Contact;
