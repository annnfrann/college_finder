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
      $http.get('api/colleges/selectivity')
    },
    mensSports: function(){
      $http.get('api/colleges/mensSports')
    },
    womensSports: function(){
      $http.get('api/colleges/womensSports')
    }
  }
})
