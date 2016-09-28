var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
var Queries = require('../lib/queries')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next){
  Queries.all().then(function(pirates){
    res.json(pirates)
  })
})

module.exports = router;
