import React from 'react';
// import './Footer.css'; // Make sure to import your CSS file

const Footer = () => {
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
                                    <p><i className="fa fa-map-marker"></i>123 News Street, NY, USA</p>
                                    <p><i className="fa fa-envelope"></i>info@example.com</p>
                                    <p><i className="fa fa-phone"></i>+123-456-7890</p>
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
                                <ul>
                                    <li><a href="#">Lorem ipsum</a></li>
                                    <li><a href="#">Pellentesque</a></li>
                                    <li><a href="#">Aenean vulputate</a></li>
                                    <li><a href="#">Vestibulum sit amet</a></li>
                                    <li><a href="#">Nam dignissim</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h3 className="title">Quick Links</h3>
                                <ul>
                                    <li><a href="">Lorem ipsum</a></li>
                                    <li><a href="">Pellentesque</a></li>
                                    <li><a href="">Aenean vulputate</a></li>
                                    <li><a href="">Vestibulum sit amet</a></li>
                                    <li><a href="">Nam dignissim</a></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-widget">
                                <h3 className="title">Newsletter</h3>
                                <div className="newsletter">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed porta dui. Class aptent taciti sociosqu
                                    </p>
                                    <form>
                                        <input className="form-control" type="email" placeholder="Your email here" />
                                        <button className="btn">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}
            
            {/* Footer Menu Start */}
            <div className="footer-menu">
                <div className="container">
                    <div className="f-menu">
                        <a href="#">Terms of use</a>
                        <a href="#">Privacy policy</a>
                        <a href="#">Cookies</a>
                        <a href="#">Accessibility help</a>
                        <a href="#">Advertise with us</a>
                        <a href="#">Contact us</a>
                    </div>
                </div>
            </div>
            {/* Footer Menu End */}

            {/* Footer Bottom Start */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 copyright">
                            <p>Copyright &copy; <a href="">News</a>. All Rights Reserved</p>
                        </div>

                        <div className="col-md-6 template-by">
                            <p>Designed By <a href="https://digital4now.in/">Digital4Now</a></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Bottom End */}
        </>
    );
};

export default Footer;
