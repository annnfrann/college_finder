app.factory('pirates_service', function ($http) {
  return {
    all: function() {
      return $http.get('/api/pirates');
    }
  }
})
