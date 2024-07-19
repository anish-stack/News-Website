import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageNews = () => {
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(12); // Number of news items per page

    // Fetch all news on component mount
    useEffect(() => {
        fetchNews();
    }, []);

    // Function to fetch all news from the backend
    const fetchNews = async () => {
        try {
            const response = await axios.get('https://news-website-rslv.onrender.com/api/news');
            setNews(response.data);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    // Function to handle activation/deactivation for ShowAtLatestNews
    const handleShowAtLatestNews = async (id, currentStatus) => {
        try {
            let response;
            // Toggle the current status
            if (currentStatus) {
                response = await axios.put(`https://news-website-rslv.onrender.com/api/news/latest-deactivate/${id}`);
            } else {
                response = await axios.put(`https://news-website-rslv.onrender.com/api/news/latest-update/${id}`, { ShowAtLatestNews: true });
            }

            // Update the news state with the updated status
            const updatedNews = news.map(item => {
                if (item._id === id) {
                    return { ...item, ShowAtLatestNews: !currentStatus };
                }
                return item;
            });
            setNews(updatedNews);
        } catch (error) {
            console.error('Error updating news:', error);
        }
    };

    // Function to handle activation/deactivation for ShowAtSlider
    const handleShowAtSlider = async (id, currentStatus) => {
        try {
            let response;
            // Toggle the current status
            if (currentStatus) {
                response = await axios.put(`https://news-website-rslv.onrender.com/api/news/slider-deactivate/${id}`);
            } else {
                response = await axios.put(`https://news-website-rslv.onrender.com/api/news/slider-update/${id}`, { ShowAtSlider: true });
            }

            // Update the news state with the updated status
            const updatedNews = news.map(item => {
                if (item._id === id) {
                    return { ...item, ShowAtSlider: !currentStatus };
                }
                return item;
            });
            setNews(updatedNews);
        } catch (error) {
            console.error('Error updating news:', error);
        }
    };

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = news.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Manage News</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Headline</th>
                        <th>Category</th>
                        <th>Show at Latest News</th>
                        <th>Show at Slider</th>
                    </tr>
                </thead>
                <tbody>
                    {currentItems.map(item => (
                        <tr key={item._id}>
                            <td>{item.headline}</td>
                            <td>{item.newsCategory}</td>
                            <td>
                                <button
                                    className={`btn ${item.ShowAtLatestNews ? 'btn-success' : 'btn-secondary'}`}
                                    onClick={() => handleShowAtLatestNews(item._id, item.ShowAtLatestNews)}
                                >
                                    {item.ShowAtLatestNews ? 'Active' : 'Inactive'}
                                </button>
                            </td>
                            <td>
                                <button
                                    className={`btn ${item.ShowAtSlider ? 'btn-success' : 'btn-secondary'}`}
                                    onClick={() => handleShowAtSlider(item._id, item.ShowAtSlider)}
                                >
                                    {item.ShowAtSlider ? 'Active' : 'Inactive'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
            <ul className="pagination">
                {news.length > itemsPerPage && (
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => paginate(currentPage - 1)}>Previous</button>
                    </li>
                )}
                {currentItems.length > 0 && (
                    <li className={`page-item ${indexOfLastItem >= news.length ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => paginate(currentPage + 1)}>Next</button>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default ManageNews;
