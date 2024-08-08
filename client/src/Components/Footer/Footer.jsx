import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import './Footer.css'; // Make sure to import your CSS file

const Footer = () => {
    const generateLink = (category) => {
        return `/single-page?category=${encodeURIComponent(category)}`;
    }
    const [visitCount, setVisitCount] = useState(0);

    useEffect(() => {
        const fetchVisitCount = async () => {
            try {
                const response = await axios.get('https://www.api.aamawaz.com/api/visit-count');
                setVisitCount(response.data.count);
            } catch (error) {
                console.error('Error fetching visit count:', error);
            }
        };

        fetchVisitCount();
    }, []);

    return (
        <>
            {/* Footer Start */}
            <div className="footer bg-dark text-white py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <div className="footer-widget">
                                <h3 className="title text-uppercase font-weight-bold mb-4">Get in Touch</h3>
                                <div className="contact-info">
                                    <p><i className="fas fa-map-marker-alt mr-2"></i>Registered Office: 1/368-A, Ground Floor, Shri Ram Nagar, Shahdara, Delhi-110032</p>
                                    <p><i className="fas fa-envelope mr-2"></i><a href="mailto:info@aamawaz.com" className="text-white">info@aamawaz.com</a></p>
                                    <p><i className="fas fa-phone mr-2"></i><a href="tel:9910150906" className="text-white">9910150906</a></p>
                                    <div className="social mt-3">
                                        <a target="_blank" href="https://www.facebook.com/aamawaz.india" className="text-white mr-3"><i className="fab fa-facebook-f"></i></a>
                                        <a target="_blank" href="https://www.linkedin.com/in/aam-awaz-14234a8a" className="text-white mr-3"><i className="fab fa-linkedin-in"></i></a>
                                        <a target="_blank" href="https://www.instagram.com/aam_awaz/" className="text-white mr-3"><i className="fab fa-instagram"></i></a>
                                        <a target="_blank" href="https://www.youtube.com/@aamawaz9265" className="text-white"><i className="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Useful Links Section --> */}
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <div className="footer-widget">
                                <h3 className="title text-uppercase font-weight-bold mb-4">Useful Links</h3>
                                <ul className="list-unstyled">
                                    <li><a href={generateLink('घर')} className="text-white d-block mb-2">होम</a></li>
                                    <li><a href={generateLink('देश')} className="text-white d-block mb-2">देश</a></li>
                                    <li><a href={generateLink('विदेश')} className="text-white d-block mb-2">विदेश</a></li>
                                    <li><a href={generateLink('राजनीति')} className="text-white d-block mb-2">राजनीति</a></li>
                                    <li><a href={generateLink('अपराध')} className="text-white d-block mb-2">अपराध</a></li>
                                    <li><a href={generateLink('मनोरंजन')} className="text-white d-block mb-2">मनोरंजन</a></li>
                                    <li><a href={generateLink('खेल')} className="text-white d-block">खेल</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* <!-- Quick Links Section --> */}
                        <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                            <div className="footer-widget">
                                <h3 className="title text-uppercase font-weight-bold mb-4">Quick Links</h3>
                                <ul className="list-unstyled">
                                    <li><a href={generateLink('स्वास्थ्य')} className="text-white d-block mb-2">स्वास्थ्य</a></li>
                                    <li><a href={generateLink('तकनिकी')} className="text-white d-block mb-2">तकनिकी</a></li>
                                    <li><a href={generateLink('व्यापर')} className="text-white d-block mb-2">व्यापर</a></li>
                                    <li><a href={generateLink('भ्रष्टाचार')} className="text-white d-block mb-2">भ्रष्टाचार</a></li>
                                    <li><a href={generateLink('दिल्ली-एनसीआर')} className="text-white d-block mb-2">दिल्ली/एनसीआर</a></li>
                                    <li><a href={generateLink('वीडियो')} className="text-white d-block">वीडियो</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* <!-- Policies Links Section --> */}
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h3 className="title text-uppercase font-weight-bold mb-4">Policies Links</h3>
                                <ul className="list-unstyled">
                                    <li><Link to={'/contact'} className="text-white d-block mb-2">Contact us</Link></li>
                                    <li><Link to={'/About'} className="text-white d-block mb-2">About</Link></li>
                                    <li><Link to={'/privacy-policy'} className="text-white d-block mb-2">Privacy Policy</Link></li>
                                    <li><Link to={'/Disclaimer'} className="text-white d-block mb-2">Disclaimer</Link></li>
                                    <li><Link to={'/term-condition'} className="text-white d-block">Terms & Conditions</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Visitor Count --> */}
                    <div className="row mt-4">
                        <div className="col-12 text-end">
                            <p className="mb-0 text-white">You are visitor number: {visitCount}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer End */}

            {/* Footer Menu Start */}

            {/* Footer Menu End */}

            {/* Footer Bottom Start */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 copyright">
                            <p>Copyright &copy; 2024<a href=""> AAM AWAZ </a>All Rights Reserved.</p>
                        </div>

                        <div className="col-md-6 template-by">
                            <p>Designed as per Guidelines of Ministry of Information and Broadcasting</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Bottom End */}
        </>
    );
};

export default Footer;
