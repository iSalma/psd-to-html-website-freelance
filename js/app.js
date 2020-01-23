/*****************counter************/

$(document).ready(function() {

    var counters = $(".counting");
    var countersQuantity = counters.length;
    var counterr = [];
  
    for (i = 0; i < countersQuantity; i++) {
      counterr[i] = parseInt(counters[i].innerHTML);
    }
  
    var count = function(start, value, id) {
      var localStart = start;
      setInterval(function() {
        if (localStart < value) {
          localStart++;
          counters[id].innerHTML = localStart;
        }
      }, 40);
    }
  
    for (j = 0; j < countersQuantity; j++) {
      count(0, counterr[j], j);
    }
  });

/***********************************/
/*************************************
 * FLIP BOOK
 ************************************/
$('.scene')
.on('click', '#nextBtn', prevPage )
.on('click', '#prevBtn', nextPage);

function nextPage() {
    
  $('.flipped')
    .last()
    .removeClass('flipped')
    .addClass('active')
    .siblings('.page')
    .removeClass('active');
}
function prevPage() {
  $('.active')
    .removeClass('active')
    .addClass('flipped')
    .next('.page')
    .addClass('active')
    .siblings();
}

document.addEventListener("keydown" , function(e){

    if(e.keyCode == 39)
    {
        prevPage();
    }
    else if(e.keyCode == 37)
    {
        nextPage();
    }
})

/*************************************
 * END FLIP BOOK
 ************************************/

 /*************************************
 * CONTACT US MAP
 ************************************/

mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWRndWFuIiwiYSI6ImNpcG50N2s4NDAwNGRmbG5jeXZtMHkxMW4ifQ.ubiXybBxhpidF83H-Zvz7Q';

if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(position => {
        var map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9',
            center: [46.738586, 24.774265], /**change center as you want (long,lat) */
            zoom: 7
        });
        map.addControl(new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true,
            showUserLocation: true
        }));
    });
} else { /* geolocation IS NOT available, handle it */
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [0, 0],
        zoom: 2
    });
}

/*************************************
 *  END CONTACT US  MAP
 ************************************/
