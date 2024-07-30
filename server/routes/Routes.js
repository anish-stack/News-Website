const express = require('express');
const router = express.Router();
const multer = require('multer');
const { createNews, updateNews, getSingleNews, getAllNews, getOnlyLatestNews, getNewsByCategory, showOnlyRelatedNewsByCategory, deleteNews, deleteAllNews, MakeNewsShowSlider, MakeNewsShowAtLatest, addImageFieldInAllNews, DeactivateNewsShowSlider, DeactivateNewsShowAtLatest } = require('../controllers/NewsController');
const { addListener } = require('../models/NewsModel');
const { createHeadline, updateHeadline, deleteHeadline, getAllActiveHeadlines, getAllHeadlines } = require('../controllers/HeadlineController');
const storage = multer.memoryStorage()
const upload = multer({ storage });
// Headlines routes
router.get('/headlines', getAllActiveHeadlines);
router.get('/admin-headlines', getAllHeadlines);

router.post('/headlines', createHeadline);
router.put('/headlines/:id', updateHeadline);
router.delete('/headlines/:id', deleteHeadline);
router.post('/create-news', upload.array('images'), createNews);
router.put('/:id', updateNews);
router.get('/add-image', addImageFieldInAllNews);

router.get('/:id', getSingleNews);

router.get('/', getAllNews);
router.get('/latest', getOnlyLatestNews);
router.get('/category/:category', getNewsByCategory);
router.get('/related/:category', showOnlyRelatedNewsByCategory);
router.delete('/:id', deleteNews);
router.delete('/', deleteAllNews);
router.put('/slider-update/:id', MakeNewsShowSlider);
router.put('/slider-deactivate/:id', DeactivateNewsShowSlider);
router.put('/latest-deactivate/:id', DeactivateNewsShowAtLatest);
router.put('/latest-update/:id', MakeNewsShowAtLatest);





module.exports = router;
