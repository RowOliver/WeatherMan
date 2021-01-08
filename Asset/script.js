//create lets for all actions that are required 
let city=" ";
let url=" ";
let APIkey="";


let queryURL =" ";
let newURL =" ";
let citiesDiv = document.getElementById("searched-cities");
let cities = [ ];
 
initialize();
listFunction();
searchFunction();

//all the functions that are needed to make it move 
function initialize() {
  let saved_cities = JSON.parse(localStorage.getItem("cities"));
  if (saved_cities !== null){
    cities = saved_cities
  }

  rendernewButtons();
}

function storeCities(){
  localStorage.setItem("cities", JSON.stringify(cities));
}

function rendernewButtons(){
  citiesDiv.innerHTML = " ";
  if(cities == null){
    return;
  }
  let newCities = [...new Set(cities)];
  for(let i=0; i < newCities.length; i++) {
    let cityName = newCities[i];

    let newButton = document.createElement("button");
    newButton.textContent = cityName;
    newButton.setAttribute("class", "list-button");

    citiesDiv.appendChild(newButton);;
    listFunction();
  }

}

function listFunction() {
  $(".list-button").on("click", function(event){
    event.preventDefault();
    city = $(this).text().trim();
    twoCalls();

  })
}

function searchFunction() {
  $("#search-button").on("click", function(event) {
    event.preventDefault();
    city = $(this).prev().val().trim()

    cities.push(city);
    if(cities.length > 8){
      cities.shift()
    }
    if(cities == " "){
      return;
    }
    twoCalls();
    storeCities();
    rendernewButtons();

  })
  console.log(cities);
}
//call the api
function twoCalls(){

  url = "https://api.openweathermap.org/data/2.5/weather?q=";
  newURL = "https://api.openweathermap.org/data/2.5/weather?q=";
  APIkey = "cfbaa5f2a80aea0327fb725749599ac5";


  queryURL = url + city + APIkey;
    current_weather_url = newURL + city + APIkey;

    $("#city-name").text("Today's Weather in" + city);
    $.ajax({
      url: queryURL,
      method: "GET",

    }).then(function(response){

      let currentDay_number = 0;

      for(let i=0; i< response.list.length; i++){
        if(response.list[i].dt_text.split(" ")[1] == "15:00:00")
        {
          let currentDay = response.list[i].dt_text.split("-")[2].split(" ")[0];
          let currentMonth = response.list[1].dt_text.split("-")[1];
          let currentYear = response.list[i].dt_text.split("-")[0]; 
          $("#" == currentDay_number + "date").text(currentMonth + "/" + currentDay + "/" + currentYear);
          let temp = Math.round(((response.list[1].main.temp - 273.15) *9/5+32));
          $("#" + currentDay_number + "forecast-temp").text("Temp:" + temp + String.fromCharCode(176)+"F");
          $("#" + currentDay_number + "forecast-humidity").text("Humidity:" + response.list[i].main.humidity);
          $("#" + currentDay_number + "forecast-wind").text("Wind Speed:" + response.list[i].wind.speed);
          $("#" + currentDay_number + "forecast-icon").attr("src", "http://openweathermap.org/img/w/" + response.list[1].weather[0].icon + "png" );

        }
      }



    });

    $.ajax({
      url: current_weather_url,
      method: "GET",

    }).then(function(current_data){
      let temp = Math.round(((current_data.main.temp - 273.15) * 9/5 + 32))
      $("#current-temp").text("Temperature: " + temp + String.fromCharCode(176)+"F");
      $("#current-humidity").text("Humidity: " + current_data.main.humidity);
      $("#current-windspeed").text("Wind Speed: " + current_data.wind.speed);
      $("#icon-div").attr({"src": "http://openweathermap.org/img/w/" + current_data.weather[0].icon + ".png",
       "height": "150px", "width":"150px"});
     })
 }



