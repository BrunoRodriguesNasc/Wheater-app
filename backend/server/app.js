const express = require("express");
const axios = require("axios");
const app = express();
const cors = require("cors");
const URL = require("../constants/const");

app.listen(3333);

app.use(cors());
app.get("/search/:city", async (req, res) => {
  const response = await axios
    .get(
      `https://www.metaweather.com/api/location/search/?query=${req.params.city}`
    )
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      if (error) {
        console.log(error);
      }
    });

  console.log(response);
  return res.send(response);
});

app.get("/location/:woeid", async (req, res) => {
  const response = await axios
    .get(`https://www.metaweather.com/api/location/${req.params.woeid}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      if (error) {
        console.log(error);
      }
    });
  console.log(response);
  return res.send(response);
});
