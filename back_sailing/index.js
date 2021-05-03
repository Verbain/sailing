var express = require('express');
var app = express();
const cors = require('cors');
const Joi = require('joi');

const validator = require('./src/decorators/Validator');
const serialization = require('./src/response/Serializations');
const context = require('./src/decorators/Context');
const { getSummonerIdWithName, getAllRickMortyCharacter } = require('./src/Controller/MainController');

app.use(express.json());
app.use(cors());

app.get('/', function (req, res) {
    res.send('init !');
});
app.get('/character',context(),getAllRickMortyCharacter,serialization);

app.get('/summonername',context(),getSummonerIdWithName,serialization )

app.listen(4000, function () {
    console.log("Application listening on port 4000 !");
});