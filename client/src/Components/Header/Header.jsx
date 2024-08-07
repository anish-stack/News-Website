import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Aam awaz logo 1.png'
import './Hearder.css'
import { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';
const Header = () => {
  const [isMobActive, setIsMobActive] = useState(false)
  const generateLink = (category) => {
    return `/single-page?category=${encodeURIComponent(category)}`;
  }
  const handleIsMobActive = () => {
    setIsMobActive(!isMobActive)
  }
  const handleIsMobDeActive = () => {
    setIsMobActive(false)
  }
  const [headlines, setHeadlines] = useState([]);

  const fetchHeadlines = async () => {
    try {
      const response = await axios.get('https://www.api.aamawaz.com/api/news/headlines');
      setHeadlines(response.data.headlines);

    } catch (error) {
      console.error('Error fetching headlines:', error);
    }
  };
  useEffect(() => {
    fetchHeadlines()
  }, [])

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update the time every second

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  // Format the time as HH:MM AM/PM
  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });


  return (

    <header className='header-section'>
      {/* header  */}
      <div className='top-header'>
        <div className='pages'>
          <ul className='d-flex '>
            <li><Link to={'/contact'}>Contact us</Link></li>
            <li><Link to={'/About'}>About</Link></li>
            <li><Link to={'/privacy-policy'}>Privacy Policy</Link></li>
            <li><Link to={'/Disclaimer'}>Disclaimer</Link></li>
            <li><Link to={'/term-condition'}>Terms & Conditions</Link></li>


          </ul>
          <ul className="social-links d-flex">
            <li>            <a href="https://www.facebook.com/aamawaz.india"><i class="ri-facebook-box-fill"></i></a>
            </li>
            <li>            <a href="https://www.instagram.com/aam_awaz/"><i class="ri-instagram-fill"></i></a>
            </li>
            <li>            <a href="https://www.youtube.com/@aamawaz9265"><i class="ri-youtube-fill"></i></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/aam-awaz-14234a8a"><i class="ri-linkedin-fill"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="headlines-container">
        <div className="date-box">
        <h2>{formattedTime}</h2>
        </div>
        <div className="headlines-marquee">
          {headlines.map((item, index) => (
            <div className="headlines-item" key={index}>
              {item.headlineText}
            </div>
          ))}
        </div>
      </div>
      <div className="header-container">
        <div className="top">
          <div className="contact-detail">
            <a href="tel:+91 9910150906"><i class="ri-phone-fill"></i> 9910150906</a>
          </div>
          <Link to={'/'} className="logo" onClick={handleIsMobDeActive}>
            <img src={logo} alt="" />
          </Link>
          <div className="social-link">
            <a href="https://www.facebook.com/aamawaz.india"><i class="ri-facebook-box-fill"></i></a>
            <a href="https://www.instagram.com/aam_awaz/"><i class="ri-instagram-fill"></i></a>
            <a href="https://www.youtube.com/@aamawaz9265"><i class="ri-youtube-fill"></i></a>
            <a href="https://www.linkedin.com/in/aam-awaz-14234a8a"><i class="ri-linkedin-fill"></i></a>


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
