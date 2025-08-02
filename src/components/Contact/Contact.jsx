import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [buttonText, setButtonText] = useState('Copy Email');

    const handleCopyEmail = () => {
        const email = 'khadsemayuri9@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
            setButtonText('Copied!');
            setTimeout(() => {
                setButtonText('Copy Email');
            }, 2000); // Reset text after 2 seconds
        }).catch(err => {
            console.error('Failed to copy email: ', err);
            setButtonText('Error!');
        });
    };

    return (
        <section id="contact" className="contact-section">
            <p className="subtitle">What's Next?</p>
            <h2>Get In Touch</h2>
            <p className="contact-text">
                My inbox is always open. Whether you have a question, a potential opportunity, or just want to say hi, I'll do my best to get back to you!
            </p>
            <div className="contact-buttons">
                <a href="mailto:khadsemayuri9@gmail.com" className="btn">Say Hello</a>
                <button onClick={handleCopyEmail} className="btn btn-secondary">
                    {buttonText}
                </button>
            </div>
        </section>
    );
};

export default Contact;
