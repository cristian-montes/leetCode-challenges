//Javascript does not come with linkedlist built in.
//https://visualgo.net/en/list --> visual representation of how linked list work
// traversing through a Linked List is slower than iterating through an array eventhough they both have O(n) time complexity, but this is because in an array data is organized right next eachother in memory, and in a Linked List the data is all scartted around in memory.

//TIME COMPLEXITY OF METHODS
// prepend O(1) -> this is when you add a node before the head.
// append  O(1) -> this when you add a node after the tail/
// lookup  O(N) -> transverse => when look for an specific node in memory.
// Insert O(n) -> this when you transverse in memory to look for the node where the new is going to go... either before or after.
// Delete O(n) -> need to transverse in memory to look for the node to be deleted.


// EX 1    10-->5-->16-->null

// this is th structure we are going to try to replacate  dynamically using A Class.
// ****************************************************************************************************************************************************************************
// let myLinkedList = {
//     head:{
//         value: 10,
//         next: {
//             value:5,
//             next:{
//                 value: 16,
//                 next: null  // the reason this one is pointing  to null is because it is the end of LL aka. tail.
//             }
//         }
//     }
// }
// ****************************************************************************************************************************************************************************

interface nodeHead {
    value: number;
    next: nodeHead | null;
}

class LinkedList {
    head: nodeHead;
    tail: nodeHead;
    length: number;

    constructor(value:number){
        this.head = {
            value: value,
            next: null
        }

        this.tail = this.head; // this is becuase one only have one item the head is also the tail.
        this.length = 1;       // 1 is assigned becuase it is only one when created.
    }

    append(value:number){
       const newNode =  this.tail.next = {
            value: value,
            next: null
        }
        this.tail = newNode;
        this.length++
    }



}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5)

console.log(myLinkedList);
