import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Khel = () => {
    const [news, setNews] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const fetchNews = async () => {
        try {
            const response = await axios.get('https://www.api.aamawaz.com/api/news');
            const data = response.data;
            // console.log(data)
            const filterSlideData = data.filter((item) => item.newsCategory === "खेल");
            setNews(filterSlideData);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    const displayedNews = showAll ? news : news.slice(0, 8);

    return (
        <section className='CategoryHome-section'>
            <div className="CategoryHome-container">
                <div className="CategoryHome-heading">
                    <h3>खेल</h3>
                </div>
                <div className="row">
                    {displayedNews.map((item, index) => (
                        <Link  to={`/news-page/${item._id}`} className=" col-12 col-sm-6 col-lg-3 mb-4" key={index}>
                            <div className="category-col-img">
                                <img loading='lazy' onError={(e)=>e.target.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bUqIUkfyesCXuAFw-MFLebEI-5to1ouplw&s"} src={item.NewsHeadImage} alt={item.headline} className="img-fluid" />
                            </div>
                            <div className="category-col-heading">
                                <div className="cate-date">
                                    <span className='cate'>{item.newsCategory}</span>
                                    <span className='date'>{new Date(item.createdAt).toLocaleString()}</span>
                                </div>
                                <p>{item.headline}</p>
                            </div>
                            <div className="auth">
                                <p className='auth-name'>Covered By: {item.storyCoveredBy}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                {news.length > 6 && (
                    <div className="text-center mt-4">
                        <button className="btn btn-secondary" onClick={() => setShowAll(!showAll)}>
                            {showAll ? 'View Less' : 'View More'}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Khel;
