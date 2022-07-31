const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send("<h1>Retrieve comment</h1>");
});

router.post('/add', (req, res, next) => {
    res.send("<h1>Add comments!</h1>");
});

module.exports = router;