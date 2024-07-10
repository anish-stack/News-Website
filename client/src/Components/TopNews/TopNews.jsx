import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import './styles.css';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import './TopNews.css'

const TopNews = () => {
    const data = [
        {
            id: 1,
            category : 'Bussiness',
            title : `The world's largest cryptocurrency exchange Binance is launching a new token`,
            image : 'https://thumbs.dreamstime.com/b/businessman-using-tablet-laptop-analyzing-sales-data-economic-growth-graph-chart-business-strategy-digital-marketing-154742021.jpg',
            date : 'Jan 01, 2024',
        },
        {
            id: 2,
            category : 'Politics',
            title : 'lorem  eroms sosjwdx skooc skloo wwnn slkxo slkjdk sdjk dwooqq sssss',
            image : 'https://thumbs.dreamstime.com/b/businessman-using-tablet-laptop-analyzing-sales-data-economic-growth-graph-chart-business-strategy-digital-marketing-154742021.jpg',
            date : 'Jan 01, 2024',
        },
        {
            id: 3,
            category : 'Food',
            title : 'lorem  eroms sosjwdx skooc skloo wwnn slkxo slkjdk sdjk dwooqq sssss',
            image : 'https://thumbs.dreamstime.com/b/businessman-using-tablet-laptop-analyzing-sales-data-economic-growth-graph-chart-business-strategy-digital-marketing-154742021.jpg',
            date : 'Jan 01, 2024',
        },
        {
            id: 4,
            category : 'Bussiness',
            title : `The world's largest cryptocurrency exchange Binance is launching a new token`,
            image : 'https://thumbs.dreamstime.com/b/businessman-using-tablet-laptop-analyzing-sales-data-economic-growth-graph-chart-business-strategy-digital-marketing-154742021.jpg',
            date : 'Jan 01, 2024',
        },
        {
            id: 5,
            category : 'Politics',
            title : 'lorem  eroms sosjwdx skooc skloo wwnn slkxo slkjdk sdjk dwooqq sssss',
            image : 'https://thumbs.dreamstime.com/b/businessman-using-tablet-laptop-analyzing-sales-data-economic-growth-graph-chart-business-strategy-digital-marketing-154742021.jpg',
            date : 'Jan 01, 2024',
        },
        {
            id: 6,
            category : 'Food',
            title : 'lorem  eroms sosjwdx skooc skloo wwnn slkxo slkjdk sdjk dwooqq sssss',
            image : 'https://thumbs.dreamstime.com/b/businessman-using-tablet-laptop-analyzing-sales-data-economic-growth-graph-chart-business-strategy-digital-marketing-154742021.jpg',
            date : 'Jan 01, 2024',
        },
    ]
    return (
        <div className='topnews-section'>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            // pagination={{
            //   clickable: true,
            // }}
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
            {
                data && data.map((item,index)=>(
                    <SwiperSlide key={index} className='tranding-main-box'>
                        <div className="img">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="content">
                            <div className="cate-date">
                                <span className="cate">{item.category}</span>
                                <span className="date">{item.date}</span>
                            </div>
                            <p>{item.title}</p>
                        </div>
                    </SwiperSlide>
                ))
            }
          </Swiper>
        </div>
      );
};

export default TopNews;
