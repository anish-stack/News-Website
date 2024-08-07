import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './NewsPage.css'; // Assuming you have a NewsPage.css for styling
import Loader from '../Loader/Loader'; // Assuming you have a Loader component

function NewsPage() {
    const { id } = useParams();
    const [news, setNews] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const fetchNews = useCallback(async () => {
        try {
            const response = await axios.get(`https://www.api.aamawaz.com/api/news/${id}`);
            setNews(response.data);
            console.log(response.data)
        } catch (error) {
            console.error('Error fetching news:', error);
        } finally {
            setIsLoading(false);
        }
    }, [id]);

    useEffect(() => {
        fetchNews();
    }, [fetchNews]);

    if (isLoading) {
        return <div className='loaders'>
             <Loader />
        </div>;
    }

    if (!news) {
        return (
            <section className='NewsPage-section'>
                <div className="NewsPage-container">
                    <div className="content">
                        <p>No news found for this ID.</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className='NewsPage-section'>
            <div className="container">
                <div className="cate-date">
                    <span className='cate'>{news.newsCategory}</span>
                    <span className='date'>{new Date(news.createdAt).toLocaleString()}</span>
                </div>
                <div className="auth">
                    <p className='auth-name text-primary underline'>Covered By: {news.storyCoveredBy}</p>
                </div>
                <div className="news-content">

                    <div className="imgs">
                        <img className="w-100" loading='lazy' onError={(e)=>e.target.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bUqIUkfyesCXuAFw-MFLebEI-5to1ouplw&s"} src={news.NewsHeadImage} alt={news.headline} />
                    </div>
                    <div className="main-data">

                        <h1 className='title'>{news.headline}</h1>
                        <div className="news-content" dangerouslySetInnerHTML={{ __html: news.newsHtmlData }} />

                    </div>
                </div>
            </div>

            {/* Realated News */}
        </section>
    );
}

export default NewsPage;
