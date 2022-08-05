const express = require('express');
const router = express.Router();

router.post('/register', (req, res, next) => {
    res.send("<h1>Register users!</h1>");
});

router.post('/login', (req, res, next) => {
    res.send("<h1>Login</h1>");
});

router.get('/logout', (req, res, next) => {
    res.send("<h1>You are logged out!!</h1>")
});

router.get("/:id", (req, res, next) => {
    res.send("<h1>Return a user</h1>");
});

module.exports = router;