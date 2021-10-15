// BUBBLE SORTING ALGORITHM
const numbers = `[99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];`

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



// insertionSorty(numbers);
// console.log(numbers);

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

//---------------------------------------------------------------------------------------------------------//
const numbers2= [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSorty(array){
    if(array.length === 1){
        return array
    }
    
    const half =  array.length/2;

    const left = array.slice(0, half);

    const right = array.slice(half, array.length);
    
    return mergeSort(
        mergeSorty(left),
        mergeSorty(right)
    )
}

function mergeSort(left, right){
    let sortedArr = [];

    while(left.length && right.length){
        if(left[0] < right[0]){
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }

    return [...sortedArr, ...left, ...right];
}
// const leftRight = mergeSorty(numbers2);
// console.log(leftRight);

//---------------------------------------------------------------------------------------------------------//

const numbers3= [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array, left, right){
    const len = array.length; 
    let pivot;
    let partitionIndex;
  
    if(left < right) {
      pivot = right;
      partitionIndex = partition(array, pivot, left, right);
      
      //sort left and right
      quickSort(array, left, partitionIndex - 1);
      quickSort(array, partitionIndex + 1, right);
    }
    return array;
  }
     
  function partition(array, pivot, left, right){
    let pivotValue = array[pivot];
    let partitionIndex = left;
  
    for(let i = left; i < right; i++) {
      if(array[i] < pivotValue){
        swap(array, i, partitionIndex);
        partitionIndex++;
      }
    }
    swap(array, right, partitionIndex);
    return partitionIndex;
  }
  
  function swap(array, firstIndex, secondIndex){
      var temp = array[firstIndex];
      array[firstIndex] = array[secondIndex];
      array[secondIndex] = temp;
  }


//Select first and last index as 2nd and 3rd parameters
quickSort(numbers3, 0, numbers3.length - 1);
console.log(numbers3);