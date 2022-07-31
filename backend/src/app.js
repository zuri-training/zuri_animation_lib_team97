const express = require('express');
const user = require('./routes/user');
const profile = require('./routes/profile');
const favourite = require('./routes/favourite');
const comment = require('./routes/comment');
const auth = require('./routes/auth');

const app = express();

app.use(auth);
app.use("/user", user);
app.use("/profile", profile);
app.use("/favourite", favourite);
app.use("/comment", comment);


app.listen(3000);