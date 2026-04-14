# JS-assignment
FWD, Assignment 4
Shreya Bansal, Section-D


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


Complexity: O(R-L +1)

Q2)
Approach:
1. Take inputs N and seed
2. Initialize a variable current = N
3. Repeat 3 times:
   -> if current even, update it to (current/2 +seed)
   -> else update it to (current*3 -seed)
4. Check if current is a 3-digit number (between 100 and 999).
   -> if yes, extract the middle digit.
      ->if middle digit == seed. print "YES",N
      -> else print "NO"
   -> else print "NO"

Complexity: O(1)


Q3)
Approach:
1. Take inputs N and K
2. Check for every value of x from 0 to 100000
   ->get test=N+x
   ->check if test palindrome AND divisibly by K
       ->if yes, ans=x
       -> else ans=-1
3. return ans

Complexity: O(100000)

Q4)
Approach:
1. Take inputs base, distance, minutesLate, and seed.
2. Let fare be base + 7 * distance.
3. If minutesLate > 15, add 20 to total fare.
4. If  distance > 10, add 10% of fare to total by math.floor() help
5. If seed is odd then subtract seed from total fare.
   ->else, add seed to total fare.
6.If fare not a multiple of 5 then round it up to the nearest multiple of 5.
7. Display total final fare

Complexity: O(1)


Q5)
Approach:
1. Take inputs N and seed
2. let m=0 and sum=0
3. Run a loop till sum becomes greater than or equal to N and inside the loop
   ->Increment m
   ->f m is not divisible by (seed+2), add it to sum
4.Print m and sum.

Complexity: O(m)

Q6)
Approach:
1. Take inputs a, b, and c
2. Let score = 3a + b − 2c
3. If score is negative then set it to 0.
4. If (a + b + c) > 50 then subtract 10 from score.
5. If score >= 60 then result="PASS"
   -> else result="FAIL"
6. Print score and result

Complexity: O(1)
   
