import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Aam awaz logo 1.png'
const Header = () => {

  const generateLink = (category) => {
    return `/single-page?category=${encodeURIComponent(category)}`;
}
  return (
    <>
      {/* Top Bar Start */}
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="tb-contact">
                <p><i className="fas fa-envelope"></i>
                info@aamawaz.com </p>
                <p><i className="fas fa-phone-alt"></i>9910150906</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tb-menu">
                <a href="#">About</a>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="/Contact">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Top Bar End */}

      {/* Brand Start */}
      <div className="brand">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-4">
              <div className="b-logo">
                <a href="/">
                  <img src={logo} alt="Logo" />
                  {/* <h1 className='text-black fw-bold'>आम <span className='text-danger fw-bold'>आवाज़</span></h1> */}
                </a>
              </div>
            </div>
            <div className="col-lg-9 col-md-4">
              <div className="b-search">
                <input type="text" placeholder="Search" />
                <button><i className="fa fa-search"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Brand End */}

      {/* Nav Bar Start */}
      <div className="nav-bar">
        <div className="container">
          <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <a href="/" className="navbar-brand">                  <h1 className='text-black fw-bold'>आम <span className='text-danger fw-bold'>आवाज़</span></h1>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav w-100 d-flex justify-content-between mr-auto">
                <a href={generateLink('घर')} className="nav-item nav-link active">घर</a>
                <a href={generateLink('देश')} className="nav-item nav-link">देश</a>
                <a href={generateLink('विदेश')} className="nav-item nav-link">विदेश</a>
                <a href={generateLink('राजनीति')} className="nav-item nav-link">राजनीति</a>
                <a href={generateLink('अपराध')} className="nav-item nav-link">अपराध</a>
                <a href={generateLink('मनोरंजन')} className="nav-item nav-link">मनोरंजन</a>
                <a href={generateLink('खेल')} className="nav-item nav-link">खेल</a>
                <a href={generateLink('स्वास्थ्य')} className="nav-item nav-link">स्वास्थ्य</a>
                <a href={generateLink('तकनिकी')} className="nav-item nav-link">तकनिकी</a>
                <a href={generateLink('व्यापर')} className="nav-item nav-link">व्यापर</a>
                <a href={generateLink('भ्रष्टाचार')} className="nav-item nav-link">भ्रष्टाचार</a>
                <a href={generateLink('दिल्ली-एनसीआर')} className="nav-item nav-link">दिल्ली/एनसीआर</a>
                <a href={generateLink('वीडियो')} className="nav-item nav-link">वीडियो</a>
            </div>
        </div>
          </nav>
        </div>
      </div>
      {/* Nav Bar End */}
    </>
  );
};

export default Header;
