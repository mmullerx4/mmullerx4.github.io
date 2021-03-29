const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    
    const towndata = jsonObject['towndata'];
    for (let i = 0; i < towndata.length; i++) {


     

      //add paragraphs <p> for field items and an image <img>.
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let image = document.createElement('img');
      h2.textContent = towndata[i].name + ' ' + towndata[i].lastname;

      card.appendChild(h2);
      card.appendChild(image);
      document.querySelector('div.cards').appendChild(card);

      image.setAttribute('src', towndata[i].imageurl);
    }
  });