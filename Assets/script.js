// user input
city = $('#searchOption').val();

searchCity = []

// API key 
var apiKey = "&appid=b63a4d4a08ab8180b775d0f57ddfe7a5";


$('#searchBtn').on('click', function(e){
    e.preventDefault();

    // console log for city input
    city = $('#searchOption').val();
    console.log(city);
    showCurrent();
    // clear search box
$("#searchOption").val("");


})



function showCurrent(){
    
    var queryUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey;

    fetch(queryUrl)
    .then(response => response.json())
    .then(data => console.log(data));
}
    



