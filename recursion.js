// Write two functions that finds the factorial of any number. One should use recursive , the other just use a for loop

function findFactorialRecursive(number){

    if(number === 0) return ' done counting'
    return number * findFactorialRecursive(number-1)
    
}




function findFactorialIterative(number) {
    let count = 1;
    for(let i =2;  i <= number; i++){
        let adder = count * i;
        count = adder;
    }
    console.log(count);
    return count;
}

number = 5;
findFactorialIterative(number);