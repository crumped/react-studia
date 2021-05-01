const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

var manager =require('./server/databaseManager');

const app = express();


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
})

app.listen(process.env.PORT || 8081);
