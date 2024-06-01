import './main.css';

import React, {useState, useEffect, Fragment} from 'react';


import './Email.css';

var AWS = require("aws-sdk");

function Email(){

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;
        
        console.log(name);
        console.log(email);
        console.log(message);
        
        // try {
        //     const response = await fetch("YOUR_API_ENDPOINT", {
        //       method: "POST",
        //       headers: {
        //         "Content-Type": "application/json",
        //       },
        //       body: JSON.stringify({
        //         name: name,
        //         email: email,
        //         message: message,
        //       }),
        //     });
      
        //     if (response.ok) {
        //       // Handle success
        //       console.log("Email sent successfully");
        //     } else {
        //       // Handle error
        //       console.error("Failed to send email");
        //     }
        //   } catch (error) {
        //     console.error("Error sending email:", error);
        //   }

      };

    return (
        <form action = "https://formspree.io/f/mjvnejrl" id = "emailForm" method = "POST">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Send Email</button>

        </form>
    );
}

export default Email;