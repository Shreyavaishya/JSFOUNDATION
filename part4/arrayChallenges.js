let teaFlavours = ["green tea", "black tea", "oolong tea"];
let firsTea = teaFlavours[0];

let cities = ["London", "Tokyo", "Paris", "New York"];
let favoriteCity = cities[2];

let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes([1],"jasmine tea");

let citiesVisited = ["Mumbai", "Syndey"];
citiesVisited.push("Berlin");

let teaOrders =["chai", "iced tea", "matcha", "earl grey"];
teaOrders.pop();

let popularTeas = ["green tea", "oolang tea", "chai"];
let softCopyTeas = popularTeas;

let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];
topCities.pop();
console.log(topCities);
console.log(hardCopyCities);

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);

let teaMenu = ["Masala chai", "oolang tea"," green tea", "earl tea"];
let menuLength = teaMenu.length;

let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
let isLondonInList = cityBucketList.includes("London");
