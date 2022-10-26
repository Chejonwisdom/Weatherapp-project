/* -------------------------------------------------------
   Function for getting weather information
   ------------------------------------------------------- */

function weatherBalloon() {
  var key = 'e35ca5623af73c61e78b08a4d03a4462';
  var lat = '40.759296';
  var lon = '-73.985573';
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    drawWeather(data);
    console.log(data);
  })
  .catch(function() {
    // catch any errors
  });
}


/* -------------------------------------------------------
   Function for display weather information
   ------------------------------------------------------- */

function drawWeather( d ) {

  // placeholder div for testing output
  //$('.weather').html(d.current.weather[0].description);
    //$('.brand p span').html(d.timezone);
      //$('.current-temp p').html(convertTemp(d.current.temp));
        //$('.current-desc p').html(d.current.weather[0].description);
        //$('.current-image').html(printbg(d.current.weather[0].description);
         // $('.current-desc').html(printMessage(d.current.weather[0].description);



// when the button is clicked, add .slide class to the .cover element







 //$('.weather').html(d.current.weather[0].description);
    //$('.brand p span').html(d.timezone);
      $('.current-temp').html(convertTemp(d.current.temp));
        $('.margin .high p').html(convertTemp(d.daily[0].temp.max));
        $('.margin .low p').html(convertTemp(d.daily[0].temp.min));
        //$('.current-image').html(printbg(d.current.weather[0].description));
         $('.current-desc').html(d.current.weather[0].description);
         $('.current-img').html(printGraphic(d.current.weather[0].description));






        //forcast for day 1

          $('.extended-forecast li:nth-child(1) .day').html( displayDay(1) );
          $('.extended-forecast li:nth-child(1) .desc').html( d.daily[1].weather[0].description );
          $('.extended-forecast li:nth-child(1) .highh').html(convertTemp(d.daily[1].temp.max));;
          $('.extended-forecast li:nth-child(1) .loww').html(convertTemp(d.daily[1].temp.min));




          //forcast for day 2

          $('.extended-forecast li:nth-child(2) .day').html( displayDay(2) );
          $('.extended-forecast li:nth-child(2) .desc').html( d.daily[2].weather[0].description );
          $('.extended-forecast li:nth-child(2) .highh').html(convertTemp(d.daily[2].temp.max));;
          $('.extended-forecast li:nth-child(2) .loww').html(convertTemp(d.daily[2].temp.min));
             //forcast for day 3

          $('.extended-forecast li:nth-child(3) .day').html( displayDay(3) );
          $('.extended-forecast li:nth-child(3) .desc').html( d.daily[3].weather[0].description );
          $('.extended-forecast li:nth-child(3) .highh').html(convertTemp(d.daily[3].temp.max));;
          $('.extended-forecast li:nth-child(3) .loww').html(convertTemp(d.daily[3].temp.min));
             //forcast for day 4

          $('.extended-forecast li:nth-child(4) .day').html( displayDay(4) );
          $('.extended-forecast li:nth-child(4) .desc').html( d.daily[4].weather[0].description );
          $('.extended-forecast li:nth-child(4) .highh').html(convertTemp(d.daily[4].temp.max));;
          $('.extended-forecast li:nth-child(4) .loww').html(convertTemp(d.daily[4].temp.min));
             //forcast for day 5

          $('.extended-forecast li:nth-child(5) .day').html( displayDay(5) );
          $('.extended-forecast li:nth-child(5) .desc').html( d.daily[5].weather[0].description );
          $('.extended-forecast li:nth-child(5) .highh').html(convertTemp(d.daily[5].temp.max));;
          $('.extended-forecast li:nth-child(5) .loww').html(convertTemp(d.daily[5].temp.min));
             //forcast for day 6

          $('.extended-forecast li:nth-child(6) .day').html( displayDay(6) );
          $('.extended-forecast li:nth-child(6) .desc').html( d.daily[6].weather[0].description );
          $('.extended-forecast li:nth-child(6) .highh').html(convertTemp(d.daily[6].temp.max));;
          $('.extended-forecast li:nth-child(6) .loww').html(convertTemp(d.daily[6].temp.min));




}


/* --------------------------------------------------
   Event to get weather information when page loads
   -------------------------------------------------- */

window.onload = function() {
  weatherBalloon();
}




$('button').click(function(){
  console.log('help');
  $('.cover').addClass('slide');
})










// when the secondaery heading is clicked, remove .slide class


//$('.content h2').click(function(){
  //$('.cover').removeClass('slide');
//})








