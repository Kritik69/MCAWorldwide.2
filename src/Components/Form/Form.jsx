import './Form.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Result = () =>{
    return(
        <p className='text-success'>Your message has been successfully sent.</p>
    );
};

function Form() {
    const form = useRef();
    const [result, showResult] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_of9u14s', 'template_zrlx627', form.current, 'CwMNLLMmjhaPw4FnB')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        showResult(true);
    }; 
    setInterval(() => {
        showResult(false);
    }, 5000);
    
  return (
    <div className="container pb-5">
        <h2><b>CONTACT US</b></h2>
        <div className="parent">
            <div className="row">
                <div className="col-md-6">
                    <form className='inputParent' ref={form} onSubmit={sendEmail}>
                        <label className='fs-5'>Name</label>
                        <input type="text" className='nameInput fs-6 form-control' name='user_name' />

                        <label className='fs-5'>Email</label>
                        <input type="email" name='user_email' className="form-control fs-6 emailInput" />

                        <label className='fs-5'>Comment or Message</label>
                        <textarea name="message" rows="4" className='form-control fs-6 messageInput'/>
                        <input
                            type='submit'
                            value='Send'
                            className='form-control btn submit-btn fs-4'
                            style={{ marginTop: "30px" }}
                            />
                        <div className="row mt-3">
                            {result ? <Result/> : null}
                        </div>
                    </form>
                </div>
                <div className="col-md-6">
                    <div className='map'>
                        <iframe title='unique' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7242789610837!2d72.84168311437745!3d19.119748055565577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9fb823743e1%3A0xa197c2ba10d61be7!2sMusic%2C%20Culture%20%26%20Arts%20(%20MCA%20Worldwide)!5e0!3m2!1sen!2sin!4v1657017808512!5m2!1sen!2sin" width="100%" height="400" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Form;