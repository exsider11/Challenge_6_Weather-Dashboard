var cityInput = document.getElementById("input");
var lat = 25.761681;
var long = -80.191788;

function getApiWeather(){
    var requestURL = 'api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+long+'&appid=886f3f4f8785854297f7a562176e6a41';
    fetch(requestURL)
    .then(function(response){
        return response.json();
    })
    .then(function (data){
        console.log(data)
    })
    
}
getApiWeather()