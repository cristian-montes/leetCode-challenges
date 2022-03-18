import { moveSyntheticComments } from "typescript"

// 3. reverse parsin
// 1. Minimum Amount
function calculateAmount(prices: number[]) {
    // Write your code here
    if(prices.length === 1){
        console.log(prices[0])
        return prices[0]
    } 
    
    let sum = prices[0]; //1 + 1 + 1
    let previous = prices[0]; // 3
    
    for(let i = 1; i < prices.length; i++){
        let product = prices[i] - previous;
//                         4 - 3
                        
        if( product <= 0){
            // sum = sum + 0
            previous = prices[i]
        } else if (product > 0) {
        sum = sum + product
        previous = prices[i]
        }
    }
   console.log(sum)
    return sum 
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

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {

    let sortedArr = [...nums1, ...nums2 ].sort((a, b) => a -b);

    console.log('sortedArr -->',sortedArr)

    if(sortedArr.length % 2 === 0){
        let startOfMidle = (sortedArr.length/2) - 1;
        let endOfMiddle = startOfMidle + 1;
        let median = (sortedArr[startOfMidle] + sortedArr[endOfMiddle])/2;
        console.log('medianEven -->', median)
        return median
    } else {
        let medianIndex = Math.ceil((sortedArr.length/2)) - 1;
        let median = sortedArr[medianIndex]
        console.log('mediaOdd -->',median)
        return median; 
    }

};

let nums1 = [1,3,6,7], nums2 = [2,8,0];

findMedianSortedArrays(nums1, nums2);