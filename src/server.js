
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


/*

var router = express.Router();
app.get('/', function(req, res) {
    res.json({ message: 'API - Servidor Listo...' });
});
var blabla = function(req, res ){
    var koko = manager.Select("user","*","");
    return koko.json();
}
app.get('/select_user', (req, res) => {
    manager.Select(req, res, "user","*","");
})

app.get('/ping', (req, res) => {
    return res.send('pong');
})*/
app.use(express.json());

app.use('/users',  users);

app.use('/user',  user);
/*
app.use('/files',  file);
app.use('/notes', note);
*/

app.listen(process.env.PORT || 8080);
