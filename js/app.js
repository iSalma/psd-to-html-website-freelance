/*****************counter************/

$(window).on('scroll', function() { 
    if ($(window).scrollTop()>= $( 
      '#counterjs').offset().top + $('#counterjs'). 
        outerHeight() - window.innerHeight) { 
        
            var counters = $(".counting");
            var countersQuantity = counters.length;
            var counter = [];
          
            for (i = 0; i < countersQuantity; i++) {
              counter[i] = parseInt(counters[i].innerHTML);
            }    
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
            count(0, counter[j], j);
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
var myImages = Array.from(document.querySelectorAll(".containContact .contactImg"));
var lightboxContainer = document.querySelector(".lightbox-container");
var close = document.getElementById("close");
var next = document.getElementById("next");
var prev = document.getElementById("prev");

var nextOut = document.getElementById("nextOut");
var prevOut = document.getElementById("prevOut");

var currentImageIndex = 0;
for (var i = 0; i < myImages.length; i++) {
    myImages[i].addEventListener("click", showLightBox);
}

function showLightBox(e) {

    lightboxContainer.style.transform = "scale(1,1)";
    lightboxContainer.firstElementChild.style.transform="scale(1,1)";
    var imgSrc = e.target.src;

    currentImageIndex = myImages.indexOf(e.target);
    lightboxContainer.firstElementChild.style.backgroundImage = "url(" + imgSrc + ")";
}

function hideLightBox() {
    lightboxContainer.style.transform = "scale(0,0)";
    lightboxContainer.firstElementChild.style.transform="scale(0,0)";

}
close.addEventListener("click", hideLightBox);
next.addEventListener("click" , goNext);
prev.addEventListener("click" , goPrev);

nextOut.addEventListener("click" , goNextOut);
prevOut.addEventListener("click" , goPrevOut);

function goNext()
{
    currentImageIndex++;

    if(currentImageIndex == myImages.length)
    {
        currentImageIndex = 0;
    }

    lightboxContainer.firstElementChild.style.backgroundImage = "url(" + myImages[currentImageIndex].src + ")";

}

function goPrev()
{
    currentImageIndex--;
    if(currentImageIndex < 0)
    {
        currentImageIndex = myImages.length - 1;
    }

    lightboxContainer.firstElementChild.style.backgroundImage = "url(" + myImages[currentImageIndex].src + ")";

}
var imgOut=0;
function goNextOut(){
    for (var i = 0; i < myImages.length; i++) {
        if(myImages[i].style.display == "block"){
            imgOut = i;
        }
    }
    if(imgOut == myImages.length-1)
    {
        myImages[imgOut].style.display = "none";
        myImages[0].style.display = "block";
        imgOut = 0;
    }else{
        myImages[imgOut].style.display = "none";
        myImages[imgOut+1].style.display = "block";
    }
    
}

function goPrevOut(){
    for (var i = 0; i < myImages.length; i++) {
        if(myImages[i].style.display == "block"){
            imgOut = i;
        }
    }
    if(imgOut == 0)
    {
        myImages[imgOut].style.display = "none";
        myImages[myImages.length-1].style.display = "block";
        imgOut = myImages.length-1;
        
    }else{
        myImages[imgOut].style.display = "none";
        myImages[imgOut-1].style.display = "block";
    }

}

document.addEventListener("keydown" , function(e){

    if(e.keyCode == 39)
    {
        goNext();
    }
    else if(e.keyCode == 37)
    {
        goPrev();
    }
    else if(e.keyCode == 27)
    {
        hideLightBox();
    }

})

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
