let base = Number(prompt("Enter base:"));
let distance = Number(prompt("Enter distance:"));
let minslate = Number(prompt("Enter minutes late:"));
let seed = Number(prompt("Enter seed:"));

let fare= base+ 7*distance;

if (minslate>15)
    fare+=20;

if (distance > 10)
    fare+= Math.floor(0.1 * fare);

if (seed%2 !== 0){
    fare = fare-seed;
}
else{
    fare = fare+seed;
}

if (fare % 5 !== 0) {
    fare = fare+ (5 - (fare%5));
}


alert(fare);