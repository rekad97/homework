var express = require('express');
var router = express.Router();
const app = express();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



const orderByMW = require('../middlewares/main/orderByMW');
const renderMW = require('../middlewares/main/renderMW');

const getMusicMW = require('../middlewares/music/getMusicMW');
const getMusicsMW = require('../middlewares/music/getMusicsMW');
const saveMusicMW = require('../middlewares/music/saveMusicMW');
const deleteMusicMW = require('../middlewares/music/deleteMusicMW');

const getStyleMW = require('../middlewares/style/getStyleMW');
const getStylesMW = require('../middlewares/style/getStylesMW');
const saveStyleMW = require('../middlewares/style/saveStyleMW');
const deleteStyleMW = require('../middlewares/style/deleteStyleMW');

const modelOfMusics = require('../models/music');
const modelOfStyles = require('../models/styles');

module.exports = function(app){
  const objectRepo = {
    modelOfMusics: modelOfMusics,
    modelOfStyles: modelOfStyles,
  }


    app.use('/music/new',
        saveMusicMW(objectRepo),
        renderMW(objectRepo, 'music_new_edit')
    );

    app.use('/music/edit/:music_id',
        getMusicMW(objectRepo),
        saveMusicMW(objectRepo),
        renderMW(objectRepo, 'music_new_edit')
    );
    app.get('/main',
        getMusicsMW(objectRepo),
        orderByMW(objectRepo),
        renderMW(objectRepo, 'index')
    );
    app.get('/style',
        getStylesMW(objectRepo),
        renderMW(objectRepo, 'styles')
    );
  app.get('/style/:style_id',
      getStyleMW(objectRepo),
      getMusicsMW(objectRepo),
      renderMW(objectRepo, 'style_music')
  );
    app.use('/styles/new',
        //getStylesMW(objectRepo),
        saveStyleMW(objectRepo),
        renderMW(objectRepo, 'style_edit_new')
    );

    app.get('/music/delete/:music_id',
        getMusicMW(objectRepo),
        deleteMusicMW(objectRepo),
        renderMW(objectRepo, 'style_edit_new')
    );

    app.get('/music/delete/:style_id',
        getStylesMW(objectRepo),
        deleteStyleMW(objectRepo)
    );
};
