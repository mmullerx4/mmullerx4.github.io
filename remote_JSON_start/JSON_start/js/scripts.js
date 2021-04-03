//ADD the key and change units to imperial
const apiURL = "api.openweathermap.org/data/2.5/weather?id=5816861&appid=5fd8fde588cf618ac179af2d49411b66&units=imperial"

//Go fetch it and then wait for a response.
//weatherInfo can be any name you want.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    
    //place will be the name & weatherInfo comes from the then statement
    document.getElementById('place').innerHTML="weatherInfo",name;

 }); //end of "then" fat arrow function



