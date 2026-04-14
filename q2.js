let N = Number(prompt("Enter N:"));
let seed = Number(prompt("Enter seed:"));

let current = N;
for (let i=0; i<3; i++) {

  if (current%2 === 0) {
    current = current/2 + seed;
  }
  else {
    current = current*3 - seed;
  }
}

let ans="NO";

if (current>=100 && current<=999){
  let rem=current%10;
  let temp = (current - rem) /10;
  let middigit = temp%10;
  if (middigit === seed){
    ans="YES";
  }
}

alert(ans + ", " + current);
