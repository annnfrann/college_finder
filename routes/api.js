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
    res.json(college_names)
  })
})
router.get('/states', function(req, res, next){
  Queries.states().then(function(college_states){
    res.json(college_states)
  })
})
router.get('/enrollment', function(req, res, next){
  Queries.enrollment().then(function(enrollment){
    res.json(enrollment)
  })
})
router.get('/admissions', function(req, res, next){
  Queries.admissions().then(function(admissions){
    res.json(admissions)
  })
})
router.get('/mensSports', function(req, res, next){
  Queries.mensSports().then(function(mensSports){
    res.json(mensSports)
  })
})
router.get('/womensSports', function(req, res, next){
  Queries.womensSports().then(function(womensSports){
    res.json(womensSports)
  })
})
router.get('/division', function(req, res, next){
  Queries.division().then(function(division){
    res.json(division)
  })
})
router.get('/test', function(req, res, next){
  Queries.getEnrollment(3).then(function(results){
    res.json(results)
  })
})

module.exports = router;
