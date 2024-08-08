import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../Loader/Loader';
import AdPostingRequest from '../CategoryHome/Ad';

function NewsPage() {
    const { id } = useParams();
    const [news, setNews] = useState(null);
    const [relatedNews, setRelatedNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchNews = useCallback(async () => {
        try {
            const response = await axios.get(`https://www.api.aamawaz.com/api/news/${id}`);
            setNews(response.data);
        } catch (error) {
            console.error('Error fetching news:', error);
        } finally {
            setIsLoading(false);
        }
    }, [id]);

    const fetchRelatedNews = useCallback(async () => {
        try {
            const response = await axios.get('https://www.api.aamawaz.com/api/news');
            const data = response.data;
            const filteredData = data.filter((item) => item.newsCategory === news?.newsCategory && item._id !== id);
            setRelatedNews(filteredData);
        } catch (error) {
            console.error('Error fetching related news:', error);
        }
    }, [news?.newsCategory, id]);

    useEffect(() => {
        fetchNews();
    }, [fetchNews]);

    useEffect(() => {
        if (news) {
            fetchRelatedNews();
        }
    }, [news, fetchRelatedNews]);

    if (isLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <Loader />
            </div>
        );
    }

    if (!news) {
        return (
            <section className="py-5">
                <div className="container">
                    <div className="alert alert-warning text-center">
                        No news found for this ID.
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    {/* Main News Content (80%) */}
                    <div className="col-lg-8 col-md-7 mb-4">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <span className="badge bg-primary">{news.newsCategory}</span>
                            <span className="text-muted">{new Date(news.createdAt).toLocaleString()}</span>
                        </div>
                        <div className="mb-4">
                            <div className="sharethis-inline-share-buttons mb-3"></div>
                            <p className="text-primary text-decoration-underline">Covered By: {news.storyCoveredBy}</p>
                        </div>
                        <div className="mb-4 h-md-50 w-100">
                            <img
                                className="img-fluid w-100 h-100 rounded"
                                loading="lazy"
                                onError={(e) => e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bUqIUkfyesCXuAFw-MFLebEI-5to1ouplw&s"}
                                src={news.NewsHeadImage}
                                alt={news.headline}
                            />
                        </div>
                        <h1 className="display-5 mb-4">{news.headline}</h1>
                        <div
                            className="news-content"
                            dangerouslySetInnerHTML={{ __html: news.newsHtmlData }}
                        />
                    </div>

                    {/* Related News (20%) */}
                    <div className="col-lg-4 col-md-5">
                        <h4 className="mb-4">Related News</h4>
                        <div className="list-group">
                            {relatedNews.length > 0 ? (
                                relatedNews.map((related, index) => (
                                    <a
                                        key={index}
                                        href={`/news-page/${related._id}`}
                                        className="list-group-item list-group-item-action"
                                    >
                                        <div className="mb-4">
                                            <img
                                                className="img-fluid rounded w-100"
                                                loading="lazy"
                                                onError={(e) => e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bUqIUkfyesCXuAFw-MFLebEI-5to1ouplw&s"}
                                                src={related.NewsHeadImage}
                                                alt={related.headline}
                                            />
                                        </div>
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">{related.headline}</h5>
                                            <small>{new Date(related.createdAt).toLocaleDateString()}</small>
                                        </div>
                                        <p className="mb-1 text-truncate">{related.storyCoveredBy}</p>
                                    </a>
                                ))
                            ) : (
                                <div className="alert alert-info">No related news available.</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <AdPostingRequest/>
        </section>
    );
}

export default NewsPage;
