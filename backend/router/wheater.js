const express = require('express');
const normalizeWheater = require('../helpers/normalize');
const getCity = require('../service/wheater');
const router = express.Router();

router.get("/:city/:days", async (req, res) => {
    const { city, days } = req.params;
    const wheaterCity = await getCity(city, days);
    if(wheaterCity) {
        const wheater = normalizeWheater(wheaterCity);
        res.json(wheater);
    }
    else {
        res.status(404).json({
            message: "City not found"
        });
    }
});

module.exports = router;