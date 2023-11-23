import React, { useState } from 'react';
import RightSideInfo from '../Info/RightSideInfo';
import './ContactUs.css';

const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState([]);
    const [messageSent, setMessageSent] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailData = {
            name,
            subject: 'Service inquiry',
            email,
            message
        }
        let response;
        let responseBodyText;
        try {
            response = await fetch('https://formspree.io/f/xzbllppo', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(emailData),
            });

            if (response.ok) {
              const data = await response.json();
              setMessageSent(true)
              setName("")
              setEmail("")
              setMessage("")
              setTimeout(() => setMessageSent(false), 7000)
            } else {
              responseBodyText = await response.json();
              const errorData = await response.json();
            }
        } catch (error) {
        setErrors([responseBodyText.error]);
        }

    };
    
    const handleUpdateName = (e) => {
        e.preventDefault();
        setName(e.target.value);
    };
    
    const handleUpdateEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    };
    
    const handleUpdateMessage = (e) => {
        e.preventDefault();
        setMessage(e.target.value);
    };



    return (
        <div className="contact-us-form-container-div">
            <div className='home-page-left-side'>

                <div className="contact-us-form-inner-div">
                    {messageSent === true && (
                        <div className="success" id="success">
                            <div className="alert alert-success">
                                <button onClick={() => setMessageSent(false)} type="button" className="close" data-dismiss="alert" aria-hidden="true">
                                    &times;
                                </button>
                                <strong>Your message has been sent. </strong>
                            </div>
                        </div>
                    )}
                    {!messageSent && errors.length > 0 && (
                        <div className="failure" id="failure">
                            <div className="alert alert-danger">
                                <button onClick={() => setMessageSent(false)} type="button" className="close" data-dismiss="alert" aria-hidden="true">
                                &times;
                                </button>
                                <strong>{`Sorry ${name}, it seems that our mail server is not responding. Please try again later!`}</strong>
                            </div>
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="contact-us-form">
                        <fieldset className="contact-us-fieldset">
                            <h2 className="contact-us-top-h2">Get In Touch!</h2>
                            <div className="contact-us-form-entry-field-div">
                                <legend>Name</legend>
                                <input className="email-form-input" type="text" placeholder="Your Name" name="name" onChange={handleUpdateName} value={name} />
                            </div>
                            <div className="contact-us-form-entry-field-div">
                                <legend>Email</legend>
                                <input className="email-form-input" type="email" placeholder="Your Email" name="email" onChange={handleUpdateEmail} value={email} />
                            </div>
                            <div className="contact-us-form-entry-field-div">
                                <legend>Message</legend>
                                <textarea className="email-form-input" type="txtArea" rows="20" cols="70" placeholder="Your Message" name="message" onChange={handleUpdateMessage} value={message} >

                                </textarea>
                            </div >
                            <div className="submit-buttom-div">
                                <input className="large-log-inbutton" type="submit" value="Send Email"/>
                            </div>
                        </fieldset >
                    </form>
                    <div>
                        {/* {< EmailMessage />} */}
                    </div>
                    <div className="contact-us-bottom-div">
                        <h5 > When it comes to problems with your vehicle, Bimmers Performance has the solution!</h5>
                    </div>
                </div>
            </div>
            <div className='home-page-right-side'>
                <RightSideInfo/>
            </div>
        </div>
    )
}

export default ContactUs
