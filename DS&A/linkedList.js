//Javascript does not come with linkedlist built in.
//https://visualgo.net/en/list --> visual representation of how linked list work
// traversing through a Linked List is slower than iterating through an array eventhough they both have O(n) time complexity, but this is because in an array data is organized right next eachother in memory, and in a Linked List the data is all scartted around in memory.
var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head; // this is becuase one only have one item the head is also the tail.
        this.length = 1; // 1 is assigned becuase it is only one when created.
    }
    LinkedList.prototype.append = function (value) {
        var newNode = this.tail.next = {
            value: value,
            next: null
        };
        this.tail = newNode;
        this.length++;
    };
    return LinkedList;
}());
var myLinkedList = new LinkedList(10);
myLinkedList.append(5);
console.log(myLinkedList);
