const path = require('path');
const express = require('express');
const user = require('./routes/user');
const profile = require('./routes/profile');
const favourite = require('./routes/favourite');
const comment = require('./routes/comment');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use("/user", user);
app.use("/profile", profile);
app.use("/favourite", favourite);
app.use("/comment", comment);

app.get("/", (req, res, next) => {
    res.render('index');
});

app.use((req, res, next) => {
    res.status(404).send("<h1>Page not found!!</h1>");
});

mongoose
.connect('mongodb+srv://animlib:SS03I0XYhy6POvI4@cluster0.npfqb.mongodb.net/animalib')
.then(result => {
    app.listen(3000);
})
.catch(err => {
    console.log(err);
});
