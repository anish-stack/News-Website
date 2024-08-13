import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CategoryHome = () => {
    const [news, setNews] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const fetchNews = async () => {
        try {
            const response = await axios.get('https://api.aamawaz.com/api/news');
            const data = response.data;
            // console.log(data)
            const filterSlideData = data.filter((item) => item.newsCategory === "भ्रष्टाचार");
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
        <section className="py-5 bg-light">
            <div className="container-fluid">
                <div className="text-start mb-4">
                    <h3 className="font-weight-bold fs-1">भ्रष्टाचार</h3>
                    <hr />
                </div>
                <div className="row">
                    {displayedNews.map((item, index) => (
                        <Link
                            to={`/news-page/${item._id}`}
                            className="col-12 col-sm-6 col-lg-3 mb-4 text-decoration-none"
                            key={index}
                        >
                            <div className="card h-100 border-0 shadow-sm">
                                <div className="overflow-hidden" style={{ height: '200px' }}>
                                    <img
                                        loading="lazy"
                                        onError={(e) => e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bUqIUkfyesCXuAFw-MFLebEI-5to1ouplw&s"}
                                        src={item.NewsHeadImage}
                                        alt={item.headline}
                                        className="img-fluid h-100 w-100"
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="card-body d-flex flex-column">
                                    <div className="mb-2">
                                        <span className="badge bg-danger">{item.newsCategory}</span>
                                        <small className="text-muted float-right">{new Date(item.createdAt).toLocaleString()}</small>
                                    </div>
                                    <h5 className="card-title text-dark">{item.headline}</h5>
                                    <p className="text-muted mt-auto">Covered By: {item.storyCoveredBy}</p>
                                </div>
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

export default CategoryHome;
