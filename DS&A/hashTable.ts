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


const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000);
myHashTable.set('apples', 40);
myHashTable.get('apples');