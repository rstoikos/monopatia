var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  });
});

router.get('/paths', function(req, res){
  res.render('paths', {
    title: 'Pelion-paths'
  });
});

router.get('/contact', function(req, res){
  res.render('contact', {
    title: 'Contact'
  });
});

router.get('/map', function(req, res){
  res.sendfile(__dirname + '/public/map.html');
});

router.get('/tsagarada', function(req, res){
  res.sendfile(__dirname + '/public/tsagarada.html');
});


module.exports = router;

