//Javascript does not come with linkedlist built in.
//https://visualgo.net/en/list --> visual representation of how linked list work
// traversing through a Linked List is slower than iterating through an array eventhough they both have O(n) time complexity, but this is because in an array data is organized right next eachother in memory, and in a Linked List the data is all scartted around in memory.
var NewNode = /** @class */ (function () {
    function NewNode(value) {
        this.value = value;
        this.next = null;
    }
    return NewNode;
}());
// **** YOU STOPED HERE! WORKING ON REFACTORING LINKEDLIST WITH THE NEWNODE CLASS ****
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
        var newNode = {
            value: value,
            next: null
        };
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    };
    LinkedList.prototype.prepend = function (value) {
        var newNode = {
            value: value,
            next: null
        };
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    };
    LinkedList.prototype.inser = function (index, value) {
    };
    LinkedList.prototype.printList = function () {
        var array = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(this.head);
        return array;
    };
    LinkedList.prototype.insert = function (index, value) {
        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }
    };
    return LinkedList;
}());
var myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.printList();
// console.log(myLinkedList);
