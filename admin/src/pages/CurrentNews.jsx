import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrentNews = () => {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    // Function to fetch news data based on ID from query parameters
    const fetchNewsById = async () => {
      try {
        // Extracting ID from query parameters
        const searchParams = new URLSearchParams(window.location.search);
        const newsId = searchParams.get('News');

        // Fetching data using Axios
        const response = await axios.get(`https://api.aamawaz.com/api/news/${newsId}`);
        setNewsData(response.data); // Setting fetched news data to state
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNewsById(); // Call the fetch function when component mounts
  }, []);

  if (!newsData) {
    return <div>Loading...</div>; // Placeholder for loading state
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{newsData.headline}</h5>
          <p className="card-text">{newsData.storyCoveredBy}</p>
          <p className="card-text"><small className="text-muted">Category: {newsData.newsCategory}</small></p>
          {/* Render HTML content safely */}
          <div dangerouslySetInnerHTML={{ __html: newsData.newsHtmlData }}></div>
          <p className="card-text"><small className="text-muted">Published: {new Date(newsData.createdAt).toLocaleString()}</small></p>
          <p className="card-text"><small className="text-muted">Last updated: {new Date(newsData.updatedAt).toLocaleString()}</small></p>
        </div>
      </div>
    </div>
  );
};

export default CurrentNews;
