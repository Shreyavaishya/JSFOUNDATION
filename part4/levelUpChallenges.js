// let teas = ["green tea", "black tea", "chai","oolong tea"];
// let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
    if(teas[i] === "chai"){
        break;
    }
    selectedTeas.push(teas[i])
}

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
    if(cities[i] === "Paris"){
        continue;
    }
    visitedCities.push(cities[i]);
}

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];
for(let num of numbers) {
    if(num === 4){
        break;
    }
   smallNumbers.push(num)
}

let teas = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];
for(let tea of teas) {
  if (teas[i] === "herbal tea"){
    continue;
  }
  preferredTeas.push(tea);
}

let citiesPopulation = {
    London: 8900000,
    "New York": 8400000,
    Paris: 2200000,
    Berlin: 3500000
};
let cityPopulations = {};
for (const city in citiesPopulation) {
    if( city === "Berlin"){
        break;
    }
   cityPopulations[city] = citiesPopulation[city];
}

let worldCities = {
    Syndey: 5000000,
    Tokyo: 9000000,
    Berlin: 350000,
    Paris: 2200000,
};
let largeCities = {};
for (const city in worldCities) {
    if( worldCities[city] < 3000000){
        continue;
    }
    largeCities[city] = worldCities[key];
}

let teaTypes = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

teaTypes.forEach( (tea) => {
    if( tea == "chai"){
        return; // break doen't work inside the fn
    }
    availableTeas.push(tea);
});

let Cities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];
Cities.forEach( (city) => {
    if (city == "Sydney") {
        return;
    }
    traveledCities.push(city);
})


