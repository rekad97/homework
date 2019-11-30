const Schema = require('mongoose').Schema;
const db = require('../config/db');
 const Style = db.model('Style', {
     nev: String,
 });

 module.exports = Style;