/*egy adott zenei stílust kérdez le az adatbázisból, pl. törléshez vagy edit-hez*/
const requireOption = require('../requireOption');
module.exports = function (objectRepo){
    const modelOfStyles = requireOption(objectRepo, 'modelOfStyles');
    return function(req, res, next) {
        modelOfStyles.findOne({nev: req.params.stylenev}, (err, style) => {
            if (err || !style) {
                return next({err: err});
            }
            res.locals.style = style;
            return next();
        });

    };
};