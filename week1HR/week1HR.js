// ************************************************************* PLUS MINUS **************************************************

// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.
// Example

// Print the following  lines, each to  decimals:
// There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:
// 0.400000
// 0.400000
// 0.200000

function plusMinus(arr) {
    let positves = 0;
    let negatives = 0;
    let zeroes = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            positves++
        } else if(arr[i] < 0){
            negatives++
        } else if(arr[i]=== 0){
            zeroes++
        }

    }

    const positiveRatio = (positves/arr.length).toFixed(6)
    const negativeRatio = +(negatives/arr.length).toFixed(6)
    const zeroRatio = +(zeroes/arr.length).toFixed(6)


return (console.log(positiveRatio),
        console.log( negativeRatio),
       console.log( zeroRatio)
)


}
// arr = [-4, 3, -9, 0, 4, 1]
// plusMinus(arr);



// ******************************************************************** MIN MAX SUMS ****************************************************************

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Sample Input
// 1 2 3 4 5
// Sample Output
// 10 14

// The numbers are , , , , and . Calculate the following sums using four of the five integers:

// Sum everything except 1, the sum is 14.
// Sum everything except 2, the sum is 13.
// Sum everything except 3, the sum is 12.
// Sum everything except 4, the sum is 11.
// Sum everything except 5, the sum is 10.

function miniMaxSum(arr) {
    const totalSum = arr.reduce((a, b) => a + b);

    let sumTracker = [];

    for(let i = 0; i < arr.length; i++){
        sumTracker.push(totalSum - arr[i]);
    }

    let minSum = sumTracker[0];
    let maxSum = 0

    for(let j = 0; j < sumTracker.length; j++){
        if(minSum > sumTracker[j]){
            minSum = sumTracker[j];
        } else if( maxSum < sumTracker[j]){
            maxSum = sumTracker[j];
        }
    }

    const theMaxAndMin = `${minSum} ${maxSum}`
  return console.log(theMaxAndMin);
}
// arr = [ 1, 2, 3, 4, 5]
// miniMaxSum(arr);


// ******************************************************************** TIME CONVERSION ****************************************************************

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.
// timeConversion has the following parameter(s):
// string s: a time in  hour format
// Returns
// string: the time in  hour format
// Sample Input

// 07:05:45PM
// Sample Output

// 19:05:45

function timeConversion(s) {
    const splitTime = s.split(':');
    
    let militaryTime = '';

    if(s[s.length-2] === 'P' && s[s.length-1] === 'M' && +splitTime[0] < 12){
        let newTime = +splitTime[0] + 12;
        militaryTime = `${newTime}:${splitTime[1]}:${splitTime[2][0]}${splitTime[2][1]}`
    }

    else if(s[s.length-2] === 'P' && s[s.length-1] === 'M' && +splitTime[0] === 12){
        let newTime = splitTime[0];
        militaryTime = `${newTime}:${splitTime[1]}:${splitTime[2][0]}${splitTime[2][1]}`
    }

    else if(s[s.length-2] === 'A' && s[s.length-1] === 'M' && +splitTime[0] === 12){
        let newTime = '00';
        militaryTime = `${newTime}:${splitTime[1]}:${splitTime[2][0]}${splitTime[2][1]}`
    }

    else if(s[s.length-2] === 'A' && s[s.length-1] === 'M' && +splitTime[0] < 12){
        let newTime = splitTime[0];
        militaryTime = `${newTime}:${splitTime[1]}:${splitTime[2][0]}${splitTime[2][1]}`
    }

    
    return militaryTime;
}

// s = '07:05:45PM'
// s = '12:05:45PM'
// s = '12:05:45AM'
// s = '12:05:45PM'

// timeConversion(s);


//************************************************************** GET THE MEDIAN OF AN ARRAY OF NUMBERS ***********************************************************************************//
function getMedian(arr){
    const sortedArra = arr.sort((a,b) => a - b)
    const mid = Math.floor(arr.length/2);

    return arr.length % 2 !== 0 ? sortedArra[mid] : (sortedArra[mid - 1] + sortedArra[mid ])/2

}

// arr = [5, 6, 50, 1, -5]
// getMedian(arr)



//************************************************************** GET THE MEDIAN OF AN ARRAY OF NUMBERS ***********************************************************************************//

function lonelyinteger(a) {

    let lonelyMap= {};

    for(let i = 0; i < a.length; i++){
        if(!lonelyMap[a[i]]){
            lonelyMap[a[i]] = 0;
        }

        lonelyMap[a[i]]++
    }

    for(let property in lonelyMap){
        if(lonelyMap[property] === 1){
            console.log('lonelyMap', +property)
            return +property;
        }
    }

}

a=[1,2,3,4,3,2,1]
lonelyinteger(a)