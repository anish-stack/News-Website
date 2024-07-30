import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Headlines = () => {
  const [headlines, setHeadlines] = useState([]);
  const [newHeadline, setNewHeadline] = useState('');
  const [editId, setEditId] = useState(null);
  const [editHeadlineText, setEditHeadlineText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize] = useState(10); // Number of headlines per page

  // Fetch all active headlines with pagination
  const fetchHeadlines = async (page = 1) => {
    try {
      const response = await axios.get('http://localhost:7000/api/news/admin-headlines', {
        params: { page, limit: pageSize }
      });
      setHeadlines(response.data.headlines);
      setTotalPages(response.data.totalPages);
      setCurrentPage(response.data.currentPage);
    } catch (error) {
      console.error('Error fetching headlines:', error);
    }
  };

  // Create a new headline
  const createHeadline = async () => {
    try {
      const response = await axios.post('http://localhost:7000/api/news/headlines', { headlineText: newHeadline });
      fetchHeadlines(currentPage); // Refresh the headlines
      setNewHeadline('');
    } catch (error) {
      console.error('Error creating headline:', error);
    }
  };

  // Update a headline
  const updateHeadline = async () => {
    try {
      const response = await axios.put(`http://localhost:7000/api/news/headlines/${editId}`, { headlineText: editHeadlineText });
      fetchHeadlines(currentPage); // Refresh the headlines
      setEditId(null);
      setEditHeadlineText('');
    } catch (error) {
      console.error('Error updating headline:', error);
    }
  };

  // Toggle active status of a headline
  const toggleActiveStatus = async (id, currentStatus) => {
    try {
      const response = await axios.put(`http://localhost:7000/api/news/headlines/${id}`, { active: !currentStatus });
      fetchHeadlines(currentPage); // Refresh the headlines
    } catch (error) {
      console.error('Error toggling active status:', error);
    }
  };

  // Delete a headline
  const deleteHeadline = async (id) => {
    try {
      await axios.delete(`http://localhost:7000/api/news/headlines/${id}`);
      fetchHeadlines(currentPage); // Refresh the headlines
    } catch (error) {
      console.error('Error deleting headline:', error);
    }
  };

  // Handle page change
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    fetchHeadlines(newPage);
  };

  useEffect(() => {
    fetchHeadlines(currentPage);
  }, [currentPage]);

  return (
    <div className="container">
      <h1 className="my-4">Headlines</h1>

      {/* Create Headline */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="New Headline"
          value={newHeadline}
          onChange={(e) => setNewHeadline(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={createHeadline}>
          Create Headline
        </button>
      </div>

      {/* Edit Headline */}
      {editId && (
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Edit Headline"
            value={editHeadlineText}
            onChange={(e) => setEditHeadlineText(e.target.value)}
          />
          <button className="btn btn-success mt-2" onClick={updateHeadline}>
            Update Headline
          </button>
          <button className="btn btn-secondary mt-2 ml-2" onClick={() => setEditId(null)}>
            Cancel
          </button>
        </div>
      )}

      {/* Table of Headlines */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Headline</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {headlines.map((headline) => (
            <tr key={headline._id}>
              <td>{headline.headlineText}</td>
              <td>
                <button
                  className={`btn btn-sm ${headline.active ? 'btn-success' : 'btn-danger'}`}
                  onClick={() => toggleActiveStatus(headline._id, headline.active)}
                >
                  {headline.active ? 'Active' : 'Inactive'}
                </button>
              </td>
              <td>
                <button
                  className="btn btn-warning btn-sm mr-2"
                  onClick={() => {
                    setEditId(headline._id);
                    setEditHeadlineText(headline.headlineText);
                  }}
                >
                  Edit
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteHeadline(headline._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
          </li>
          {[...Array(totalPages).keys()].map((page) => (
            <li key={page + 1} className={`page-item ${currentPage === page + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(page + 1)}>{page + 1}</button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Headlines;
