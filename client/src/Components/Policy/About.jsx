import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AboutUs.css'; // Import custom CSS file
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const [news, setNews] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const fetchNews = async () => {
    try {
      const response = await axios.get('https://www.api.aamawaz.com/api/news');
      const data = response.data;
      const filterSlideData = data.filter((item) => item.ShowAtLatestNews === true);
      setNews(filterSlideData);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {/* About Us Section */}
        <div className="col-lg-8 about-us-container">
          <div className="text-center mb-4">
            <img src="https://i.ibb.co/4jMB0SG/image.png" alt="Logo" className="logo-img mb-3" />
            <h1 className="display-4">About Us ( हमारे बारे में) </h1>
          </div>

          <div className="about-us-content bg-light p-4 rounded shadow">
            <p>
            आम आवाज़ में आपका स्वागत है। आम आवाज़ की शुरुआत 2013 में साप्ताहिक हिन्दी/उर्दू समाचार पत्र के रूप में हुई थी जो राजधानी दिल्ली से प्रकाशित होता है। जब पाठको ने आम आवाज़ साप्ताहिक समाचार पत्र में अपनी रुचि दिखाई तो आम आवाज़ द्वारा आम आवाज़ टाइम्स हिंदी दैनिक समाचार पत्र भी 2016 में शुरू किया गया।
            </p>
            <p>
            आज देश में आम आवाज़ पाठको की संख्या में लगातार बढ़ोतरी देखकर हमारा भी मनोबल बढ़ा है और हम लगातार यही प्रयास करते है कि आम आवाज़ आपको बेहतर ख़बर और हर ज़रूरी अपडेट्स के लिए आपका प्रमुख गंतव्य बने। हिंदी दैनिक समाचार वेबसाइट के रूप में हम अपने पाठकों को वर्तमान घटनाओं का सबसे व्यापक और अद्यतित कवरेज प्रदान करने के लिए समर्पित हैं। चाहे आप नवीनतम सुर्खियों, गहन विश्लेषण या ब्रेकिंग न्यूज़ की तलाश कर रहे हो आम आवाज़ आपका पसंदीदा स्रोत है। 
            </p>
            <p>
            हमारा मिशन आपको नवीनतम हिंदी समाचारों से अवगत कराना है, ताकि आप दुनिया भर से समय पर अपडेट प्राप्त कर सकें। हम राजनीति, व्यापार, प्रौद्योगिकी, मनोरंजन, खेल और कई विषयों को कवर करते हैं। अनुभवी पत्रकारों और संपादकों की टीम आपके लिए सटीक और व्यावहारिक समाचार देने के लिए अथक प्रयास करती है। आम आवाज़ में हम सभी समाचारों पर बहुत ज़ोर देते हैं और यह सुनिश्चित करते हुए कि हमारे पाठको की देश को आकार देने वाले नवीनतम विकास और निर्णयों तक पहुँच हो। हम सरकारी नीतियों और कार्यों के बारे में सूचित रहने के महत्व को समझते हैं और हम इन महत्वपूर्ण मुद्दों पर स्पष्ट और विस्तृत रिपोर्ट प्रदान करने का प्रयास करते हैं। हम एक विश्वसनीय दैनिक हिंदी समाचार वेबसाइट के रूप में पत्रकारिता की अखंडता और उत्कृष्टता के लिए प्रतिबद्ध हैं।
            </p>
            <p>
            हमारा लक्ष्य विश्वसनीय और संतुलित समाचार कवरेज प्रदान करना है जिस पर आप भरोसा कर सकें। हम सूचना की शक्ति और सभी सूचित और संलग्न समुदाय को बढ़ावा देने में इसकी भूमिका में विश्वास करते हैं। आम आवाज़ को अपने दैनिक समाचार अपडेट स्रोत के रूप में चुनने के लिए आप पाठकों का बहुत धन्यवाद। हम आपको हर दिन नवीनतम हिंदी समाचार प्रदान करने और आपको सूचित रखने के लिए तत्पर हैं।
            </p>
           {/* <p>
              आम आवाज़ को अपने दैनिक समाचार अपडेट स्रोत के रूप में चुनने के लिए आप पाठकों का बहुत धन्यवाद। हम आपको हर दिन नवीनतम हिंदी समाचार लाने और आपको सूचित रखने के लिए तत्पर हैं।
            </p>*/}
          </div>
        </div>

        {/* Vertical News Section */}
        <div className="col-lg-4 vertical-news">
          {news.slice(0,4).map((item, index) => (
            <Link to={`/news-page/${item.headline}/${item._id}`}  className="news-item" key={index}>
              <div className="category-col-img">
                <img
                  loading="lazy"
                  onError={(e) => e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bUqIUkfyesCXuAFw-MFLebEI-5to1ouplw&s"}
                  src={item.NewsHeadImage}
                  alt={item.headline}
                  className="img-fluid"
                />
              </div>
              <div className="category-col-heading">
                <div className="cate-date">
                  <span className="cate text-white">{item.newsCategory}</span>
                  <span className="date">{new Date(item.createdAt).toLocaleString()}</span>
                </div>
                <p>{item.headline}</p>
              </div>
              <div className="auth">
                <p className="auth-name">Covered By: {item.storyCoveredBy}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="contact-info text-center mt-5">
        <h2>Contact Us</h2>
        <p>
          <i className="fa-solid fa-envelope"></i> <a href="mailto:contact@aamawaz.com">contact@aamawaz.com</a>
        </p>
        <p>
          <i className="fa-solid fa-phone"></i> +91 123 456 7890
        </p>
        <p>
          <i className="fa-solid fa-map-marker-alt"></i> 123, Main Street, City, Country
        </p>
      </div>

      {/* <LatestNewsCategory /> */}
    </div>
  );
};

export default AboutUs;
