app.factory('colleges_service', function ($http) {
  return {
    studentParameters: {},
    all: function() {
      return $http.get('/api/colleges');
    },
    names: function(){
      return $http.get('/api/colleges/names')
    },
    states: function(){
      return $http.get('api/colleges/states')
    },
    enrollment: function(){
      return $http.get('api/colleges/enrollment')
    },
    admissions: function(){
      return $http.get('api/colleges/admissions')
    },
    mensSports: function(){
      return $http.get('api/colleges/mensSports')
    },
    womensSports: function(){
      return $http.get('api/colleges/womensSports')
    },
    division: function(){
      return $http.get('api/colleges/division')
    },
    getSports: function(gender){
      return $http.get('api/colleges/sports/' + gender)
    },
    getDivision: function(gender, sport){
      return $http.get('api/colleges/division/' + gender + '/' + sport)
    },
    getEnrollment: function(sportId){
      return $http.get('api/colleges/enrollment/' + sportId)
    },
    getSelectivity: function(lowerEnrollment, upperEnrollment, sportId){
      return $http.get('api/colleges/selectivity/' + lowerEnrollment + '/' + upperEnrollment + '/' + sportId)
    },
    getLocation: function(lowerEnrollment, upperEnrollment, sportId, selectivity){
      return $http.get('api/colleges/location/' + lowerEnrollment + '/' + upperEnrollment + '/' + sportId + '/' + selectivity)
    },
    getResults: function(lowerEnrollment, upperEnrollment, sportId, selectivity, state){
      return $http.get('api/colleges/results/' + lowerEnrollment + '/' + upperEnrollment + '/' + sportId + '/' + selectivity + '/' + state)
    }
  }
})
// these will take in parameters and pass those into the get request
