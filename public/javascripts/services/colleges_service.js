app.factory('colleges_service', function ($http) {
  return {
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
    selectivity: function(){
      return $http.get('api/colleges/selectivity')
    },
    mensSports: function(){
      return $http.get('api/colleges/mensSports')
    },
    womensSports: function(){
      return $http.get('api/colleges/womensSports')
    },
    division: function(){
      return $http.get('api/colleges/division')
    }
  }
})
