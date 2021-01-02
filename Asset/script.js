//API key from weather place  
var apiKey = "cfbaa5f2a80aea0327fb725749599ac5";

$(document).ready(function( ){

    $("#search").on("click",function(){
      const citySearch =   $("#citySearch").val()
        
        currentWeather(citySearch)
        

    });

function dayRequest(){
  // series of requests for single and five day forecast 

  var city = $("#citySearch").val();
  var currentDayURL = "api.openweathermap.org/data/2.5/weather?q=" + city +  "&appid=" + APIkey;
  var fiveDayURL = "api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid= " + APIkey;
  console.log("citySearch");

// AJAX request, go GET 
$.ajax({
  url: currentDayURL,
  method: "GET"

}).then(function(response){
  //all the material that is going to be gotten from request 

  var currentDay = document.getElementById("currentDay");
  var currentDate = moment().format("MM/DD/YYYY");
  var iconCode = response.weather[0].icon;
  var iconURL = "http://openweathermap.org/img/w/" + iconcode + ".png";








  console.log(respone)
})

// UV fucntions 
function UVindex() {
  var uvURL = "http://api.openweathermap.org/data/2.5/uvi?lat=" + searchLat + "&lon=" + searchLong + "&appid=" + apiKey;
  console.log(uvUrl);


$.ajax({
  url: getuvURL,
  method: "GET",

}).then(function(response ){
  var uvI = response.value;

  console.log(response);
})
}

};














































})

