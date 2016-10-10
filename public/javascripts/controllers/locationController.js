app.controller('locationController', function($scope, colleges_service){
  $scope.view = {}

  colleges_service.getLocation(colleges_service.studentParameters.lowerEnrollment, colleges_service.studentParameters.upperEnrollment, colleges_service.studentParameters.sportId, colleges_service.studentParameters.selectivity).then(function(locations){
    $scope.view.locations = locations.data
  })

  $scope.getLocation = function(location){
    // could eventually do a thing where colleges_service.studentParameters.state is an array, and you just push the values into it
    colleges_service.studentParameters.state = location
  }

  // map code below
  var map = AmCharts.makeChart( "chartdiv", {
    "type": "map",
    "theme": "light",

    "panEventsEnabled": true,
    //"backgroundColor": "#666666",
    //"backgroundAlpha": 1,
    "dataProvider": {
      "map": "usaLow",
      "getAreasFromMap": true
    },
    "areasSettings": {
      "autoZoom": false,
      "color": "#CDCDCD",
      "colorSolid": "#5EB7DE",
      "selectedColor": "#5EB7DE",
      "outlineColor": "#666666",
      "rollOverColor": "#88CAE7",
      "rollOverOutlineColor": "#FFFFFF",
      "selectable": true
    },
    "listeners": [ {
      "event": "clickMapObject",
      "method": function( event ) {
        // deselect the area by assigning all of the dataProvider as selected object
        map.selectedObject = map.dataProvider;

        // toggle showAsSelected
        event.mapObject.showAsSelected = !event.mapObject.showAsSelected;

        // bring it to an appropriate color
        map.returnInitialColor( event.mapObject );

        // let's build a list of currently selected states
        var states = [];
        for ( var i in map.dataProvider.areas ) {
          var area = map.dataProvider.areas[ i ];
          if ( area.showAsSelected ) {
            states.push( area.title );
          }
        }
      }
    } ],
    "export": {
      "enabled": true
    }
  });


})
