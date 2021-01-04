//create lets for all actions that are required 
let city=" ";
let url=" ";
let APIkey=" ";
let queryURL =" ";
let newURL =" ";
let citiesDiv = document.getElementById("searched-cities");
let cities = [ ];
 
initialize();
listFunction();
searchFunction();

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

