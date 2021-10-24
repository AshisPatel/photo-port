import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    const [errMsg, setErrMsg] = useState('');

    const { name, email, message } = formState; 

    function handleChange(e) {
        const { name, value } = e.target; 

        if(name === 'email') {
            const isValid = validateEmail(value);
            
            if(!isValid) {
                setErrMsg('Your email is invalid.');
            } else {
                setErrMsg('');
            } 

        } else {
            if(!value.length) {
                setErrMsg(`${name} is required.`);
            } else {
                setErrMsg('');
            }
        }

        if(!errMsg) {
            setFormState({...formState, [name]: value});
        }
        
    }

    function handleSubmit(e) {
        e.preventDefault();
        // instantiate a a check on errMsg if prior to making the request
    }

    return(
        <section>
            <h1 data-testid="h1">Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue = {name} onBlur = {handleChange}/>
                </div>

                <div>
                    <label htmlFor="email">email:</label>
                    <input type="email" name="email" defaultValue = {email} onBlur = {handleChange}/>
                </div>

                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue= {message} onBlur = {handleChange}/>
                </div>

                {errMsg && (
                    <div>
                        <p className="error-text">{errMsg}</p>
                    </div>
                )}

                <button type="submit" data-testid="submitBtn">Submit</button>
            </form>

        </section>
    );

}

export default ContactForm; 