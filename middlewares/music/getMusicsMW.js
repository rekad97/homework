/* az összes zeneszám listáját lekéri az adatbázisból*/
const requireOption = require('../requireOption');
module.exports = function (objectRepo){

    const modelOfMusics = requireOption(objectRepo, 'modelOfMusics');

    return function(req, res, next){
        if(typeof res.locals.style === 'undefined'){
            return next();
        }
        modelOfMusics.find({stilus: req.params.stylenev}, (err, musics) => {
            if(err) {
                return next({err: err});


            }
            res.locals.musics = musics;
            return next();

        });
    };
};
