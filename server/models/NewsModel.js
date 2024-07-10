const mongoose = require('mongoose');

// Define the News schema
const NewsSchema = new mongoose.Schema(
  {
    headline: {
      type: String,
      required: true,
      trim: true
    },
    storyCoveredBy: {
      type: String,
      required: true,
      trim: true
    },
    isLatestNews: {
      type: Boolean,
      default: false
    },
    newsCategory: {
      type: String,
      required: true,
      trim: true,
    },
    whichRelatedNewsShow: {
      type: String,
      trim: true,
      default: '' // Default to an empty string if not provided
    },
    newsHtmlData: {
      type: String,
      required: true,
      trim: true
    },
    ShowAtSlider:{
      type: Boolean,
      default:false
    },
    ShowAtLatestNews:{
      type: Boolean,
      default:false
    }
  },
  { timestamps: true }
);

// Export the News model
module.exports = mongoose.model('News', NewsSchema);
