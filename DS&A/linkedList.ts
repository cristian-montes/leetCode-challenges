import Collections = require('typescript-collections');

//Javascript does not come with linkedlist built in.
//https://visualgo.net/en/list --> visual representation of how linked list work
// traversing through a Linked List is slower than iterating through an array eventhough they both have O(n) time complexity, but this is because in an array data is organized right next eachother in memory, and in a Linked List the data is all scartted around in memory.

// import { WatchDirectoryFlags } from "typescript";

//TIME COMPLEXITY OF METHODS
// prepend O(1) -> this is when you add a node before the head.
// append  O(1) -> this when you add a node after the tail/
// lookup  O(N) -> transverse => when look for an specific node in memory.
// Insert O(n) -> this when you transverse in memory to look for the node where the new is going to go... either before or after.
// Delete O(n) -> need to transverse in memory to look for the node to be deleted.


// SLL PROS: simple implementation, requires lesser memeory, because of it operations like delete and insert is faster since we do not have to move the prev property.

//SLL CONS: it cannot be iterated backwards.
// Use it when memory is very expensive and you want to do fast insertion and delition.




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
       const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }

    prepend(value:number){
        const newNode = {
            value: value,
            next: null
        }

        newNode.next = this.head;
        this.head = newNode;
        this.length++

        return this;
    }

    inser(index:number, value:number){

    }

    printList(): number[]{
        const array = [];
        let currentNode =  this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next!;
        }
        console.log(array)
        return array
    }

    traverseToIndex(index:number){
        let counter = 0;
        let currentNode = this.head;

        while(counter !== index){
            currentNode = currentNode.next!;
            counter++; 
        }
        return currentNode;

    }

    reverse(){
        // val:1    val:2      val:3
        // next:2   next:3     next:null
        // 1   ->   2 ->       3     ->    null

        if(!this.head.next) return this.head;

        let currentNode = this.head;
        this.tail = this.head;
        let second = currentNode.next;

        while(second){
            const temp = second.next; //val:3 , next: null
            second.next = currentNode; // val:2, next: { val:3, next: null}
            currentNode = second;
            second = temp;
        }
        this.head.next = null;
        this.head = currentNode;
        return this.printList();
        
    }
        
    remove(index:number){
        const leader =  this.traverseToIndex(index-1);
        const unwantedNode = leader.next;
        
        leader.next = unwantedNode!.next;
        this.length--;
        return this.printList();
    }

    insert(index:number, value:number){

      if(index >= this.length){
          return this.append(value);
      }

      const newNode = {
        value: value,
        next: null
    }

    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next
    leader.next = newNode;
    newNode.next = holdingPointer!;
    this.length++;

    }

    
}

const myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);

// myLinkedList.prepend(1);
// myLinkedList.prepend(8);
// myLinkedList.insert(2, 69);
// console.log(myLinkedList.insert(6, 101));
// myLinkedList.printList();
// myLinkedList.remove(0);




// ***** 21.  MERGE TWO SORTED LIST INTO ONE SORTED LIST *** //
class ListNode {
         val: number
         next: ListNode | null

         constructor(val?: number, next?: ListNode | null) {
             this.val = (val===undefined ? 0 : val)
             this.next = (next===undefined ? null : next)
         }
    }

 function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let dummy  = new ListNode(0)  // -1 because we know is not valid
    let head = dummy;

    while(list1 !== null && list2 !== null){

        if(list1.val < list2.val){   
            dummy.next =  list1;
            list1 = list1.next;
        } else {
            dummy.next = list2;
            list2 = list2.next;
        }
        
        dummy = dummy.next;
    }

    if(list1 === null){
        dummy.next = list2;

    } else {
        dummy.next = list1;
    }

    return head.next;

};


// ***** 83. REMOVE DUPLICATES FROM SORTED LIST *** //
function deleteDuplicates(head: ListNode | null): ListNode | null {
    
    const newHead = new ListNode();

    let newHeadPtr = newHead;

    let currNode = head;

    while (currNode) {
        if (!currNode.next || currNode.val !== currNode.next.val) {
            newHeadPtr.next = currNode;
            newHeadPtr = newHeadPtr.next;
        }
        currNode = currNode.next;
    }
    return newHead.next;
};

// ***** 160. INTERSECTION OF TWO LINKEDLIST *** //

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if(headA === null || headB === null) return null;

  let firstHead = headA;
  let secondHead = headB;

   while(firstHead !== secondHead){

       if(firstHead === null){ // if it finds the null value then it means it is the end of the list and it is grabing the headB length and values to compare to the other head
           firstHead = headB;
       } else {
           firstHead =  firstHead.next!;
       }

       if(secondHead === null){ // same thing here at one point the two list will be the same length with the same values to find the intersection
           secondHead = headA;
       } else{
           secondHead = secondHead.next!;
       }
   }

   return firstHead; 

};

