import React from 'react';
import './ContactForm.css'; // Custom CSS for styling

const ContactForm = () => {
    return (
        <div className="contact1">
            <div className="container contact1-container">
                <div className="contact1-pic js-tilt" data-tilt>
                    <img loading='lazy' src="https://colorlib.com/etc/cf/ContactFrom_v1/images/img-01.png" alt="IMG" />
                </div>
                <form className="contact1-form validate-form">
                    <span className="contact1-form-title">
                        Get in touch
                    </span>
                    <div className="form-group validate-input" data-validate="Name is required">
                        <input className="form-control input1" type="text" name="name" placeholder="Name" />
                        <span className="shadow-input1"></span>
                    </div>
                    <div className="form-group validate-input" data-validate="Valid email is required: ex@abc.xyz">
                        <input className="form-control input1" type="email" name="email" placeholder="Email" />
                        <span className="shadow-input1"></span>
                    </div>
                    <div className="form-group validate-input" data-validate="Subject is required">
                        <input className="form-control input1" type="text" name="subject" placeholder="Subject" />
                        <span className="shadow-input1"></span>
                    </div>
                    <div className="form-group validate-input" data-validate="Message is required">
                        <textarea className="form-control textarea h-100 input1" name="message" placeholder="Message"></textarea>
                        <span className="shadow-input1"></span>
                    </div>
                    <div className="container-contact1-form-btn mt-5">
                        <button className="btn contact1-form-btn">
                            <span>
                                Send Email <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
