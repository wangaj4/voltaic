import './main.css';

import React, {useState, useEffect, Fragment} from 'react';

import './Email.css';

function Email(){


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState(''); // Added for status message


    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const email = event.target.elements.email.value;
        const message = event.target.elements.message.value;
      
        const data = { name, email, message }; // Convert to JSON for sending
      
        try {
            const response = await fetch('/email-sending', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
      
            if (!response.ok) {
                throw new Error(`Error sending email: ${response.statusText}`);
            }else{
                console.log("all good");
            }
      
        } catch (error) {
            console.error('Error:', error);
        }
      };

    return (
        <form onSubmit={handleFormSubmit} id = "emailForm">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />

            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label htmlFor="message">Message</label>
            <textarea type = "text" id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />

            <button type="submit">Send Email</button>

            {status && <p className={status.includes('success') ? 'success' : 'error'}>{status}</p>}
        </form>
    );
}

export default Email;