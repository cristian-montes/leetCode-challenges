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
let prices = [1,2]
// 1 1 = 2
calculateAmount(prices)


// 2. Number of moveSyntheticComments
