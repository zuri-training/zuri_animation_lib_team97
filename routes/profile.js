const express = require('express');
const profileController = require('../controllers/user');

const router = express.Router();

router.get("/", (req, res, next) => {
    res.send("<h1>We just fetched a profile!</h1>");
});

router.post("/add", profileController.createProfile);

module.exports = router;