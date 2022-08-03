const express = require('express');

const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("<h1>We just fetched a profile!</h1>");
});

router.post("/add", (req, res, next) => {
    res.send("<h1>We just posted a profile!</h1>");
});

module.exports = router;