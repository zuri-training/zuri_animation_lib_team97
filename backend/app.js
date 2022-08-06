const express = require('express');
const user = require('./routes/user');
const profile = require('./routes/profile');
const favourite = require('./routes/favourite');
const comment = require('./routes/comment');
const mongoConnect = require('./utils/database').mongoConnect;

const app = express();

app.use("/user", user);
app.use("/profile", profile);
app.use("/favourite", favourite);
app.use("/comment", comment);

app.get("/", (req, res, next) => {
    res.send("<h1>Welcome home!!</h1>");
});

app.use((req, res, next) => {
    res.status(404).send("<h1>Page not found!!</h1>");
});

mongoConnect(() => {
    app.listen(3000);
});
