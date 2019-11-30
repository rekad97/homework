/*egy darab zeneszámot kér le, pl törléshez vagy edit-hez*/
const requireOption = require('../requireOption');

module.exports = function (objectRepo) {
    const modelOfMusics = requireOption(objectRepo, 'modelOfMusics');
    return function (req, res, next) {
        modelOfMusics.findOne(
            {
                _id: req.params.musicid
            },

            (err, music) => {
                if (err || !music) {
                    return next({err: err});
                }
                res.locals.music = music;
                return next();
            }
        );

    };
};