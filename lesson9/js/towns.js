//const requestUR = 'https://byui-cit230.github.io/weather/data/towndata.json';
const requestURL = './js/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    const allTowns = jsonObject['towns'];
    const towndata = allTowns.filter(item => item.name === "Fish Haven" || item.name === "Preston" ||
    item.name === "Soda Springs");
    console.log(towndata);
    for (let i = 0; i < towndata.length; i++) {


     
//create elements (creates field to add information)
      let homecard = document.createElement('section');
      let towncontent = document.createElement('div');
      let tTitle = document.createElement('div');
      let tData= document.createElement('div');
      let homeh2 = document.createElement('h2');
      let homeh3 = document.createElement('h3');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');
      let image = document.createElement('img');
     
      //add json data to elements (assigning the data)
      homeh2.textContent = towndata[i].name;
      homeh3.textContent = towndata[i].motto;
      p1.textContent = towndata[i].yearFounded;
      p2.textContent = towndata[i].currentPopulation;
      p3.textContent = towndata[i].averageRainfall;

      //Attributes
      homecard.setAttribute('class', 'homecard');
      towncontent.setAttribute('class', 'towncontent');
      tTitle.setAttribute('class', 't-title');
      tData.setAttribute('class', 't-data');
      homeh2.setAttribute('class', 'homeh2');
      homeh3.setAttribute('class', 'homeh3');
      p1.setAttribute('class', 'p1');
      p2.setAttribute('class', 'p2');
      p3.setAttribute('class', 'p3');
      image.setAttribute('src', 'images/' + towndata[i].photo);
      image.setAttribute('class', 'homeimg');

      //organize elements to create card
      tTitle.appendChild(homeh2);
      tTitle.appendChild(homeh3);
      tData.appendChild(p1);
      tData.appendChild(p2);
      tData.appendChild(p3);
      towncontent.appendChild(tTitle);
      towncontent.appendChild(tData);
      homecard.appendChild(towncontent);
      homecard.appendChild(image);
      

      document.querySelector('div.hometowns').appendChild(homecard);


    }
  });