import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast'
import {Link} from 'react-router-dom'
const newsCategories = [
    { id: 1, name: 'घर' },
    { id: 2, name: 'देश' },
    { id: 3, name: 'विदेश' },
    { id: 4, name: 'राजनीति' },
    { id: 5, name: 'अपराध' },
    { id: 6, name: 'मनोरंजन' },
    { id: 7, name: 'खेल' },
    { id: 8, name: 'स्वास्थ्य' },
    { id: 9, name: 'तकनीकी' },
    { id: 10, name: 'व्यापार' },
    { id: 11, name: 'भ्रष्टाचार' },
    { id: 12, name: 'सच का आईना' },
    { id: 13, name: 'वीडियो' }
];

const AllNews = () => {
    const [news, setNews] = useState([]);
    const [filteredNews, setFilteredNews] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState(''); // State for news category filter
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10); // Number of news items per page

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const response = await axios.get('https://api.aamawaz.com/api/news');
            setNews(response.data);
            setFilteredNews(response.data.reverse()); // Initialize filteredNews with all news
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://api.aamawaz.com/api/news/${id}`);
            // Update news state after deletion
            toast.success('News Delete Successful')
            const updatedNews = news.filter(item => item._id !== id);
            setNews(updatedNews);
            setFilteredNews(updatedNews); // Update filtered news as well
        } catch (error) {
            toast.error('Error In  Delete News')

            console.error('Error deleting news:', error);
        }
    };

    const handleCategoryFilter = (event) => {
        const selectedCategory = event.target.value;
        setCategoryFilter(selectedCategory);
        setCurrentPage(1); // Reset pagination to first page when changing filters
    };

    useEffect(() => {
        // Filter news based on categoryFilter
        let filtered = news;
        if (categoryFilter) {
            filtered = news.filter(item => item.newsCategory === categoryFilter);
        }

        // Update filteredNews with filtered data
        setFilteredNews(filtered);
    }, [news, categoryFilter]); // Depend on news and categoryFilter

    const paginate = () => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);
        return currentItems;
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const SeeNews = (News_id) => {
        window.location.href = `/See-News?News=${News_id}`
    };
    return (
        <div className="w-100 mt-5">
            <h2 className="mb-4">All News</h2>
            <div className="mb-3">
                <select className="form-select" onChange={handleCategoryFilter} value={categoryFilter}>
                    <option value="">Filter by Category</option>
                    {newsCategories.map(category => (
                        <option key={category.id} value={category.name}>{category.name}</option>
                    ))}
                </select>
            </div>
            <table className="table w-100 table-hover">
                <thead>
                    <tr>
                        <th>Headline</th>
                        <th>Category</th>
                        <th>Covered By</th>
                        <th>News image</th>
                        <th>Created At</th>
                        <th>Updated At</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {paginate().map(item => (
                        <tr key={item._id}>
                            <td>{item.headline}</td>
                            <td>{item.newsCategory}</td>
                            <td>{item.storyCoveredBy}</td>
                            <td className='col-md-3'>


                                <img loading='lazy' src={item.NewsHeadImage} className='img-thumbnail' style={{ height: 60 }} alt={item.headline} /></td>

                            <td>{new Date(item.createdAt).toLocaleString()}</td>
                            <td>{new Date(item.updatedAt).toLocaleString()}</td>
                            <td>
                                <button className="btn btn-success me-2" onClick={() => SeeNews(item._id)}  >View News</button>
                                <Link to={`/Edit-News/${item._id}`} className="btn btn-primary me-2">Edit</Link>
                                <button className="btn btn-danger" onClick={() => handleDelete(item._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* Pagination */}
            <ul className="pagination justify-content-center">
                {news.length > itemsPerPage && (
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
                    </li>
                )}
                {news.length > itemsPerPage && (
                    <li className={`page-item ${currentPage * itemsPerPage >= news.length ? 'disabled' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default AllNews;
