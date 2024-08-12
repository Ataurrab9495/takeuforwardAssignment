const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const bannerRoutes = require("./routes/bannerRoutes");
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1", bannerRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port 3000`));