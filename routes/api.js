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
// router.get('/names', function(req, res, next){
//   Queries.names().then(function(college_names){
//     res.json(college_names)
//   })
// })
// router.get('/states', function(req, res, next){
//   Queries.states().then(function(college_states){
//     res.json(college_states)
//   })
// })
// router.get('/enrollment', function(req, res, next){
//   Queries.enrollment().then(function(enrollment){
//     res.json(enrollment)
//   })
// })
router.get('/admissions', function(req, res, next){
  Queries.admissions().then(function(admissions){
    res.json(admissions)
  })
})
// router.get('/mensSports', function(req, res, next){
//   Queries.mensSports().then(function(mensSports){
//     res.json(mensSports)
//   })
// })
// router.get('/womensSports', function(req, res, next){
//   Queries.womensSports().then(function(womensSports){
//     res.json(womensSports)
//   })
// })
router.get('/sports/:gender', function(req, res, next){
  Queries.getSports(req.params.gender).then(function(genderSports){
    res.json(genderSports)
  })
})
// router.get('/division', function(req, res, next){
//   Queries.division().then(function(division){
//     res.json(division)
//   })
// })
router.get('/division/:gender/:sport', function(req, res, next){
  Queries.getDivision(req.params.gender, req.params.sport).then(function(divisions){
    res.json(divisions)
  })
})
router.get('/enrollment/:sportId', function(req, res, next){
  Queries.getEnrollment(req.params.sportId).then(function(enrollments){
    res.json(enrollments)
  })
})
router.get('/selectivity/:lowerEnrollment/:upperEnrollment/:sportId', function(req, res, next){
  Queries.getSelectivity(req.params.lowerEnrollment, req.params.upperEnrollment, req.params.sportId).then(function(selectivity){
    res.json(selectivity)
  })
})
router.get('/location/:lowerEnrollment/:upperEnrollment/:sportId/:selectivity', function(req, res, next){
  Queries.getLocation(req.params.lowerEnrollment, req.params.upperEnrollment, req.params.sportId, req.params.selectivity).then(function(locations){
    res.json(locations)
  })
})
router.get('/results/:lowerEnrollment/:upperEnrollment/:sportId/:selectivity/:state', function(req, res, next){
  Queries.getResults(req.params.lowerEnrollment, req.params.upperEnrollment, req.params.sportId, req.params.selectivity, req.params.state.split(".")).then(function(results){
    res.json(results)
  })
})
router.get('/test', function(req, res, next){
  Queries.getResults(1500, 2000, 3, "competetive", "Michigan").then(function(results){
    res.json(results)
  })
})

module.exports = router;
