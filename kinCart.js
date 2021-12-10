// function getMaxUnits(boxes, unitsPerBox, truckSize){
//     if(boxes[0] === truckSize) {
//        let totalUnits = boxes[0] * unitsPerBox[0];
//        console.log(totalUnits)
//         return  totalUnits
//     } 

//     let finalTotalUnits = 0;
//     let finalValue = 0;
//     let maxBoxes = 0;

//     for(let i = 0; i<boxes.length; i++){
      
//         if(maxBoxes === truckSize){
            
//            finalTotalUnits = finalValue;
//         } else {
           
//             maxBoxes = maxBoxes + boxes[i]
//             finalValue = finalValue + (unitsPerBox[i] * boxes[i])
//         }
//     }

//     console.log(finalTotalUnits);
//     return finalTotalUnits;
// }

// boxes = [3,1,6]
// unitsPerBox = [2,7,4]
// truckSize = 6

// getMaxUnits(boxes, unitsPerBox, truckSize)




// function hasVowels(strArr, query){
//     let queries = [];
//     const vowels = ['a', 'e', 'i', 'o', 'u',]

//     for(let i= 0; i<query.length; i++){
//         let count = 0;
       
//         for(let jj = Number(query[i][0])-1; jj<= Number(query[i][2])-1; jj++){
        
//             if( vowels.includes(strArr[jj][0])
//                 // strArr[jj][0] === 'a' || 'e' || 'i' || 'o' || 'u'&& 
//                 // strArr[jj].length-1 === 'a'|| 'e' || 'i' || 'o' || 'u'
//             ){
//                 count++;
//             } 
            
//         }
//         queries.push(count);
        
//     }

//  console.log( queries)
  
//  return queries;

    
// }

// strArr = ['aba','bcb','ece','aa','e']
// query = ['1-3','2-5','2-2']

// hasVowels(strArr, query)



function countHighlyProfitableMonths(stockPrices, k){
   if(stockPrices.length <= 1){
       return 0;
   }
   let count = 0
   let hence = 0;
   for(let i = 1; i <= stockPrices.length; i++){
        if(count === k){
            hence ++
        } else if( stockPrices[i]< stockPrices[i+1]){
            count ++;
        }
 }
console.log(hence)
 return hence;
}

// stockPrices = [1,2,3,4]
// k = 4

stockPrices = [1,2,3,3,4,5]
k = 3
countHighlyProfitableMonths(stockPrices, k)