// BUBBLE SORTING ALGORITHM
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {

    for(let i =0; i< array.length; i++){
        for(let j =0; j< array.length; j++){
            if(array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1]= temp;
            } 
        }
    }
}
// bubbleSort(numbers);
// console.log(numbers);

// SELECTION SORTING ALGORITHM
function selectionSorty(array){
    for(let i =0; i< array.length; i++){
        //set current index as minimum
        let min = i; 
        let temp = array[i]; 
        for(let j = i+1; j< array.length; j++){
            if(array[j] < array[min]){
                
                //update minimum if current is
                //lower than what we had previously
                 min= j; 
            }
        }         
            array[i] = array[min];
            array[min] = temp;
        }
    
    return array;
}

// selectionSorty(numbers);
// console.log(numbers);

function insertionSorty(array){
    for(let i =0; i< array.length-1; i++){
        let min = i;
        for (let j = i+1; j< array.length; j++){
          if(array[j] < array[min]){
              min =j;
          }
        }
        [array[i], array[min]] = [array[min], array[i]];
    }
    
    return array;
}

const numbers2= [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

insertionSorty(numbers);
console.log(numbers);

function insertionSorty2(array){
    for(let i =0; i< array.length-1; i++){
        if(array[i] < array[0]){
            //move number to the first position
            array.unshift(array.splice(i,1) [0]);
        } else {

            for (let j = 1; j< i; j++){
              if(array[i] > array[j-i] && array[i] < array[j]){
                array,splice(j,0,array.splice(i,1)[0])
              }
            }
        }

    }
    
    return array;
}


