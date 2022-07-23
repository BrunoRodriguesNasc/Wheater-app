const express = require("express");
const app = express();
const cors = require("cors");
const wheater = require('../router/wheater.js');
const bodyParser = require("body-parser");

app.use('/wheater', wheater);
app.use(cors());
app.listen(3333);