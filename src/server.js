
const express = require('express');


var cors = require('cors');



var users   = require('./server/routes/users'),
    user    = require('./server/routes/user')
/*
    files   = require('./server/routes/files'),
    notes   = require('./server/routes/notes')
*/

var app = express();

app.use(cors({origin: 'http://localhost:3000', credentials: true}));


app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    next();
});

app.use(express.json());

app.use('/users',  users);

app.use('/user',  user);
/*
app.use('/files',  file);
app.use('/notes', note);
*/

app.listen(process.env.PORT || 8080);
