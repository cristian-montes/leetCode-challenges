// import { moveSyntheticComments } from "typescript"
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 3. reverse parsin
// 1. Minimum Amount
// function calculateAmount(prices: number[]) {
//     // Write your code here
//     if(prices.length === 1){
//         console.log(prices[0])
//         return prices[0]
//     } 
//     let sum = prices[0]; //1 + 1 + 1
//     let previous = prices[0]; // 3
//     for(let i = 1; i < prices.length; i++){
//         let product = prices[i] - previous;
// //                         4 - 3
//         if( product <= 0){
//             // sum = sum + 0
//             previous = prices[i]
//         } else if (product > 0) {
//         sum = sum + product
//         previous = prices[i]
//         }
//     }
// console.log(sum)
//     return sum 
// }
// let prices = [1,2,4,6,71,8,4]
// let prices = [10,12,12,16,70,11,14]
// 10          2    0  4  54 0 3 = 73
// let prices = [1,2,4,4] 
//       1   1  2 0 =  4 
// let prices = [1,2]
// 1 1 = 2
// calculateAmount(prices)
//*********************************** 02 - MEDIAN OF TWO SORTED ARRAYS  *********************************** 
function findMedianSortedArrays(nums1, nums2) {
    var sortedArr = __spreadArray(__spreadArray([], nums1, true), nums2, true).sort(function (a, b) { return a - b; });
    console.log('sortedArr -->', sortedArr);
    if (sortedArr.length % 2 === 0) {
        var startOfMidle = (sortedArr.length / 2) - 1;
        var endOfMiddle = startOfMidle + 1;
        var median = (sortedArr[startOfMidle] + sortedArr[endOfMiddle]) / 2;
        console.log('medianEven -->', median);
        return median;
    }
    else {
        var medianIndex = Math.ceil((sortedArr.length / 2)) - 1;
        var median = sortedArr[medianIndex];
        console.log('mediaOdd -->', median);
        return median;
    }
}
;
// let nums1 = [1,3,6,7], nums2 = [2,8,0];
// findMedianSortedArrays(nums1, nums2);
function convert(s, numRows) {
    if (numRows == 1) {
        return s;
    }
    // Start the process on row 1, heading down
    var currentRow = 1;
    var headingDown = true;
    // Initialise an array to store the zigzag data
    var zigZagArray = [];
    // Loop through the requested number of rows
    for (var i = 0; i < numRows; i++) {
        // Initialise each zigzag row as an empty array
        zigZagArray[i] = [];
    }
    // Loop through the string
    for (var i = 0; i < s.length; i++) {
        // Add the current letter to the current row
        zigZagArray[currentRow - 1].push(s[i]);
        if (headingDown) {
            currentRow++;
            // Check if we've exceeded the maximum number of rows
            if (currentRow > numRows) {
                // Start heading back up again
                currentRow = numRows - 1;
                headingDown = false;
            }
        }
        else {
            currentRow--;
            // Check if we've exceeded the top row
            if (currentRow < 1) {
                // Start heading down again
                currentRow = 2;
                headingDown = true;
            }
        }
    }
    // Initialise a return string
    var totalString = '';
    // Loop through the constructed rows
    for (var i = 0; i < numRows; i++) {
        // Append the row's characters joined together
        totalString += zigZagArray[i].join('');
    }
    return totalString;
}
;
var s = 'PAHNAPLSIIGYIR';
var numRows = 4;
// convert(s, numRows);
//*********************************** 242 - VALID ANAGRAM  *********************************** 
function isAnagram(s, t) {
    var sSorted = s.split('').sort().join('');
    var tSorted = t.split('').sort().join('');
    if (sSorted === tSorted) {
        return true;
    }
    return false;
}
;
