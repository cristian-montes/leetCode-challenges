// Write two functions that finds the factorial of any number. One should use recursive , the other just use a for loop

function findFactorialRecursive(number){

    if(number === 2) return 2;

    return number * findFactorialRecursive(number-1)
    
}


function findFactorialIterative(number) {
    let count = 1;
    for(let i =2;  i <= number; i++){  // we started at 2 since 1*2 is equal to 2 and viceversa and if we start looping at 2 we save a couple loops to go throught.
        let adder = count * i;
        count = adder;
    }
    console.log(count);
    return count;
}
// number = 5;
// findFactorialRecursive(number)





//GIVEN A NUMBER "N" RETURN THE INDEX VALYE OF THE FIBONACCI SEQUENCE, WHERE THE SEQUENCE IS:
// 0,1,1,2,3,5,8,13,21,34,55,89,144 ...
// THE 2 PREVIOUS VALUES, THAT MEANS THAT FOR N=5 -> 2+3


function fibonacciIterative(n){

}


function fibonacciRecursive(n){
    if (n < 2 ) return n;

    return fibonacciRecursive(n-1) + fibonacciIterative(n-2);
}


