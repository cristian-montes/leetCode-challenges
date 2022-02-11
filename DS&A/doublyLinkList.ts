//**  Doubly Linked Lists **/

// The main difference between doubly linked list and single linked List is tha that 
// doubly link list have an extra pointer of data the points to the previous node.
// This allows us to traverse backwards

// EX SLL = 1->3->5->null  head :{ value: 1,  next: {value: 3, next:{ value:5, next:null}}}
// EX DLL = 1->3->5->null
//          1<-3<-5<-null

// DLL PROS : can be iterated from the back and the front.

interface theNode {
    value: number;
    next: theNode | null;
    prev: theNode | null;
}


class TheNewNode implements theNode {

    value: number;
    next: theNode | null;
    prev: theNode | null;
 
     constructor(value){
         this.value = value;
         this.next = null,
         this.prev = null

     }
 }
 
 class DoublyLinkedList {
     head: theNode;
     tail: theNode;
     length: number;
 
     constructor(value:number){
         this.head = {
             value: value,
             next: null,
             prev: null
         }
 
         this.tail = this.head; // this is becuase one only have one item the head is also the tail.
         this.length = 1;       // 1 is assigned becuase it is only one when created.
     }
 
     append(value:number){
        const newNode = {
             value: value,
             next: null,
             prev: null
         };

         newNode.prev = this.tail;
         this.tail.next = newNode;
         this.tail = newNode;
         this.length++;
 
         return this;
     }
 
     prepend(value:number){
         const newNode = {
             value: value,
             next: null,
             prev: null
         }
 
         newNode.next = this.head;
         this.head.prev = newNode;
         this.head = newNode;
         this.length++
 
         return this;
     }
 

     printList(): number[]{
         const array = [];
         let currentNode =  this.head;
         while(currentNode !== null){
             array.push(currentNode.value);
             currentNode = currentNode.next;
         }
         console.log(array)
         return array
     }
 
     traverseToIndex(index:number){
         let counter = 0;
         let currentNode = this.head;
 
         while(counter !== index){
             currentNode = currentNode.next;
             counter++; 
         }
         return currentNode;
 
     }
 
     remove(index:number){

         if( index >this.length){
             index = this.length -1
         } else if(index === 0){
            let newHead = this.head.next;
            newHead.prev = null;
            this.head =  newHead;
            this.length--;
            return this.printList();
         }

         const leader =  this.traverseToIndex(index-1);
         const follower = leader.next;
        follower.prev = leader;
         leader.next = follower.next;
         this.length--;
         return this.printList();
     }
 
     insert(index:number, value:number){
 
       if(index >= this.length){
           return this.append(value);
       }
 
       const newNode = {
         value: value,
         next: null,
         prev: null
     }
 
     const leader = this.traverseToIndex(index-1);
     const follower = leader.next
     leader.next = newNode;
     newNode.prev = newNode
     newNode.next = follower;
     follower.prev = newNode;
     this.length++;
 
     }
 
 
 
 
 }
 
 const myDoublyLinkedList = new DoublyLinkedList(44);
 myDoublyLinkedList.append(5);
 myDoublyLinkedList.append(16);
 myDoublyLinkedList.prepend(1);
 myDoublyLinkedList.prepend(8);
 myDoublyLinkedList.insert(2, 69);
 myDoublyLinkedList.printList();
 myDoublyLinkedList.remove(100)
//  myDoublyLinkedList.printList();