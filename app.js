const path = require('path');
const express = require('express');
const user = require('./routes/user');
const profile = require('./routes/profile');
const favourite = require('./routes/favourite');
const comment = require('./routes/comment');
const mongoose = require('mongoose');
require('dotenv').config()

const { DATABASE_URI } = process.env ?? {}

async function connect() {
    try {
        let result = await mongoose.connect(DATABASE_URI)

        console.log('Database connected!', result)
    } catch (error) {
        console.log('Connection error: ', error?.message)
    }
}
connect()

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


app.listen(3000, () => {
    console.log('listening on port 3000')
})