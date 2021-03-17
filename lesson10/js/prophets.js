const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    
    const prophets = jsonObject['prophets'];
    console.log(prophets);
    for (let i = 0; i < prophets.length; i++) {


     

      //add paragraphs <p> for field items and an image <img>.
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let h4 = document.createElement('h4');
      let h4_1 = document.createElement('h4');
      let image = document.createElement('img');
      h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      h4.textContent = "Birthdate: " + prophets[i].birthdate;
      h4_1.textContent = "Birthplace: " + prophets[i].birthplace;

      card.appendChild(h2);
      card.appendChild(h4);
      card.appendChild(h4_1);
      card.appendChild(image);
      document.querySelector('div.cards').appendChild(card);

      image.setAttribute('src', prophets[i].imageurl);
    }
  });

  let pimg = document.createElement('img');

  //use template literals
  pimg.style.boxShadow = '0 0 30px #333';
  pimg.style.width = '200px';