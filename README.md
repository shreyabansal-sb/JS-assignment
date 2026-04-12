# JS-assignment
FWD, Assignment 4


Q1)
Approach:
1. Taken three inputs L, R and K.
2. Iterated through all numbers from L to R.
3. For each number : 
   -> check if divisible by K. If not, skip.
   -> extract digits one by one :
         if any digit 0, discard number
         else get sum of digits
   -> Check if sum of digits is a prime number :
   -> If yes, increment count.
4. Display the final count using alert().
