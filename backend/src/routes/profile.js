const express = require('express');

const router = express.Router();

router.get("/profile", (req, res, next) => {
    res.send("<h1>We just fetched a profile!</h1>");
});

router.post("/profile", (req, res, next) => {
    res.send("<h1>We just posted a profile!</h1>");
});

module.exports = router;