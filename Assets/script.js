// user input
// var city = document.getElementById('searchOption').value



// API key 
var apiKey = "&appid=b63a4d4a08ab8180b775d0f57ddfe7a5";


$('#searchBtn').on('click', function(e){
    var city = document.getElementById('searchOption').value
    var searchCity = []
    var listItem = $("<li>").addClass("list-group-item").text(city);
    //  SPLIT STRING
    e.preventDefault();

    // var pastCity = JSON.parse(localStorage.getItem("city"));
    // if(pastCity){
    //     pastCity.map(item => searchCity.push(item));
    //     searchCity.push(city)
    //     searchCity.map( item => document.getElementById('pastCities').append(listItem))
    //     localStorage.setItem("city", JSON.stringify(searchCity))
    // } else{
    //     searchCity.push(city)
    //     localStorage.setItem("city", JSON.stringify(searchCity))
    // }

    showCurrent(city);

    show5Day(city);
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
    
};

// 5 day weather

function show5Day(city){
    var city = document.getElementById('searchOption').value
    var multiDayUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + apiKey;

    fetch(multiDayUrl)
    .then(data => data.json())
    .then(data => { 
        pullForecast(data);
        console.log(data)
    });
}

// for loop to cycle through forecast
// for (let i = 0; i < data.length; i+= 8) {
//     pullForecast();
    
// }


function pullForecast( data) {

    var temp1 = Math.round((data.list[0].main.temp)-273.15)*1.8+32
    var temp2 = Math.round((data.list[1].main.temp)-273.15)*1.8+32
    var temp3 = Math.round((data.list[2].main.temp)-273.15)*1.8+32
    var temp4 = Math.round((data.list[3].main.temp)-273.15)*1.8+32
    var temp5 = Math.round((data.list[4].main.temp)-273.15)*1.8+32
    var fDate = new Date

// first day
    document.getElementById('ftemp').innerText = "Temp: " + temp1;
    document.getElementById('fdate').innerText = data.list[0].dt_txt
    document.getElementById('fhumidity').innerText = "Humidity: " + data.list[0].main.humidity + "%";
// second day
    document.getElementById('ftemp1').innerText = "Temp: " + temp2;
    document.getElementById('fdate1').innerText = data.list[6].dt_txt
    document.getElementById('fhumidity1').innerText = "Humidity: " + data.list[1].main.humidity + "%";
// third day
    document.getElementById('ftemp2').innerText = "Temp: " + temp3;
    document.getElementById('fdate2').innerText = data.list[14].dt_txt
    document.getElementById('fhumidity2').innerText = "Humidity: " + data.list[2].main.humidity + "%";
// fourth day
    document.getElementById('ftemp3').innerText = "Temp: " + temp4;
    document.getElementById('fdate3').innerText = data.list[22].dt_txt
    document.getElementById('fhumidity3').innerText = "Humidity: " + data.list[3].main.humidity + "%";
// fifth day
    document.getElementById('ftemp4').innerText = "Temp: " + temp5;
    document.getElementById('fdate4').innerText = data.list[30].dt_txt
    document.getElementById('fhumidity4').innerText = "Humidity: " + data.list[4].main.humidity + "%";


    $("#forecast").attr(
        "style",
        "background-color: navy; color:white"
    );
    $("#forecast1").attr(
        "style",
        "background-color: navy; color:white"
    );
    $("#forecast2").attr(
        "style",
        "background-color: navy; color:white"
    );
    $("#forecast3").attr(
        "style",
        "background-color: navy; color:white"
    );
    $("#forecast4").attr(
        "style",
        "background-color: navy; color:white"
    );
}

