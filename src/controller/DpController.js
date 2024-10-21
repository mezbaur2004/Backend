const Dp = require('../model/DpModel');

// GET: Fetch about info
exports.getDp = async (req, res) => {
    try {
        const dp = await Dp.findOne();
        if (about) {
            res.status(200).json(dp);
        } else {
            res.status(404).json({ message: 'Dp section not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// POST: Create or update about info
exports.createOrUpdateDp = async (req, res) => {
    try {
        const dpData = req.body;
        let dp = await Dp.findOne();

        if (dp) {
            // Update existing document
            dp = await Dp.findByIdAndUpdate(dp._id, dpData, { new: true });
            res.status(200).json(dp); // Use 200 for updates
        } else {
            // Create new document
            dp = new Dp(dpData);
            await about.save();
            res.status(201).json(dp); // Use 201 for creation
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};