import React, { useState } from "react";

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: ''});

    const { name, email, message } = formState; 

    function handleChange(e) {
        const { name, value } = e.target; 
        setFormState({...formState, [name]: value});
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return(
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue = {name} onChange = {handleChange}/>
                </div>

                <div>
                    <label htmlFor="email">email:</label>
                    <input type="email" name="email" defaultValue = {email} onChange = {handleChange}/>
                </div>

                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue= {message} onChange = {handleChange}/>
                </div>

                <button type="submit" >Submit</button>
            </form>

        </section>
    );

}

export default ContactForm; 