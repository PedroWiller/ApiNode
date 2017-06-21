var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    core_use = require('cors'),
    app = express(),
    pg = require('pg'),
    port = process.env.PORT || 15002,
    router = express.Router();

const conString = 'postgres://postgres:qwe123@localhost:5432/motorista';
app.use(core_use());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./Controller/ControllerMototista')(conString, pg, app);
app.listen(port);
console.log("Hey, listen in port: " + port);