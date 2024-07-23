import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Aam awaz logo 1.png'
import './Hearder.css'
import { useState } from 'react';
const Header = () => {
  const [isMobActive,setIsMobActive] = useState(false)
  const generateLink = (category) => {
    return `/single-page?category=${encodeURIComponent(category)}`;
  }
  const handleIsMobActive = () => {
    setIsMobActive(!isMobActive)
  }
  const handleIsMobDeActive = () => {
    setIsMobActive(false)
  }
  return (

    <header className='header-section'>
      {/* header  */}
      <div className="header-container">
        <div className="top">
          <div className="contact-detail">
            <a href="tel:+91 9910150906"><i class="ri-phone-fill"></i> 9910150906</a>
          </div>
          <Link to={'/'} className="logo" onClick={handleIsMobDeActive}>
            <img src={logo} alt="" />
          </Link>
          <div className="social-link">
            <a href=""><i class="ri-facebook-box-fill"></i></a>
            <a href=""><i class="ri-instagram-fill"></i></a>
            <a href=""><i class="ri-twitter-x-fill"></i></a>
          </div>
          <div className="menu" onClick={handleIsMobActive}>
            <i class="ri-menu-line"></i>
          </div>
        </div>
        <div className={`bottom ${isMobActive ? 'mob' : ''}`}>

          <Link onClick={handleIsMobDeActive} to={'/'}>होम</Link>
          <Link onClick={handleIsMobDeActive} to={generateLink('देश')} >देश</Link>
          <Link onClick={handleIsMobDeActive} to={generateLink('विदेश')} >विदेश</Link>
          <Link onClick={handleIsMobDeActive} to={generateLink('राजनीति')} >राजनीति</Link>
          <Link onClick={handleIsMobDeActive} to={generateLink('अपराध')} >अपराध</Link>
          <Link onClick={handleIsMobDeActive} to={generateLink('मनोरंजन')} >मनोरंजन</Link>
          <Link onClick={handleIsMobDeActive} to={generateLink('खेल')} >खेल</Link>
          <Link onClick={handleIsMobDeActive} to={generateLink('स्वास्थ्य')} >स्वास्थ्य</Link>
          <Link onClick={handleIsMobDeActive} to={generateLink('तकनिकी')} >तकनिकी</Link>
          <Link onClick={handleIsMobDeActive} to={generateLink('व्यापर')} >व्यापर</Link>
          <Link onClick={handleIsMobDeActive} to={generateLink('भ्रष्टाचार')} >भ्रष्टाचार</Link>
          <Link onClick={handleIsMobDeActive} to={generateLink('दिल्ली-एनसीआर')} >दिल्ली/एनसीआर</Link>
          <Link onClick={handleIsMobDeActive} to={generateLink('वीडियो')} >वीडियो</Link>


        </div>
      </div>
    </header>
  )
}


export default Header;
