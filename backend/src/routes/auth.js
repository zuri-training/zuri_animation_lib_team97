const express = require('express');

const router = express.Router();

router.post('/auth', (req, res, next) => {
    res.send("<h1>Login</h1>");
});

router.get("/", (req, res, next) => {
    res.send("<h1>Welcome to our page</h1>");
});

module.exports = router;