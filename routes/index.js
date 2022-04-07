var express = require('express');
var Downloader = require('mt-files-downloader');
var router = express.Router();
var path = require('path');
var os = require('os');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
