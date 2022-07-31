const express = require('express');

const router = express.Router();

router.get('/comment', (req, res, next) => {
    res.send("<h1>Retrieve comment</h1>");
});

router.post('/comment', (req, res, next) => {
    res.send("<h1>Add comments!</h1>");
});

module.exports = router;