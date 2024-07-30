const Headline = require('../models/Headlines'); // Adjust the path as necessary

// Create a new headline
exports.createHeadline = async (req, res) => {
    try {
        const { headlineText } = req.body;
        const newHeadline = new Headline({ headlineText });
        await newHeadline.save();
        res.status(201).json({ message: 'Headline created successfully', headline: newHeadline });
    } catch (error) {
        res.status(500).json({ message: 'Error creating headline', error });
    }
};

// Delete a headline
exports.deleteHeadline = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedHeadline = await Headline.findByIdAndDelete(id);
        if (!deletedHeadline) {
            return res.status(404).json({ message: 'Headline not found' });
        }
        res.status(200).json({ message: 'Headline deleted successfully', headline: deletedHeadline });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting headline', error });
    }
};

// Update a headline
exports.updateHeadline = async (req, res) => {
    try {
        const { id } = req.params;
        const { headlineText, active } = req.body;
        const updatedHeadline = await Headline.findByIdAndUpdate(id, { headlineText, active }, { new: true });
        if (!updatedHeadline) {
            return res.status(404).json({ message: 'Headline not found' });
        }
        res.status(200).json({ message: 'Headline updated successfully', headline: updatedHeadline });
    } catch (error) {
        res.status(500).json({ message: 'Error updating headline', error });
    }
};

// Get all active headlines
exports.getAllActiveHeadlines = async (req, res) => {
    try {
        const activeHeadlines = await Headline.find({ active: true });
        res.status(200).json({ headlines: activeHeadlines });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching active headlines', error });
    }
};

exports.getAllHeadlines = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query; // Default to page 1 and limit 10
        const skip = (page - 1) * limit;
        const activeHeadlines = await Headline.find({ active: true })
            .skip(parseInt(skip))
            .limit(parseInt(limit));
        const total = await Headline.countDocuments({ active: true });

        res.status(200).json({
            headlines: activeHeadlines,
            total,
            totalPages: Math.ceil(total / limit),
            currentPage: parseInt(page)
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching active headlines', error });
    }
};
