//Nicescroll
$(document).ready(function() {  
    $("html").niceScroll({
        cursorcolor: "#00a47a",
        cursorwidth: "5px",
        cursorborder: "1px solid #00a47a",
        cursorborderradius: "5px"
    });
//    $(".owl-carousel").owlCarousel();
});

//smooth scroll
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

//circular progress
$('#photo').circleProgress({
        value: 0.85,
        size: 150,
        fill: {
            color:"#00a47a"
        },
        thickness:4
    }).on('circle-animation-progress',function(event,progress){
    $(this).find('span').html(parseInt(85*progress)+'<i>%</i>')
});
    
$('#ilst').circleProgress({
        value: 0.85,
        size: 150,
        fill: {
            color:"#00a47a"
        },
        thickness:4
    }).on('circle-animation-progress',function(event,progress){
    $(this).find('span').html(parseInt(85*progress)+'<i>%</i>')
});
 $('#seo').circleProgress({
        value: 0.85,
        size: 150,
        fill: {
            color:"#00a47a"
        },
        thickness:4
    }).on('circle-animation-progress',function(event,progress){
    $(this).find('span').html(parseInt(85*progress)+'<i>%</i>')
});
 $('#mrkt').circleProgress({
        value: 0.85,
        size: 150,
        fill: {
            color:"#00a47a"
        },
        thickness:4
    }).on('circle-animation-progress',function(event,progress){
    $(this).find('span').html(parseInt(85*progress)+'<i>%</i>')
});

// countup
var options ={
    useEasing : true, 
    useGrouping : true, 
    separator : ',', 
    decimal : '.', 
    prefix : '', 
    suffix : ''
};
var c1 = new CountUp("count1",0,150,0,2,options);
var c2 = new CountUp("count2",0,160,0,2,options);
var c3 = new CountUp("count3",0,25,0,2,options);
var c4 = new CountUp("count4",0,1200,0,2,options);
c1.start();
c2.start();
c3.start();
c4.start();

//isotope
$('.main-iso').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows'
});
// Isotope click function
$('.button-group button').click(function(){
	$('.button-group button').removeClass('is-checked');
	$(this).addClass('is-checked');

	var selector = $(this).attr('data-filter');
	$('.main-iso').isotope({
		filter: selector
	});
	return false;
});

//maps api
google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 11,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(40.6700, -73.9400), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#c0c8cb"
            },
            {
                "visibility": "on"
            }
        ]
    }
]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(40.6700, -73.9400),
                    map: map,
                    title: 'gmap'
                });
            }
