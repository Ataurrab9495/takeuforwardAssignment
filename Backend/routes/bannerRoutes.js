const express = require('express');
const bannerController = require("../controllers/bannerController");

const app = express.Router();

app.get("/banner", bannerController.getBanner);
app.post("/banner", bannerController.updateBanner);

module.exports = app;