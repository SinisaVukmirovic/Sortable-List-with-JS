let heroIds = [
    '208',
    '70',
    '729',
    '644',
    '370',
    '620',
    '686',
    '659',    
    '289',
    '346',
    '418',
    '332'
];

const superheroListElem = document.querySelector('.superhero-list');

function getHeroesInformation(hero) {
    superHeroApi(hero)
    .then(results => {

        let superHeroData = [];

        superHeroData.push(
            {
                name: results.name,
                img: results.images.md,
                power: results.powerstats.power,
                speed: results.powerstats.speed,
                strength: results.powerstats.strength
            }
        );

        superHeroData.forEach(hero => {
            displayData(hero);
        });
    })
    .catch(err => {
        console.log(err);
    });
}

function displayData(hero) {
    let heroElem = document.createElement('div');
    heroElem.classList.add('hero');

    heroElem.innerHTML = `
        <img src="${hero.img}" alt="Superhero Profile Image">

        <div class="hero-info">
            <h2>${hero.name}</h2>
            <div class="hero-stats">
                <div>
                    <h4>Power</h4>
                    <h3>${hero.power}</h3>
                </div>
                <div>
                    <h4>Speed</h4>
                    <h3>${hero.speed}</h3>
                </div>
                <div>
                    <h4>Strength</h4>
                    <h3>${hero.strength}</h3>
                </div>
            </div>
        </div>
    `;
    
    superheroListElem.appendChild(heroElem);
}

async function superHeroApi(hero) {
    let apiBaseUrl = `https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/`;

    let options = { 
        method: 'GET',
        headers: {
          "Accept" : "application/json"
        }
    };

    let response = await fetch(`${apiBaseUrl}${hero}.json`, options);
    let data = await response.json();

    return data;
}

heroIds.forEach(hero => {
    getHeroesInformation(hero);
});