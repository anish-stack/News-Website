import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CreateNews.css'; // Custom CSS file for additional styling
import JoditEditor from 'jodit-react';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import toast from 'react-hot-toast';

const EditNews = () => {
  const { id } = useParams();
  const navigate = useNavigate();

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
    { id: 12, name: 'दिल्ली-एनसीआर' },
    { id: 13, name: 'वीडियो' }
    // Add more categories as needed
  ];

  const [formData, setFormData] = useState({
    headline: '',
    storyCoveredBy: '',
    NewsHeadImage: '',
    newsCategory: '',
    newsHtmlData: ''
  });
  const [loading, setLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`http://localhost:7000/api/news/${id}`);
        const data = response.data;
        setFormData({
          headline: data.headline,
          storyCoveredBy: data.storyCoveredBy,
          NewsHeadImage: data.NewsHeadImage,
          newsCategory: data.newsCategory,
          newsHtmlData: data.newsHtmlData
        });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false);
      }
    };

    fetchNews();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleEditorChange = (newContent) => {
    setFormData((prevData) => ({
      ...prevData,
      newsHtmlData: newContent
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUpdating(true);

    console.log(formData)

    try {
      const response = await axios.put(`http://localhost:7000/api/news/${id}`, formData);
      console.log(response.data);
      toast.success('News updated successfully');
      navigate('/all-news');
    } catch (error) {
      console.error('Error updating news:', error);
      toast.error('Failed to update news');
    } finally {
      setIsUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Edit News</h2>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className="mb-3 col-md-6">
            <label htmlFor="headline" className="form-label">Headline</label>
            <input
              type="text"
              className="form-control"
              id="headline"
              name="headline"
              value={formData.headline}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="storyCoveredBy" className="form-label">Story Covered By</label>
            <input
              type="text"
              className="form-control"
              id="storyCoveredBy"
              name="storyCoveredBy"
              value={formData.storyCoveredBy}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        
        <div className='row'>
          <div className="mb-3 col-md-6">
            <label htmlFor="newsCategory" className="form-label">News Category</label>
            <select
              className="form-select"
              id="newsCategory"
              name="newsCategory"
              value={formData.newsCategory}
              onChange={handleChange}
              required
            >
              <option value="">Select News Category</option>
              {newsCategories.map((category) => (
                <option key={category.id} value={category.name}>{category.name}</option>
              ))}
            </select>
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="NewsHeadImage" className="form-label">Image Link</label>
            <input
              type="text"
              className="form-control"
              id="NewsHeadImage"
              name="NewsHeadImage"
              value={formData.NewsHeadImage}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="newsHtmlData" className="form-label">News HTML Data</label>
          <JoditEditor
            value={formData.newsHtmlData}
            onChange={handleEditorChange}
            config={{
              readonly: false,
              minHeight: 300,
              disablePlugins: 'resize',
              showXPathInStatusbar: false
            }}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={isUpdating}
        >
          {isUpdating ? 'Updating...' : 'Update News'}
        </button>
      </form>
    </div>
  );
};

export default EditNews;
