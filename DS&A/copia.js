"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
// 3. reverse parsin
// 1. Minimum Amount
function calculateAmount(prices) {
    // Write your code here
    if (prices.length === 1) {
        console.log(prices[0]);
        return prices[0];
    }
    var sum = prices[0]; //1 + 1 + 1
    var previous = prices[0]; // 3
    for (var i = 1; i < prices.length; i++) {
        var product = prices[i] - previous;
        //                         4 - 3
        if (product <= 0) {
            // sum = sum + 0
            previous = prices[i];
        }
        else if (product > 0) {
            sum = sum + product;
            previous = prices[i];
        }
    }
    console.log(sum);
    return sum;
}
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
    // return sortedArr[0];
}
;
var nums1 = [1, 3, 6, 7], nums2 = [2, 8, 0];
findMedianSortedArrays(nums1, nums2);
