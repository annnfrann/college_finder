var express = require('express');
var router = express.Router();
var knex = require('../db/knex')
var Queries = require('../lib/queries')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next){
  Queries.all().then(function(colleges){
    res.json(colleges)
  })
})
router.get('/names', function(req, res, next){
  Queries.names().then(function(college_names){
    console.log(college_names);
    res.json(college_names)
  })
})

module.exports = router;
