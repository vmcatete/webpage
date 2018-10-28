var Contact = function () {

    return {
        
        //Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				lat: 35.771064,
				lng: -78.673182
			  });
			   var marker = map.addMarker({
   				lat: 35.771064,
   				lng: -78.673182,
		            title: 'The Center for Educational Informatics'
		        });
			});
        }

    };
}();