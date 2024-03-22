import './main.css';

import React, {useState, useEffect, Fragment} from 'react';

import Email from './Email';

function Contact(){

    useEffect(()=>{
        window.scrollTo({
            top:0,
            behavior: "instant"
        });
        setTimeout(()=>{
            document.getElementsByClassName("encompass")[0].classList.remove("fade");
        },200);
    },[])

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
        <div className={"encompass fade"}>
            <div className={"titleBanner2"}>
                <div className={"bannerTitle"} data-aos = "fade-up" data-aos-duration="800">
                    Contact Us
                </div>
            </div>
            <div className={"centerSubheader"}>Questions? Business inquiries? Use the form to get in touch.</div>
            <div className='spacer'/>
            <Email/>
            <div className='spacer2'/>
        </div>
    );
}

export default Contact;