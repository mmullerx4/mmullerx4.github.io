fetch("coc.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

            const directory = jsonObject['directory'];
            //console.log(directory);
            for (let i = 0; i < directory.length; i++) {

                //create elememts (creates field to add information)

                let bdirectory = document.createElement('div');
                let ul = document.createElement('ul');
                let li1 = document.createElement('li');
                let li2 = document.createElement('li');
                let li3 = document.createElement('li');
                let li4 = document.createElement('li');
                let li5 = document.createElement('li');

                //add json to elements (assigning the data)
                li1.textContent = directory[i].name;
                li2.textContent = directory[i].organization;
                li3.textContent = "Address1" + directory[i].address1;
                li4.textContent = "Address2" + directory[i].address2;
                li4.textContent = "Phone" + directory[i].phone;

                //attributes
                bdirectory.setAttribute('class', 'bdirectory');
                ul.setAttribute('class', 'ulist');
                li1.setAttribute('class', 'li1');
                li2.setAttribute('class', 'li2');
                li3.setAttribute('class', 'li3');
                li4.setAttribute('class', 'li4');
                li5.setAttribute('class', 'li5');

                //organize elements to create card
                ulist.appendChild(bdirectory);
                ulist.appendChild(li1);
                ulist.appendChild(li2);
                ulist.appendChild(li3);
                ulist.appendChild(li4);
                ulist.appendChild(li5);

            
            }
        }