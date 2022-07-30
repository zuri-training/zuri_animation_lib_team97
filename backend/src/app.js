const express = require('express');

const app = express();

app.use('/loadcomments', (req, res, next) => {
    res.send("<h1>Saves a comment on animation</h1>");
});

app.use('/savecomment', (req, res, next) => {
    res.send("<h1>Saves a comment on animation</h1>");
});

app.use('/removefavourite', (req, res, next) => {
    res.send("<h1>Removes an animation as favourite</h1>");
});

app.use('/savefavourite', (req, res, next) => {
    res.send("<h1>Saves an animation as user's favourite animation</h1>");
});

app.use('/createprofile', (req, res, next) => {
    res.send("<h1>Update user's profile</h1>");
});

app.use('/updateprofile', (req, res, next) => {
    res.send("<h1>Update user's profile</h1>");
});

app.use('/register', (req, res, next) => {
    res.send("<h1>Register a new user</h1>");
});

app.use('/logout', (req, res, next) => {
    res.send("<h1>Logs a new user out of the system</h1>");
});

app.use('/login', (req, res, next) => {
    res.send("<h1>Do authentication and log user in</h1>");
});

app.use('/', (req, res, next) => {
    res.send("<h1>Welcome to express</h1>");
});


app.listen(3000);