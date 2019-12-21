const requestURL = 'https://thorne-lauren.github.io/final/temples.json';

fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject);
        const temples = jsonObject['temples'];
        const seattle = temples[0];
        const la = temples[1];
        const atlanta = temples[2];
        const boston = temples[3];

        let ulSeattle = document.createElement('ul');
        let ulLA = document.createElement('ul');
        let ulAtlanta = document.createElement('ul');
        let ulBoston = document.createElement('ul');

        for (let i=0; i < seattle.closures.length; i++){
            let li = document.createElement('li');
            li.textContent = seattle.closures[i];
            ulSeattle.appendChild(li);
        }   

        document.querySelector('#seattleClosures').appendChild(ulSeattle);

        for (let i=0; i < la.closures.length; i++){
            let li = document.createElement('li');
            li.textContent = la.closures[i];
            ulLA.appendChild(li);
        } 

        document.querySelector('#laClosures').appendChild(ulLA);

        for (let i=0; i < atlanta.closures.length; i++){
            let li = document.createElement('li');
            li.textContent = atlanta.closures[i];
            ulAtlanta.appendChild(li);
        } 

        document.querySelector('#atlantaClosures').appendChild(ulAtlanta);

        for (let i=0; i < boston.closures.length; i++){
            let li = document.createElement('li');
            li.textContent = boston.closures[i];
            ulBoston.appendChild(li);
        } 

        document.querySelector('#bostonClosures').appendChild(ulBoston);

        

    });