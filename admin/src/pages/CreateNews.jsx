import React, { useState } from 'react';
import axios from 'axios';
import './CreateNews.css'; // Custom CSS file for additional styling
import JoditEditor from 'jodit-react';

const CreateNews = () => {
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
    // Add more categories as needed
  ];

  const [headline, setHeadline] = useState('');
  const [storyCoveredBy, setStoryCoveredBy] = useState('');
  const [images, setImages] = useState([]);
  const [NewsHeadImage,setNewsHeadImage] = useState('')
  const [newsCategory, setNewsCategory] = useState('');
  const [whichRelatedNewsShow, setWhichRelatedNewsShow] = useState('');
  const [newsHtmlData, setNewsHtmlData] = useState('');

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleImageRemove = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('headline', headline);
    formData.append('storyCoveredBy', storyCoveredBy);
    images.forEach((image) => formData.append('images', image));
    formData.append('newsCategory', newsCategory);
    formData.append('whichRelatedNewsShow', whichRelatedNewsShow);
    formData.append('newsHtmlData', newsHtmlData);
    formData.append('NewsHeadImage', NewsHeadImage);

    try {
      const response = await axios.post('http://localhost:7000/api/news/create-news', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      console.log('News created:', response.data);
      // Optionally redirect or show success message
    } catch (error) {
      console.error('Error creating news:', error);
      // Handle error, show error message
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Create News</h2>
      <form onSubmit={handleSubmit}>
        <div className='row'>
          <div className="mb-3 col-md-6">
            <label htmlFor="headline" className="form-label">Headline</label>
            <input type="text" className="form-control" id="headline" value={headline} onChange={(e) => setHeadline(e.target.value)} required />
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="storyCoveredBy" className="form-label">Story Covered By</label>
            <input type="text" className="form-control" id="storyCoveredBy" value={storyCoveredBy} onChange={(e) => setStoryCoveredBy(e.target.value)} required />
          </div>
        </div>
        
        <div className='row'>
          <div className="mb-3 col-md-6">
            <label htmlFor="newsCategory" className="form-label">News Category</label>
            <select className="form-select" id="newsCategory" value={newsCategory} onChange={(e) => setNewsCategory(e.target.value)} required>
              <option value="">Select News Category</option>
              {newsCategories.map((category) => (
                <option key={category.id} value={category.name}>{category.name}</option>
              ))}
            </select>
          </div>
          <div className="mb-3 col-md-6">
            <label htmlFor="storyCoveredBy" className="form-label">Image Link</label>
            <input type="text" className="form-control" id="NewsHeadImage" value={NewsHeadImage} onChange={(e) => setNewsHeadImage(e.target.value)} required />
          </div>
    
        </div>

        <div className="mb-3">
          <label htmlFor="newsHtmlData" className="form-label">News HTML Data</label>
          <JoditEditor
            value={newsHtmlData}
            onChange={(newContent) => setNewsHtmlData(newContent)}
            config={{
              readonly: false, // set to true if you want to disable editing
              minHeight: 300,
              // buttons: 'heading,bold,italic,underline,|,align,left,center,right,|,ul,ol,|,font,size,color,|,link,image,table',
              disablePlugins: 'resize',
              showXPathInStatusbar: false,
            }}
          />
        </div>

      

        <button type="submit" className="btn btn-primary">Create News</button>
      </form>
    </div>
  );
};

export default CreateNews;
