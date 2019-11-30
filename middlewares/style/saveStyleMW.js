/*elmenti a stílussal kapcsolatos változásokat*/

const requireOption = require('../requireOption');
module.exports = function (objectRepo){
    const modelOfStyles = requireOption(objectRepo, 'modelOfStyles');
    return function(req, res, next){
        if(
            typeof req.body.nev === 'undefined'
        ){
            return next();
        }
        if(typeof res.locals.style === 'undefined'){
            res.locals.style = new modelOfStyles();
        }

        res.locals.style.nev = req.body.nev;

        res.locals.style.save(err =>{
            if(err){
                return next({err: err});
            }

            return res.redirect('/style');
        });

    };
};