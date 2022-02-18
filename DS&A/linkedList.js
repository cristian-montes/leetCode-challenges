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
    LinkedList.prototype.reverse = function () {
        // val:1    val:2      val:3
        // next:2   next:3     next:null
        // 1   ->   2 ->       3     ->    null
        if (!this.head.next)
            return this.head;
        var currentNode = this.head;
        this.tail = this.head;
        var second = currentNode.next;
        while (second) {
            var temp = second.next;
            second.next = currentNode;
            currentNode = second;
            second = temp;
        }
        this.head.next = null;
        this.head = currentNode;
        return this.printList();
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
var myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.prepend(1);
// myLinkedList.prepend(8);
// myLinkedList.insert(2, 69);
// console.log(myLinkedList.insert(6, 101));
// myLinkedList.printList();
// myLinkedList.remove(0);
// ***** 21.  MERGE TWO SORTED LIST INTO ONE SORTED LIST *** //
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
function mergeTwoLists(list1, list2) {
    var dummy = new ListNode(0); // -1 because we know is not valid
    var head = dummy;
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            dummy.next = list1;
            list1 = list1.next;
        }
        else {
            dummy.next = list2;
            list2 = list2.next;
        }
        dummy = dummy.next;
    }
    if (list1 === null) {
        dummy.next = list2;
    }
    else {
        dummy.next = list1;
    }
    return head.next;
}
;
// ***** 83. REMOVE DUPLICATES FROM SORTED LIST *** //
function deleteDuplicates(head) {
    var newHead = new ListNode();
    var newHeadPtr = newHead;
    var currNode = head;
    while (currNode) {
        if (!currNode.next || currNode.val !== currNode.next.val) {
            newHeadPtr.next = currNode;
            newHeadPtr = newHeadPtr.next;
        }
        currNode = currNode.next;
    }
    return newHead.next;
}
;
// ***** 160. INTERSECTION OF TWO LINKEDLIST *** //
function getIntersectionNode(headA, headB) {
    if (headA === null || headB === null)
        return null;
    var firstHead = headA;
    var secondHead = headB;
    while (firstHead !== secondHead) {
        if (firstHead === null) { // if it finds the null value then it means it is the end of the list and it is grabing the headB length and values to compare to the other head
            firstHead = headB;
        }
        else {
            firstHead = firstHead.next;
        }
        if (secondHead === null) { // same thing here at one point the two list will be the same length with the same values to find the intersection
            secondHead = headA;
        }
        else {
            secondHead = secondHead.next;
        }
    }
    return firstHead;
}
;
// ***** 141 LINKED LIST CYCLE *** //
function hasCycle(head) {
    if (head === null)
        return false;
    var slow = head;
    var fast = head.next;
    while (slow !== fast) {
        if (fast === null || fast.next === null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
}
;
