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

selectionSorty(numbers);
console.log(numbers);