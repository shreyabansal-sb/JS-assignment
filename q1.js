let L = Number(prompt("Enter L:"));
let R = Number(prompt("Enter R:"));
let K = Number(prompt("Enter K:"));

let count = 0;

for (var x= L; x <= R; x++) {
  
  if (x%K != 0) 
    continue;

  let temp= x;
  let sum= 0;
  let hasZero= 0;

  while (temp > 0) {
    
    let digit= temp%10;
    
    if (digit ==0) {
      hasZero=1;
      break;
    }
    
    sum += digit;
    temp = (temp-digit)/10;
  }
  
  if (hasZero ==1) 
    continue;
  
  let isPrime = 1;
  
  if (sum < 2) 
    isPrime = 0;
  
  for (var i = 2; i < sum; i++) {
    if (sum % i == 0) {
      isPrime = 0;
      break;
    }
  }
  if (isPrime == 1) 
    count++;
}

alert(count);  
