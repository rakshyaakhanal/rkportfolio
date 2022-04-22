import React, { useRef, useState, useContext } from 'react';
import { ThemeContext } from '../context';
import Phone from '../Images/phone.png';
import Email from '../Images/email.png';
import Address from '../Images/address.png';
import emailjs from '@emailjs/browser';
import './Contact.css';


const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);  

    const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode; 

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zqx5s99', 'template_mbwk2sq', formRef.current, 'user_cvg4vQXtxMpqn263QaViE')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className='contact'>
            <div className='contact-bg'></div>
            <div className='contact-wrapper'>
                <div className='contact-left'>
                    <h1 className='contact-title'>Let's discuss your project</h1>

                    <div className='contact-info'>
                        <div className='contact-info-item'>
                            <img src={Phone} alt='' className='contact-icon' />
                            +1 234 5678 90
                        </div>

                        <div className='contact-info-item'>
                            <img src={Email} alt='' className='contact-icon' />
                            contact@rakshya.khanal
                        </div>

                        <div className='contact-info-item'>
                            <img src={Address} alt='' className='contact-icon' />
                            New York || USA
                        </div>
                    </div>

                </div>

                <div className='contact-right'>
                    <p className='contact-description'>
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && '#333' }} type='text' placeholder='Name' name='user_name' />
                        <input style={{backgroundColor: darkMode && '#333' }} type='text' placeholder='Subject' name='user_subject' />
                        <input style={{backgroundColor: darkMode && '#333' }} type='text' placeholder='Email' name='user_email' />
                        <textarea style={{backgroundColor: darkMode && '#333' }} placeholder='Message' name='message' rows='5' />
                        <button>Submit</button>
                        {done && 'Thank you.....'}
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact;
    