import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      {/* Top Bar Start */}
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="tb-contact">
                <p><i className="fas fa-envelope"></i>info@mail.com</p>
                <p><i className="fas fa-phone-alt"></i>+012 345 6789</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="tb-menu">
                <a href="#">About</a>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Contact</a>
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
                <a href="index.html">
                  {/* <img src={logo} alt="Logo" /> */}
                  <h1>Logo</h1>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
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
            <a href="#" className="navbar-brand">MENU</a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              <div className="navbar-nav w-100 d-flex justify-content-between mr-auto">
                <Link to={'/'} className="nav-item nav-link active">घर</Link>
                <Link to={'/single-page'} className="nav-item nav-link">देश</Link>
                <Link to={'/single-page'} className="nav-item nav-link">विदेश</Link>
                <Link to={'/single-page'} className="nav-item nav-link">राजनीति</Link>
                <Link to={'/single-page'} className="nav-item nav-link">अपराध</Link>
                <Link to={'/single-page'} className="nav-item nav-link">मनोरंजन</Link>
                <Link to={'/single-page'} className="nav-item nav-link">खेल</Link>
                <Link to={'/single-page'} className="nav-item nav-link">स्वास्थ्य</Link>
                <Link to={'/single-page'} className="nav-item nav-link">तकनिकी</Link>
                <Link to={'/single-page'} className="nav-item nav-link">व्यापर</Link>
                <Link to={'/single-page'} className="nav-item nav-link">भ्रष्टाचार</Link>
                <Link to={'/single-page'} className="nav-item nav-link">सच का आईना</Link>
                <Link to={'/single-page'} className="nav-item nav-link">वीडियो</Link>
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