// ***** 141 LINKED LIST CYCLE *** //

function hasCycle(head: ListNode | null): boolean {
    if(head === null) return false;

    let slow = head;
    let fast  =  head.next;

    while(slow !== fast){
        if(fast === null || fast.next === null){
            return false;
        }
        slow = slow.next!;
        fast = fast.next.next
    }
    return true;
};

// ***** 203 REMOVE LIKNED LIST ELEMENTS *** //
function removeElements(head: ListNode | null, val: number): ListNode | null {

    while( head !== null && head.val === val){
        head =  head.next
    }

    let newHead = head;
    while(newHead !== null && newHead.next !== null){
        if(newHead.next.val === val ){

           newHead.next = newHead.next.next;
        } else{
            newHead = newHead.next;
        }


    }

    return head;
};


// ***** 206 REVERSE LINKED LIST ***** //
//
function reverseList(head: ListNode | null): ListNode | null {

    let currentNode = head;
    let previous = null;

    while( currentNode !== null){ 
        let temp =  currentNode.next;  // hold this value to make the loop moving
        currentNode.next = previous; // sets the next backwards starting on null and followed by the current node
        previous = currentNode; // then here previous is set to the new previous for the next iteration
        currentNode = temp; // we use the temp value to make the loop iterate 
    }
     return previous;  // return the new head call node
};

// ***** 237 DELETE NODE IN A LINKED LIST ***** //
// since the head isnt given, all it is needs to be done is set the given node equal to the proceding value. NO NEED FOR LOOPING!
function deleteNode(root: ListNode | null): void {
    root!.val = root!.next!.val;
    root!.next = root!.next!.next;
};
// val:1    val:2    val:3    val:4    val:5  
// next:2   next:3   next:4   next:5   next:null



// ***** 243 PALIMDROME LINKED LIST ***** //
function isPalindrome(head: ListNode | null): boolean {
    let uniqueValues: number[] = [];
    let currenHead = head;
    
    while(currenHead !== null ){
            // console.log(currenHead.val)
            uniqueValues.push(currenHead.val);
  
            currenHead = currenHead.next;
        
    };

    let jointHead = uniqueValues.join('')
 
    let reversedHead =  uniqueValues.reverse().join('');
    
    if(reversedHead === jointHead){
        return true
    }

    return false;

};


// ***** 817 LINKED LIST COMPONENTS ***** //

function numComponents(head: ListNode | null, nums: number[]): number {

    const numbersSorted = new Set(nums)
    
    let currentNode = head;
    let connectedComponents: number[] = [];
    let tracker = 0;

    while(currentNode !== null){
        //if there's overlapped number, push to connectedComponents

        if(numbersSorted.has(currentNode.val)){
            connectedComponents.push(currentNode.val)
        } else {
            // if there is not over number increase tracker and reset connectedComponents

            if(connectedComponents.length){
                tracker++;
                connectedComponents = [];;
            }
        }
        currentNode = currentNode.next;
    }
    
    //if there is numbers left in the stack return tracker plus one, else return tracker since it tracked the correct amounf of components
 return (connectedComponents.length) ?  tracker + 1 : tracker
};

// val:1    val:2    val:3    val:4    val:5  
// next:2   next:3   next:4   next:5   next:null

// ***** 02. ADD TWO NUMBERS ***** //
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    //Initilise a new ListNode to be returned
    let newListNode = new ListNode(0);
    let headOfNewListNode = newListNode;

    //Inistialise variables to be utilised on each run
    let sum = 0
    let carry = 0;

    // while ther are elements (or a carried number) to add
    while(l1 !== null || l2 !== null || sum >0){

    // If there's an element in l1 to be added, add it to the sum and move to the next l1 node
        if(l1 !== null){
            sum = sum + l1.val;
            l1 = l1.next;
        }
    // If there's an element in l2 to be added, add it to the sum and move to the next l1 node
        if(l2 !== null){
            sum = sum + l2.val;
            l2 = l2.next;
        }
    // Check if the sum for these nodes exceeds 10
        if(sum >= 10){
            carry = 1;
            sum = sum - 10;
        }
    // Add the sum to the nex ListNode, and then move it to the next entry
        headOfNewListNode.next = new ListNode(sum);
        headOfNewListNode = headOfNewListNode.next;
    //set the sum for the next addition to equal the carry-over (if thre was one)
        sum = carry;
        carry = 0;
    }

    //return the constructed ListNode (ignoring the first dummy entry)
    return newListNode.next;


};