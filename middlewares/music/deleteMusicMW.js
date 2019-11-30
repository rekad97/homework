/*az adott zeneszámot kitörli az adatbázisból*/

const requireOption = require('../requireOption');
module.exports = function (objectRepo){
    return function(req, res, next){
        if(typeof res.locals.music === 'undefined'){
            return next();
        }
        res.locals.music.remove(err => {
            if(err){
                return next({err: err});
            }

            return res.redirect(`/music/${res.locals.style_id}`)
        });
    };
};