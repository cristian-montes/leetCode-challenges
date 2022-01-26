function solved(queries){
    let textArray = [];

    for(let i = 0; i < queries.length; i++){
        if(queries[i][0] === 'APPEND'){
            if(textArray.length > 0){
                textArray.push(textArray[i-1] + queries[i][1])
            }
            textArray.push(queries[i][1])
        }
    }
    
console.log('textArray', textArray)
}

queries = [
    ["APPEND", "Hey"],              
    ["APPEND", " there"], 
    ["APPEND", "!"]                  
  ]

solved(queries);

