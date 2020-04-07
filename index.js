const URL = 'http://api.openweathermap.org/data/2.5/weather?q=Jakarta,ID&appid=08c63bb12c5a4132f5d570f08f17872d';

fetch ('http://api.openweathermap.org/data/2.5/weather?q=Jakarta,ID&appid=08c63bb12c5a4132f5d570f08f17872d')
.then (response => {
    return response .json();
})

.then (data =>{
    console.log(data);


const {name,weather,wind,temperature} = data;

const dataWeather = `<div class = "col-sm-12 col-md-4">
<br> <br>
City Name : ${data.name},
<br>
Weather  : ${weather[0].main},
<br>
Wind : ${data.wind.speed} km/hour,
<br>
Coordinate : ${data.coord.lon}, ${data.coord.lat}
<br>
Humidity : ${data.main.humidity}%
<br>
Pressure : ${data.main.pressure} P
<br>
Temperature : ${data.main.temperature} K
</div>`

document.getElementById ('weather').innerHTML += dataWeather;
})