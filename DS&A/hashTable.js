var HashTable = /** @class */ (function () {
    function HashTable(size) {
        this.data = new Array(size);
    }
    HashTable.prototype._hash = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    };
    HashTable.prototype.set = function (key, value) {
        var locationInMemo = this._hash(key);
        if (!this.data[locationInMemo]) {
            this.data[locationInMemo] = [];
        }
        this.data[locationInMemo].push([key, value]);
        console.log(this.data);
        return this.data;
    };
    HashTable.prototype.get = function (key) {
        var locationInMemo = this._hash(key);
        var valueInMemo = this.data[locationInMemo];
        for (var i = 0; i < valueInMemo.length; i++) {
            if (valueInMemo[i][0] === key) {
                console.log(valueInMemo[i][1]);
                return valueInMemo[i][1];
            }
            return undefined;
        }
        console.log(valueInMemo[1]);
        return valueInMemo[1];
    };
    return HashTable;
}());
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
function recurringCharacter(arr) {
    //     let tracker = {};
    //     for(let i = 0; i <arr.length; i++){
    //         if(!tracker[arr[i]]){
    //             tracker[arr[i]] = 0;
    //             // console.log(tracker[arr[i]])
    //         } 
    //        if (tracker[arr[i]] === 2){
    //           console.log('answer', arr[i])
    //           return arr[i];
    //       }
    //             tracker[arr[i]]++
    //     }
    //     console.log(undefined)
    //  return undefined
    var tracker = {};
    for (var i = 0; i < arr.length; i++) {
        if (tracker[arr[i]] !== undefined) {
            console.log(arr[i]);
            return arr[i];
        }
        else {
            tracker[arr[i]] = i;
        }
    }
    console.log(undefined);
    return undefined;
}
var arr = [2, 5, 1, 3, 5, 7, 8, 9, 3];
recurringCharacter(arr);
