const express = require('express');
const user = require('./routes/user');
const profile = require('./routes/profile');
const favourite = require('./routes/favourite');
const comment = require('./routes/comment');

const app = express();

app.use(user);
app.use(profile);
app.use(favourite);
app.use(comment);

app.listen(3000);