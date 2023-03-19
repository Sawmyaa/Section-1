//for loop

// for(let i=0; i<10; i++){ //here let is used to make i local scope
//     console.log(i);
// }

//WAP to print all numbers either divisible by 7 or 13 from 1 to 100.
// for(let i=1; i<=100; i++){
//     if(i%7==0 || i%13==0){
//         console.log(i);
//     }
// }

//WAP to print Fibonnacci series
// a=0;
// b=2;

// let [a,b] = [0,1];
// console.log(a);
// console.log(b);

// for(let i=0; i<10; i++){
//     let c=a+b;
//     console.log(c);
//     // a=b;
//     // b=c;
//     [a,b] = [b,c];
// }


//WAP to print factorial of a number
let x = 3;
let fact=1;
for(let i=2; i<=x; i++){
    console.log(fact);
    fact = fact*i;
}
console.log(fact);

//WAP to check if number is prime or not
let num = 19;
let prime = true;
for(let i=2; i<num/2; i++){
    if(num % i == 0){
        prime = false;
        console.log('not prime');
        break;
    }
}
if(prime) console.log('prime');

//while loop
//WAP to reverse a number
let n1 = 56459;
let rev = 0;

while(n1 > 0){
    console.log(rev);
    rem = n1%10;
    rev = rev*10 + rem;
    n1 = parseInt(n1/10);
}
console.log(rev);



