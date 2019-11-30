/*-az adott sítlust törli a listából és az adatbázisból*/
const requireOption = require('../requireOption');
module.exports = function (objectRepo){
    return function(req, res, next){
        if(typeof res.locals.style === 'undefined'){
            return next();
        }
        res.locals.style.remove(err => {
            if(err){
                return next({err: err});
            }
        });
        return res.redirect('/style');
    };
};