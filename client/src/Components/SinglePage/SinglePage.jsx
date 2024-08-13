import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Loader from '../Loader/Loader';
import './SinglePage.css';

const SinglePage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('category') || ''; // Default to empty string if not found
  const [currentPage, setCurrentPage] = useState(1);
  const [news, setNews] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false); // State to track if news is loaded
  const itemsPerPage = 6; // Number of items per page

  useEffect(() => {
    const fetchNews = async () => {
      if (!query) {
        setNews([]); // Reset news if query is empty
        setIsLoaded(true);
        return;
      }
      setIsLoaded(false); // Start loading state
      try {
        const response = await axios.get(`https://api.aamawaz.com/api/news/category/${query}`);
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
        setNews([]); // Reset news on error
      } finally {
        setIsLoaded(true); // End loading state
      }
    };

    setCurrentPage(1); // Reset to the first page on query change
    fetchNews();
  }, [query]);

  const displayedNews = news.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleNextPage = () => {
    if (currentPage * itemsPerPage < news.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className='CategoryHome-section'>
      {!isLoaded ? (
        <div className='w-100 loaders'>
          <Loader />
        </div>
      ) : (
        <div className="CategoryHome-container">
          <div className="CategoryHome-heading">
            <h3>{query ? `${query}` : 'News'}</h3>
          </div>
          <div className="row">
            {isLoaded && news.length === 0 ? (
              <div className="no-news">
                <img loading='lazy' src="https://img.freepik.com/free-vector/flat-design-digital-detox-illustration_23-2149340862.jpg" alt="No news found" className="img-fluid" />
                <p>No news found in this category.</p>
              </div>
            ) : (
              displayedNews.map((item, index) => (
                <a href={`/news-page/${item._id}`} className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
                  <div className="category-col-img">
                    <img loading='lazy' onError={(e) => e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bUqIUkfyesCXuAFw-MFLebEI-5to1ouplw&s"} src={item.NewsHeadImage} alt={item.headline} className="img-fluid" />
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
                </a>
              ))
            )}
          </div>
          {news.length > itemsPerPage && (
            <div className="pagination">
              <button className="btn btn-secondary" onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
              <span className="page-info">Page {currentPage} of {Math.ceil(news.length / itemsPerPage)}</span>
              <button className="btn btn-secondary" onClick={handleNextPage} disabled={currentPage * itemsPerPage >= news.length}>Next</button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default SinglePage;
