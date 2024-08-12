const Banner = require("../models/banner");

exports.getBanner = (req, res) => {
    Banner.getBanner((err, result) => {
        if(err) {
            res.status(500).send(err);
        }
        res.status(200).json(result);
    });
};


exports.updateBanner = (req, res) => {
    const data = req.body;
    Banner.updateBanner(data, (err, result) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(201).json({ message: 'Banner updated successfully!' });
    });
};