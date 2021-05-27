
const express = require('express');


const cors = require('cors');



const users   = require('./server/routes/users'),
      user    = require('./server/routes/user'),
      notes   = require('./server/routes/notes'),
      note    = require('./server/routes/note')



const app = express();

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

app.use('/notes',  notes);

app.use('/note', note);


app.listen(process.env.PORT || 8080);
