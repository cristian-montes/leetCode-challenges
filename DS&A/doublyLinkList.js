//**  Doubly Linked Lists **/
var NewNode = /** @class */ (function () {
    function NewNode(value) {
        this.value = value;
        this.next = null,
            this.prev = null;
    }
    return NewNode;
}());
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList(value) {
        this.head = {
            value: value,
            next: null,
            prev: null
        };
        this.tail = this.head; // this is becuase one only have one item the head is also the tail.
        this.length = 1; // 1 is assigned becuase it is only one when created.
    }
    DoublyLinkedList.prototype.append = function (value) {
        var newNode = {
            value: value,
            next: null,
            prev: null
        };
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    };
    DoublyLinkedList.prototype.prepend = function (value) {
        var newNode = {
            value: value,
            next: null,
            prev: null
        };
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    };
    DoublyLinkedList.prototype.printList = function () {
        var array = [];
        var currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(array);
        return array;
    };
    DoublyLinkedList.prototype.traverseToIndex = function (index) {
        var counter = 0;
        var currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    };
    DoublyLinkedList.prototype.remove = function (index) {
        if (index > this.length) {
            index = this.length - 1;
        }
        else if (index === 0) {
            var newHead = this.head.next;
            newHead.prev = null;
            this.head = newHead;
            this.length--;
            return this.printList();
        }
        var leader = this.traverseToIndex(index - 1);
        var follower = leader.next;
        follower.prev = leader;
        //  const unwantedNode = leader.next;
        leader.next = follower.next;
        this.length--;
        return this.printList();
    };
    DoublyLinkedList.prototype.insert = function (index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        var newNode = {
            value: value,
            next: null,
            prev: null
        };
        var leader = this.traverseToIndex(index - 1);
        var follower = leader.next;
        leader.next = newNode;
        newNode.prev = newNode;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
    };
    return DoublyLinkedList;
}());
var myDoublyLinkedList = new DoublyLinkedList(44);
myDoublyLinkedList.append(5);
myDoublyLinkedList.append(16);
myDoublyLinkedList.prepend(1);
myDoublyLinkedList.prepend(8);
myDoublyLinkedList.insert(2, 69);
myDoublyLinkedList.printList();
myDoublyLinkedList.remove(100);
//  myDoublyLinkedList.printList();
