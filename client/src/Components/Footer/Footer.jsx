import React from 'react';
// import './Footer.css'; // Make sure to import your CSS file

const Footer = () => {
    const generateLink = (category) => {
        return `/single-page?category=${encodeURIComponent(category)}`;
    }
    return (
        <>
            {/* Footer Start */}
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h3 className="title">Get in Touch</h3>
                                <div className="contact-info">
                                    <p><i className="fa fa-map-marker"></i>1/368-A, Ground Floor, Shri Ram Nagar, Shahdara, Delhi-110032</p>
                                    <p><i className="fa fa-envelope"></i>
                                        info@aamawaz.com</p>
                                    <p><i className="fa fa-phone"></i>9910150906</p>
                                    <div className="social">
                                        <a href=""><i className="fab fa-twitter"></i></a>
                                        <a href=""><i className="fab fa-facebook-f"></i></a>
                                        <a href=""><i className="fab fa-linkedin-in"></i></a>
                                        <a href=""><i className="fab fa-instagram"></i></a>
                                        <a href=""><i className="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h3 className="title">Useful Links</h3>
                                <ul className=''>
                                    <li>
                                        <a href={generateLink('घर')} className='text-white'>होम</a>
                                    </li>
                                    <li>
                                        <a href={generateLink('देश')} className='text-white'>देश</a>
                                    </li>
                                    <li>
                                        <a href={generateLink('विदेश')} className='text-white'>विदेश</a>
                                    </li>
                                    <li>
                                        <a href={generateLink('राजनीति')} className='text-white'>राजनीति</a>
                                    </li>
                                    <li>
                                        <a href={generateLink('अपराध')} className='text-white'>अपराध</a>
                                    </li>
                                    <li>
                                        <a href={generateLink('मनोरंजन')} className='text-white'>मनोरंजन</a>
                                    </li>
                                    <li>
                                        <a href={generateLink('खेल')} className='text-white'>खेल</a>
                                    </li>
                                </ul>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h3 className="title">Quick Links</h3>
                                <ul className=''>
                                    <li>
                                        <a href={generateLink('स्वास्थ्य')} className='text-white'>स्वास्थ्य</a>
                                    </li>
                                    <li>
                                        <a href={generateLink('तकनिकी')} className='text-white'>तकनिकी</a>
                                    </li>
                                    <li>
                                        <a href={generateLink('व्यापर')} className='text-white'>व्यापर</a>
                                    </li>
                                    <li>
                                        <a href={generateLink('भ्रष्टाचार')} className='text-white'>भ्रष्टाचार</a>
                                    </li>
                                    <li>
                                        <a href={generateLink('दिल्ली-एनसीआर')} className='text-white'>दिल्ली/एनसीआर</a>
                                    </li>
                                    <li>
                                        <a href={generateLink('वीडियो')} className='text-white'>वीडियो</a>
                                    </li>
                                </ul>

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                            <h3 className="title">Policies Links</h3>
<ul className=''>

    <li>
        <a href='/term-condition' className='text-white'>Terms And Conditions</a>
    </li>
    <li>
        <a  href='/privacy-policy' className='text-white'>Privacy Policy</a>
    </li>
</ul>


                            </div>
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
                            <p>Copyright &copy; <a href="">AAM AWAZ</a>. All Rights Reserved</p>
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
