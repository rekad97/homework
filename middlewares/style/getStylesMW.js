/*az összes stílust lekéri az adatbázisból*/
const requireOption = require('../requireOption');

module.exports = function (objectRepo){
    const modelOfStyles = requireOption(objectRepo, 'modelOfStyles');

    return function(req, res, next){
        modelOfStyles.find({}, (err, styles) => {
            if(err) {
                return next({err: err});
            }

            res.locals.styles = styles;
            return next();
        });

    };
};