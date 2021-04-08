let apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=5fd8fde588cf618ac179af2d49411b66";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const temperature = document.querySelector('#temperature');

    document.getElementById('current-temp').textContent = jsObject.main.temp;
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
    const desc = jsObject.weather[0].description; // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  });

apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=5fd8fde588cf618ac179af2d49411b66&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const forecast = jsObject.list.filter(item => item.dt_txt.includes("18:00:00"));
    console.log(forecast);
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for (let i = 0; i < forecast.length; i++) {
      let date = new Date(forecast[i].dt_txt);

      //creating the elements
      let div = document.createElement('div');
      let h5 = document.createElement('h5');
      let img = document.createElement('img');
      let p = document.createElement('p');
      //filling content of elements
      const imagesrc = 'https://openweathermap.org/img/w/' + forecast[i].weather[0].icon + '.png'; // note the concatenation
      p.textContent = forecast[i].main.temp;
      img.setAttribute('src', imagesrc);
      img.setAttribute('alt', forecast[i].weather[0].description);

      h5.textContent = weekDays[date.getDay()];
      //organize elements in proper parent/child order under div
      div.appendChild(h5);
      div.appendChild(img);
      div.appendChild(p);
      //put the forecast into the section (parent of div)
      document.getElementById('forecast').appendChild(div);
    }

  });

  