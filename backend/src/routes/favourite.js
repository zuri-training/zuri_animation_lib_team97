const express = require('express');

const router = express.Router();

router.get("/favourite", (req, res, next) => {
    res.send("<h1>Return favourited animations!</h1>");
});

router.post("/favourite", (res, req, next) => {
    res.send("<h1>Save favourites!</h1>");
});

module.exports = router;