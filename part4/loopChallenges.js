let sum = 0;
let i = 1;
while (i < 6) {
    sum += i;
    i++;
}
console.log(sum);

let countdown = [];
let j = 5;
while ( j > 0) {
    countdown.push(j);
    j--;
}

let teaCollection = [];
let tea;
do {
    prompt(`Enter your favorite tea (type "stop" to finish)`)
    if (tea !== "stop"){
        teaCollection.push(tea);
    }
} while ( tea !== "stop");

let total = 0;
let k = 1;
do {
    total += k;
    k++;
} while ( k <= 3);

let multipliedNumbers = []
let numbers = [2, 4, 6]
for (let c = 1; index < numbers.length; index++) {
    // takeNumber = numbers[index] *2
    // multipliedNumbers.push(takeNumber);
    multipliedNumbers.push(numbers[index]*2);
}

let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList;
for (let c = 0; c < cities.length; c++) {
    const myCity = cities[c];
    cityList.push(myCity);
}