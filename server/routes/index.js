let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();
let Book = require('../models/book');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About'});
});

/* GET projects page. */
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'project'});
});

/* GET Services page. */
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'service'});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});

module.exports = router;
