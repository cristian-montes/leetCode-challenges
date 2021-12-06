// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.
// Example arr = [1,1,0,-1,-1]
// There are  n=5 elements, two positive, two negative and one zero. Their ratios are , 2/5 = 0.400000, 2/5 = 0.400000, and 1/5 =0.200000. Results are printed as: 
//0.400000
//0.400000
//0.200000

function plusMinus(arr) {
    //set postive, negative and zeros in a Hash Table
        const map1 = { 
            postivo:0,
            negativo:0,
            cero:0
        };

        let i = arr.length;
    // loop throught the array checking if values
    while(i >=0){
       let signo = Math.sign(arr[i]);

       if(signo === 1){
           map1.postivo++
       } else if (signo === -1){
           map1.negativo++
       } else {
           map1.cero++
       }

       i--
    }
    // store those values and increment their count in a hash table
    console.log(map1);
    return map1
    // return the 3 rations
}
arr = [1,1,0,-1,-1]
plusMinus()