// user input
// var city = document.getElementById('searchOption').value



// API key 
var apiKey = "&appid=b63a4d4a08ab8180b775d0f57ddfe7a5";


$('#searchBtn').on('click', function(e){
    var city = document.getElementById('searchOption').value
    var searchCity = []
    // var listItem = $("<li>").addClass("list-group-item").text(city); SPLIT STRING
    e.preventDefault();

    var pastCity = JSON.parse(localStorage.getItem("city"));
    if(pastCity){
        pastCity.map(item => searchCity.push(item));
        searchCity.push(city)
        searchCity.map( item => document.getElementById('pastCities'). append("<li>" + item + "</li>"))
        localStorage.setItem("city", JSON.stringify(searchCity))
    } else{
        searchCity.push(city)
        localStorage.setItem("city", JSON.stringify(searchCity))
    }

    showCurrent(city);
    // clear search box
$("#searchOption").val("");


});



function showCurrent(city){
    
    var queryUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey;

    fetch(queryUrl)
    .then(data => data.json())
    .then(data => { 
        pullWeather(data);
        console.log(data)
})
    
var multiDayUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + apiKey;

    fetch(multiDayUrl)
    // .then(data => data.json())
    .then(data => { 
        console.log(data)
    });
};


function pullWeather( d ) {

    var weathericon= d.weather[0].icon
    var fahrenheit = Math.round((d.main.temp)-273.15)*1.8+32
    var date = new Date;

    
    // document.getElementById('currentCity').innerText = d.weather[0].description;
	document.getElementById('temp').innerHTML = fahrenheit  + '&deg;';
    document.getElementById('location').innerText = d.name;
    document.getElementById('wind').innerHTML = "Wind Speed: " + d.wind.speed;
    document.getElementById('icon').src = "http://openweathermap.org/img/wn/" + weathericon + "@2x.png"
    document.getElementById('humidity').innerText = "Humidity: " + d.main.humidity + "%";
    document.getElementById('currentDate').innerHTML = date
    document.getElementById('forecast5D').innerHTML = d.dt

    for (let i = 6; i < forecast5D.length; i++) {
        
    }

    };

// 5 day weather

// function show5Day(d){
//     var multiDayUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + apiKey;

//     fetch(multiDayUrl)
//     // .then(data => data.json())
//     .then(data => { 
//         console.log(data)
//     })
//     document.getElementById('forecast5D').innerHTML = d.dt
    
// }