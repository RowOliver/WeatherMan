//use LET and CONST to get practice 
var apiKey = "b7dd65fc4ea96c384fa45ce37176529c";

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
}














































})

