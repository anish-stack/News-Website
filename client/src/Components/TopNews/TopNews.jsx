import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import './TopNews.css';
import axios from 'axios';

const TopNews = () => {
    const [News, setNews] = useState([]);
    
    const fetchNews = async () => {
        try {
            const response = await axios.get('http://localhost:7000/api/news');
            const data = response.data;
            const FilterSlideData = data.filter((item) => item.ShowAtSlider === true);
            setNews(FilterSlideData);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <div className='topnews-section'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {News && News.map((item, index) => (
                   <SwiperSlide onClick={() => window.location.href = `news-page/${item.headline}/${item._id}`} key={index} className='tranding-main-box'>
                   <div className="img">
                       <img loading='lazy' onError={(e)=>e.target.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bUqIUkfyesCXuAFw-MFLebEI-5to1ouplw&s"} src={item.NewsHeadImage} alt={item.headline} />
                   </div>
                   <div className="content">
                       <div className="cate-date">
                           <span className="cate">{item.newsCategory}</span>
                           <span className="date">{new Date(item.createdAt).toLocaleString()}</span>
                       </div>
                       <p>{item.headline}</p>
                   </div>
               </SwiperSlide>
               
                ))}
            </Swiper>
        </div>
    );
};

export default TopNews;
