/*a paraméterben kapott oldalt rendereli ki*/

const requireOption = require('../requireOption');

module.exports = function(objectrepository, viewName) {
    return function(req, res) {
        res.render(viewName, res.locals);
        //res.end('foo');
    };
};
