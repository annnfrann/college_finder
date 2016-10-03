app.factory('colleges_service', function ($http) {
  return {
    all: function() {
      return $http.get('/api/colleges');
    },

    names: function(){
      return $http.get('/api/colleges/names')
    }
  }
})
