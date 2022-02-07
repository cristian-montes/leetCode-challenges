//*****************************  HASH TABLES***********************************************************************************/
//space O(n)
// insert O(1)
// lookup O(1)
// delete O(1)
// PRO they can improve time complexity to O(n)
// CON Fast Access O(1), tradeoff: more memory O(n)
// If collition happens use linked List

class HashTable {
    data: any;

    constructor(size: number){
        this.data = new Array(size);
    }


    _hash(key:string){
        let hash = 0;
        for(let i = 0;  i<key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }



    set(key: string, value: number):void{
    let locationInMemo:number = this._hash(key);
        if(!this.data[locationInMemo]){
            this.data[locationInMemo] = [];
            
        }
        this.data[locationInMemo].push([key, value])
        console.log(this.data);
        return this.data
    }




    get(key:string){
        let locationInMemo:number = this._hash(key);
        let valueInMemo = this.data[locationInMemo]

        for(let i = 0; i <valueInMemo.length; i++){
            if(valueInMemo[i][0] === key){
                console.log(valueInMemo[i][1])
                return valueInMemo[i][1];
            }
            return undefined;
        }
        console.log(valueInMemo[1]);
        return valueInMemo[1];
    }


}
// const myHashTable = new HashTable(50);
// myHashTable.set('grapes', 10000);
// myHashTable.set('apples', 40);
// myHashTable.get('apples');

// ************************************************************************** RECURRING CHARACTER **************************************************************************
//GOOGLE QUESTION
//Gven an array = [2,5,1,2,3,5,1,2,4] , [2,5,1,4,3,5,1,4,2]
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]
//It should return 1

//Given an array = [2,3,4,5]
//It should return undefined

function recurringCharacter(arr: number[]):number | undefined {

    let tracker = {};

        for(let i = 0; i <arr.length; i++){
            if (tracker[arr[i]] !== undefined){
                console.log(arr[i])
                return arr[i];
            } else {
            tracker[arr[i]] = i

            } 
        }
 
    return undefined


}

const arr =[2,5,1,3,5,7,8,9,3];
recurringCharacter(arr);
