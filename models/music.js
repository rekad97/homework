const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Music    = db.model('Music', {
    eloado: String,
    cim: String,
    megjegyzes: String,
    _stilus: {
        type: Schema.Types.ObjectId,
        ref: 'Style'
    }
});

module.exports = Music;