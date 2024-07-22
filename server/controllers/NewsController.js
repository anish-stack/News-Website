const News = require('../models/NewsModel');
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 600 }); // Cache TTL of 10 minutes
const cloudinary = require('cloudinary').v2
const streamifier = require('streamifier');
const { param, validationResult } = require('express-validator');
// Configuration
cloudinary.config({
    cloud_name: 'dmisqrobm',
    api_key: '476564278259419',
    api_secret: 'cjqUGIs1bp8KCHFAVuxyHCnx2ic' 
});

const uploadImage = (buffer) => {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream((error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
  
      streamifier.createReadStream(buffer).pipe(uploadStream);
    });
  };
  
// Create news
exports.createNews = async (req, res) => {
    try {
      const { headline, storyCoveredBy, newsCategory, whichRelatedNewsShow, newsHtmlData,NewsHeadImage } = req.body;
    //   const files = req.files;
    //     console.log(files)
    //   if (!files || files.length === 0) {
    //     return res.status(400).json({ error: 'No images uploaded' });
    //   }
  
    //   // Upload images to Cloudinary
      
    //   const imageUploads = await Promise.all(files.map(async (file) => {
    //     const result = await uploadImage(file.buffer);
    //     return {
    //       imageUrl: result.secure_url,
    //       publicId: result.public_id
    //     };
    //   }));
  
  
      const news = new News({
        headline,
        storyCoveredBy,
        newsCategory,
        newsHtmlData,
        NewsHeadImage
     
      });
  
      await news.save();
      cache.flushAll(); // Clear cache after creating news
      res.status(201).json(news);
    } catch (error) {
        console.log(error)
      res.status(400).json({ error: error.message });
    }
  };
// Update news
exports.updateNews = async (req, res) => {
    try {
        const news = await News.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!news) return res.status(404).json({ error: 'News not found' });
        cache.flushAll(); // Clear cache after updating news
        res.status(200).json(news);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a single news
exports.getSingleNews = async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        if (!news) return res.status(404).json({ error: 'News not found' });
        res.status(200).json(news);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all news
exports.getAllNews = async (req, res) => {
    try {
        // Check if news data is available in the cache
      
        
        // Retrieve all news from the database
        const news = await News.find();

        // If no news found, return an appropriate message
        if (!news || news.length === 0) {
            return res.status(404).json({ message: 'No news found' });
        }

        // Cache the news data
      

        // Send the news data as a response
        res.status(200).json(news);
    } catch (error) {
        // Log and return the error message
        console.error(error);
        res.status(400).json({ error: error.message });
    }
};

// Get only latest news
exports.getOnlyLatestNews = async (req, res) => {
    try {
        const cachedNews = cache.get('latestNews');
        if (cachedNews) return res.status(200).json(cachedNews);

        const news = await News.find().sort({ createdAt: -1 }).limit(1);
        cache.set('latestNews', news); // Cache the result
        res.status(200).json(news);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get news by category
exports.validateCategory = [
    param('category')
        .trim()
        .notEmpty()
        .withMessage('Category is required')
        .isString()
        .withMessage('Category must be a string'),
];
exports.getNewsByCategory = async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const category = req.params.category;

        // Fetch news by category
        const news = await News.find({ newsCategory: category });

        // If no news found, return a 404 error
        if (!news.length) {
            return res.status(404).json({ message: 'No news found for this category' });
        }

        res.status(200).json(news);
    } catch (error) {
        res.status(500).json({ error: 'Server error: ' + error.message });
    }
};

// Show only related news by category
exports.showOnlyRelatedNewsByCategory = async (req, res) => {
    try {
        const category = req.params.category;
        const cacheKey = `relatedNews_${category}`;
        const cachedNews = cache.get(cacheKey);
        if (cachedNews) return res.status(200).json(cachedNews);

        const news = await News.find({ whichRelatedNewsShow: category });
        cache.set(cacheKey, news); // Cache the result
        res.status(200).json(news);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a single news
exports.deleteNews = async (req, res) => {
    try {
        const news = await News.findByIdAndDelete(req.params.id);exports.MakeNewsShowAtLatest = async (req,res)=>{
        try {
            
        } catch (error) {
            
        }
}

exports.MakeNewsShowSlider = async (req,res)=>{
    try {
        
    } catch (error) {
        
    }
}
        if (!news) return res.status(404).json({ error: 'News not found' });
        cache.flushAll(); // Clear cache after deleting news
        res.status(200).json({ message: 'News deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete all news
exports.deleteAllNews = async (req, res) => {
    try {
        await News.deleteMany({});
        cache.flushAll(); // Clear cache after deleting all news
        res.status(200).json({ message: 'All news deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};




exports.MakeNewsShowAtLatest = async (req, res) => {
    const { id } = req.params;

    try {
        // Activate the selected news without deactivating others
        const updatedNews = await News.findByIdAndUpdate(id, { ShowAtLatestNews: true }, { new: true });

        res.status(200).json(updatedNews);
    } catch (error) {
        console.error('Error marking news as ShowAtLatestNews:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
exports.DeactivateNewsShowAtLatest = async (req, res) => {
    const { id } = req.params;

    try {
        // Deactivate the specified news item
        const updatedNews = await News.findByIdAndUpdate(id, { ShowAtLatestNews: false }, { new: true });

        res.status(200).json(updatedNews);
    } catch (error) {
        console.error('Error deactivating news from ShowAtLatestNews:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.DeactivateNewsShowSlider = async (req, res) => {
    const { id } = req.params;

    try {
        // Deactivate the specified news item
        const updatedNews = await News.findByIdAndUpdate(id, { ShowAtSlider: false }, { new: true });

        res.status(200).json(updatedNews);
    } catch (error) {
        console.error('Error deactivating news from ShowAtSlider:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.MakeNewsShowSlider = async (req, res) => {
    const { id } = req.params;

    try {
        // Activate the selected news without deactivating others
        const updatedNews = await News.findByIdAndUpdate(id, { ShowAtSlider: true }, { new: true });

        res.status(200).json(updatedNews);
    } catch (error) {
        console.error('Error marking news as ShowAtSlider:', error);
        res.status(500).json({ message: 'Server error' });
    }
};


exports.addImageFieldInAllNews = async (req, res) => {
    try {
        const imageUrl = 'https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM=';

        // Find all news items
        const allNews = await News.find();

        // Iterate over each news item and update with the new image URL
        const updatePromises = allNews.map(newsItem => {
            newsItem.NewsHeadImage = imageUrl;
            return newsItem.save(); // Save each updated news item
        });

        // Wait for all update operations to complete
        await Promise.all(updatePromises);

        res.status(200).json({ message: 'News items updated successfully' });
    } catch (error) {
        console.error('Error updating news items:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
