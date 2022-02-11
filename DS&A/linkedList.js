"use strict";
//Javascript does not come with linkedlist built in.
//https://visualgo.net/en/list --> visual representation of how linked list work
// traversing through a Linked List is slower than iterating through an array eventhough they both have O(n) time complexity, but this is because in an array data is organized right next eachother in memory, and in a Linked List the data is all scartted around in memory.
exports.__esModule = true;
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
        console.log(array);
        return array;
    };
    LinkedList.prototype.traverseToIndex = function (index) {
        var counter = 0;
        var currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    };
    LinkedList.prototype.remove = function (index) {
        var leader = this.traverseToIndex(index - 1);
        var unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this.printList();
    };
    LinkedList.prototype.insert = function (index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        var newNode = {
            value: value,
            next: null
        };
        var leader = this.traverseToIndex(index - 1);
        var holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
    };
    return LinkedList;
}());
// const myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.prepend(1);
// myLinkedList.prepend(8);
// myLinkedList.insert(2, 69);
// myLinkedList.insert(6, 101);
// myLinkedList.printList();
// myLinkedList.remove(0);
var theMergeTwoLists = function (l1, l2) {
    //    do the iterative Way and DO NOT LOOK AT THE SOLUTION.
    var dummy = new NewNode(-1); // -1 because we know is not valid
    var head = dummy;
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            dummy.next = l1;
            l1 = l1.next;
        }
        else {
            dummy.next = l2;
            l2 = l2.next;
        }
    }
    if (l1 !== null) {
        dummy.next = l1;
    }
    else {
        dummy.next = l2;
    }
    return head;
};
var l1 = [1, 2, 4], l2 = [1, 3, 4];
console.log(theMergeTwoLists(l1, l2));
