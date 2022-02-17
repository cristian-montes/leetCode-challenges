// Queues follow the FIFO... first in first out logic which is just the opposite of stacks. 
// An example could be when people are in line.. the first person is going to be the firstone getting the service.
// Requesting Uber or Lift, you are gonna get a ride in the oder you requested. 
// LOOKUP  O(n) --> usually not used.
// ENQUEUE O(1) --> Same as push items in line.
// DEQUEUE O(1) --> Same as POP or removing person from line. Unlike pop, dequeue does not take the last item in line, but the first item in line. 
// PEEK    O(1)
// why would you pick a QUEUE over an ARRAY?
// Well arrays are very inneficient
//You always want to built your queues with LinkedLists. The reson is because when removing items the list do not have to be shifted and it faster. The head and tail are just moved and nothing else have to be shifted or moved. 
var Noode = /** @class */ (function () {
    function Noode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return Noode;
}());
var Queue = /** @class */ (function () {
    function Queue() {
        this.first = null;
        this.last = null;
        this.lenght = 0;
    }
    Queue.prototype.peek = function () {
        var _a, _b;
        console.log((_a = this.first) === null || _a === void 0 ? void 0 : _a.val);
        return (_b = this.first) === null || _b === void 0 ? void 0 : _b.val;
    };
    Queue.prototype.enqueue = function (value) {
        var queueNode = new Noode(value);
        if (!this.lenght) {
            this.first = queueNode;
            this.last = queueNode;
        }
        else {
            // this.first!.next = this.last;
            this.last.next = queueNode;
            this.last = queueNode;
        }
        this.lenght++;
        return this;
    };
    Queue.prototype.dequeue = function () {
        if (!this.first && !this.last)
            return null;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.lenght--;
        return this;
    };
    return Queue;
}());
// const myQueue = new Queue();
// myQueue.enqueue(1);
// myQueue.enqueue(2);
// myQueue.enqueue(34);
// myQueue.enqueue(100);
// myQueue.enqueue(3230);
// myQueue.enqueue('thiss');
// myQueue.dequeue()
// console.log(myQueue);
var CrazyQueue = /** @class */ (function () {
    function CrazyQueue() {
        this.first = [];
        this.last = [];
    }
    CrazyQueue.prototype.enqueue = function (value) {
        var length = this.first.length;
        for (var i = 0; i < length; i++) {
            this.last.push(this.first.pop());
        }
        this.last.push(value);
        console.log('last', this.last);
        // console.log('first',this.first);
        return this;
    };
    CrazyQueue.prototype.dequeue = function () {
        var lenght = this.last.length;
        for (var i = 0; i < lenght; i++) {
            this.first.push(this.last.pop());
        }
        this.first.pop();
        console.log('last', this.last);
        console.log('first', this.first);
        return this;
    };
    CrazyQueue.prototype.peek = function () {
        if (this.first.length > 0) {
            console.log('FIRST', this.first[this.first.length - 1]);
            return this.first[this.first.length - 1];
        }
        console.log('LAST', this.last[0]);
        return this.last[0];
    };
    return CrazyQueue;
}());
var myCrazyQueue = new CrazyQueue();
myCrazyQueue.enqueue(5);
myCrazyQueue.enqueue(7);
myCrazyQueue.enqueue(9);
myCrazyQueue.enqueue(11);
myCrazyQueue.enqueue(69);
myCrazyQueue.dequeue();
myCrazyQueue.enqueue(70);
myCrazyQueue.enqueue(71);
myCrazyQueue.enqueue(72);
myCrazyQueue.dequeue();
myCrazyQueue.dequeue();
myCrazyQueue.peek();
