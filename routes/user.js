const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/user');
router.post('/register', usercontroller.saveUser);

router.get('/login', (req, res, next) => {
    res.send("<h1>Login</h1>");
});

router.get('/logout', (req, res, next) => {
    res.send("<h1>You are logged out!!</h1>")
});

router.get("/:id", (req, res, next) => {
    res.send("<h1>Return a user</h1>");
});

module.exports = router;