const express = require('express');
const router = express.Router();
const multer = require('multer');
const { createNews, updateNews, getSingleNews, getAllNews, getOnlyLatestNews, getNewsByCategory, showOnlyRelatedNewsByCategory, deleteNews, deleteAllNews, MakeNewsShowSlider, MakeNewsShowAtLatest } = require('../controllers/NewsController');
const storage = multer.memoryStorage()
const upload = multer({ storage });

router.post('/create-news', upload.array('images'),createNews);
router.put('/:id', updateNews);
router.get('/:id', getSingleNews);
router.get('/',getAllNews);
router.get('/latest', getOnlyLatestNews);
router.get('/category/:category', getNewsByCategory);
router.get('/related/:category', showOnlyRelatedNewsByCategory);
router.delete('/:id', deleteNews);
router.delete('/', deleteAllNews);
router.put('/slider-update/:id', MakeNewsShowSlider);
router.put('/latest-update/:id', MakeNewsShowAtLatest);


module.exports = router;
