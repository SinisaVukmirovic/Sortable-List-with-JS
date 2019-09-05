// let heroes = [
//     // 'Wonder Woman',
//     // 'Two-Face',
//     // 'Wolverine',
//     // 'Hercules',
//     // 'Captain America',
//     // 'Luke Skywalker',
//     // 'Yoda',
//     // 'Black Knight III',
//     // 'Poison Ivy',
//     // 'Darth Vader',
//     // 'Thor',
//     'Superman',
//     'Aurora',
//     'Riddler',
//     'Iron Man'
// ];

let ids = [
    // 'Wonder Woman',
    // 'Two-Face',
    // 'Wolverine',
    // 'Hercules',
    // 'Captain America',
    // 'Luke Skywalker',
    // 'Yoda',
    // 'Black Knight III',
    // 'Poison Ivy',
    // 'Darth Vader',
    // 'Thor',
    '70',
    '322',
    '374',
    '720'
];

let superHeroData = [];

const superheroListElem = document.querySelector('.superhero-list');

function getHeroesInformation(hero) {
    superHeroApi(hero).then(results => {
        console.log(results);
        
        
        let heroElem = document.createElement('div');
        heroElem.classList.add('hero');

        heroElem.innerHTML = `
            <img src="${results.image.url}" alt="Superhero Profile Image">

            <div class="hero-info">
                <h2>${results.name}</h2>
                <div class="hero-stats">
                    <div>
                        <h5>Strength</h5>
                        <h3>${results.powerstats.strength}</h3>
                    </div>
                    <div>
                        <h5>Speed</h5>
                        <h3>${results.powerstats.speed}</h3>
                    </div>
                    <div>
                        <h5>Power</h5>
                        <h3>${results.powerstats.power}</h3>
                    </div>
                </div>
            </div>
        `;

        superheroListElem.appendChild(heroElem);
    })
    .catch(err => {
        console.log(err);
    });
}

async function superHeroApi(hero) {
    // let apiBaseUrl = `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/2354274968169765/search/`;
    let apiBaseUrl = `https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/2354274968169765/`;

    let options = { 
        method: 'GET',
        headers: {
            "Accept" : "application/json" 
        }
    };
    
    let response = await fetch(`${apiBaseUrl}${hero}`, options);
    let data = await response.json();
    // let populate = await superHeroData.push(
    //     {
    //         name: `${data.name}`,
    //         image: `${data.image.url}`
    //     }
    // );
    return data;
    

}

for (let hero of ids) {
    getHeroesInformation(hero);
}

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', getData);

// function getData() {
    // for (let heroData of populate) {
    //     let heroElem = document.createElement('div');
    //     heroElem.classList.add('hero');
    
    //     heroElem.innerHTML = `
    //         <img src="${heroData.image}" alt="Superhero Profile Image">
    
    //         <div class="hero-info">
    //             <h2>${heroData.name}</h2>
    //         </div>
    //     `;
    
    //     superheroListElem.appendChild(heroElem);
    // }
// }
