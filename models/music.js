const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Music    = db.model('Music', {
    eloado: String,
    cim: String,
    megjegyzes: String,
    lejatszas: String,
    stilus: String
});

module.exports = Music;
