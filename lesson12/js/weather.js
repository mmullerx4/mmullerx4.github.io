let apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=42.4567&lon=83.9463&exclude=minutely&appid=5fd8fde588cf618ac179af2d49411b66";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const onecall = jsObject.list.filter(item => item.dt_txt.includes("15:00:00"));
  console.log(onecall);
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
for (let i = 0; i < onecall.length; i++) {
    let date = new Date(onecall[i].dt_txt);//check this

    //creating the elements
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let img = document.createElement('img');
    let p = document.createElement('p');
    //filling content of elements
    const imagesrc = 'https://openweathermap.org/img/w/' + onecall[i].weather[0].icon + '.png';
    p.textContent = oncecall[i].main.temp;
    img.setAttribute('src', imagesrc);
    img.setAttribute('alt', onecall[i].weather[0].description);

    h3.textContent = weekDays[date.getDay()];
    //organize elements
    div.appendChild(h3);
    div.appendChild(img);
    div.appendChild(p);
    //put the forecast into the section
    document.getElementById('onecall').appendChild(div);
    
}

});