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
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                let p3 = document.createElement('p');
                let p4 = document.createElement('p');
                let p5 = document.createElement('p');

                //add json to elements (assigning the data)
                p1.textContent = directory[i].name;
                p2.textContent = directory[i].organization;
                p3.textContent = "Address1" + directory[i].address1;
                p4.textContent = "Address2" + directory[i].address2;
                p5.textContent = "Phone" + directory[i].phone;

                //attributes
                bdirectory.setAttribute('class', 'bdirectory');
                p1.setAttribute('class', 'p1');
                p2.setAttribute('class', 'p2');
                p3.setAttribute('class', 'p3');
                p4.setAttribute('class', 'p4');
                p5.setAttribute('class', 'p5');

                //organize elements to create card
                ulist.appendChild(bdirectory);
                ulist.appendChild(p1);
                ulist.appendChild(p2);
                ulist.appendChild(p3);
                ulist.appendChild(p4);
                ulist.appendChild(p5);

                document.querySelector('div.bdirectory')
            
            }
        });