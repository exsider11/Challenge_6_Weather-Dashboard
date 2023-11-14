var tempID = document.getElementById("temp")
var windID = document.getElementById("wind")
var humidID = document.getElementById("humid")

var tempInfo;
var dayTemp1;
var dayTemp2;
var dayTemp3;
var dayTemp4;
var dayTemp5;

var windInfo;
var dayWind1;
var dayWind2;
var dayWind3;
var dayWind4;
var dayWind5;

var humidInfo;
var dayHumid1;
var dayHumid2;
var dayHumid3;
var dayHumid4;
var dayHumid5;

var time1;
var time2;
var time3;
var time4;
var time5;

var lat = 33.748997;
var long = -84.3902644;
var city = "Atlanta";


function setWebpage(city){
    h2Info.innerText = city + " " + time
    tempID.innerText = "Temperature: "+Math.round(tempInfo);
    windID.innerText = "Wind: "+ windInfo;
    humidID.innerText = "Humid: " + humidInfo;
    timer1.innerText = time1;
    temp1.innerText = "Temperature: "+Math.round(dayTemp1);
    wind1.innerText = "Wind: "+ dayWind1;
    humid1.innerText = "Humid: " + dayHumid1;
    timer2.innerText = time2;
    temp2.innerText = "Temperature: "+Math.round(dayTemp2);
    wind2.innerText = "Wind: "+ dayWind2;
    humid2.innerText = "Humid: " + dayHumid2;
    timer3.innerText = time3;
    temp3.innerText = "Temperature: "+Math.round(dayTemp3);
    wind3.innerText = "Wind: "+ dayWind3;
    humid3.innerText = "Humid: " + dayHumid3;
    timer4.innerText = time4;
    temp4.innerText = "Temperature: "+Math.round(dayTemp4);
    wind4.innerText = "Wind: "+ dayWind4;
    humid4.innerText = "Humid: " + dayHumid4;
    timer5.innerText = time5;
    temp5.innerText = "Temperature: "+Math.round(dayTemp5);
    wind5.innerText = "Wind: "+ dayWind5;
    humid5.innerText = "Humid: " + dayHumid5;
}

function getApiWeather(lat,long){
    var requestURL = 'https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+long+'&appid=886f3f4f8785854297f7a562176e6a41';
    fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        console.log(data)
        tempInfo = (data.list[3].main.temp - 273.15) * 9/5 + 32;
        dayTemp1 = (data.list[7].main.temp - 273.15) * 9/5 + 32;
        dayTemp2 = (data.list[15].main.temp - 273.15) * 9/5 + 32;
        dayTemp3 = (data.list[23].main.temp - 273.15) * 9/5 + 32;
        dayTemp4 = (data.list[31].main.temp - 273.15) * 9/5 + 32;
        dayTemp5 = (data.list[39].main.temp - 273.15) * 9/5 + 32;

        windInfo = data.list[3].wind.speed + " MPH";
        dayWind1 = data.list[7].wind.speed + " MPH";
        dayWind2 = data.list[15].wind.speed + " MPH";
        dayWind3 = data.list[23].wind.speed + " MPH";
        dayWind4 = data.list[31].wind.speed + " MPH";
        dayWind5 = data.list[39].wind.speed + " MPH";

        humidInfo = data.list[3].main.humidity + "%";
        dayHumid1 = data.list[7].main.humidity + "%";
        dayHumid2 = data.list[15].main.humidity + "%";
        dayHumid3 = data.list[23].main.humidity + "%";
        dayHumid4 = data.list[31].main.humidity + "%";
        dayHumid5 = data.list[39].main.humidity + "%";

        time1 = data.list[7].dt_txt;
        time2 = data.list[15].dt_txt;
        time3 = data.list[23].dt_txt;
        time4 = data.list[31].dt_txt;
        time5 = data.list[39].dt_txt;

        time = data.list[3].dt_txt;
        setWebpage(data.city.name);
    })
}

function getApiLocation(city){
    var requestURL = 'http://api.openweathermap.org/geo/1.0/direct?q='+city+'&limit=1&appid=886f3f4f8785854297f7a562176e6a41'
    fetch(requestURL)
    .then(function(reponse){
        return reponse.json();
    })
    .then(function(data){
        console.log(data)
        var latitude = data[0].lat;
        var longitude = data[0].lon;
        getApiWeather(latitude,longitude)
    })
}

getApiLocation(city)
search.addEventListener("click",function(){
    var cityInput = document.getElementById('cityInput').value;
    getApiLocation(cityInput)
})


Atlanta.addEventListener("click", function(){
    getApiLocation("Atlanta")
})
Denver.addEventListener("click", function(){
    getApiLocation("Denver")
})
Seattle.addEventListener("click", function(){
    getApiLocation("Seattle")
})
SanFrancisco.addEventListener("click", function(){
    getApiLocation("San Francisco")
})
Orlando.addEventListener("click", function(){
    getApiLocation("Orlando")
})
NewYork.addEventListener("click", function(){
    getApiLocation("New York")
})
Chicago.addEventListener("click", function(){
    getApiLocation("Chicago")
})
Austin.addEventListener("click", function(){
    getApiLocation("Austin")
})