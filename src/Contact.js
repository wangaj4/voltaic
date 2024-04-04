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