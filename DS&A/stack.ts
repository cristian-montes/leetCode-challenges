// They are linear data structures because they allow us to transverse sequencially one by one.\
// The only difference between the two is the way or order things get removed. 
// They used arrays or linked list as a base.

// Stacks follow what is called LIFO... (LAST IN FIRST OUT)
// LOOKUP O(n)
// POP O(1)
// PUSH O(1)
// PEEK O(1)

//REAL LIFE ESSENERARION
// Brower history, when you back on the browser histoty you are poping the last item in (so it is out);
// You are typping a txt and you are wanting to undo something or redo something. . 

//YOU CAN BUUILD a stack with an array or a linked list.. this is just a matter of preference depending in the situation.


//********************************************************* BUILDING A STASK WITH A LINKED-LIST*********************************************************/

class Nodie {
    val: number | string
    next: Nodie | null

    constructor(val?: number | string, next?: Nodie | null){
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}


class Stack {
    top: null | Nodie
    bottom: null | Nodie
    length: number

    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0
    }


    peek(){
        
        return this.top?.val;
    }

    push(value: number | string){
        let stackNode = new Nodie(value);
        if(this.length === 0){
            this.top = stackNode;
            this.bottom = stackNode;
            } else {

                const holdingOldNode = this.top;
                this.top = stackNode;
                this.top.next = holdingOldNode;
            }
        this.length++
        // console.log(this)
        return this;
    }

    pop(){

    }

    //isEmpty
}

const myStack = new Stack();
myStack.push(1);
// myStack.push(25);
// myStack.push(69);
// myStack.push(10);
myStack.push('Discord');
myStack.peek()

// console.log(myStack)
