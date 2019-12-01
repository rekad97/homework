const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Music    = db.model('Music', {
    eloado: String,
    cim: String,
    megjegyzes: String,
    lejatszas: String,
    _stilus: {
        type: Schema.Types.String,

    }
});

module.exports = Music;