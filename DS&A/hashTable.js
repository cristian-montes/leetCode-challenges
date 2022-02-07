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
var myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 40);
myHashTable.get('apples');
