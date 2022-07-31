const express = require('express');
const router = express.Router();

router.post('/register', (req, res, next) => {
    res.send("<h1>Register users!</h1>");
});

router.get("/", (req, res, next) => {
    res.send("<h1>Welcome on board!</h1>");
});


module.exports = router;