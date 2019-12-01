/*elmenti a változtatásokat a zenékkel kapcsolatban*/
const requireOption = require('../requireOption');
module.exports = function (objectRepo){
    const modelOfMusics =  requireOption(objectRepo, 'modelOfMusics');
    return function(req, res, next){
        if(
            typeof req.body.eloado === 'undefined' ||
            typeof req.body.cim === 'undefined' ||
            typeof req.body.megjegyzes === 'undefined'
            //typeof res.locals._stilus === 'undefined'
        ){
            return next();
        }

        if(typeof  res.locals.music === 'undefined'){
            res.locals.music = new modelOfMusics();
        }

        res.locals.music.eloado = req.body.eloado;
        res.locals.music.cim = req.body.cim;
        res.locals.music.lejatszas = req.body.lejatszas;
        res.locals.music.megjegyzes = req.body.megjegyzes;

        res.locals.music.stilus = req.body.style;

        res.locals.music.save(err => {
            if(err){
                return next({err: err});
            }
            return res.redirect("/style");
            //return res.redirect(`/style/${res.locals.styles._id}`);
        });


    };
};
