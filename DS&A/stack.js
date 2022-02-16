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
var Nodie = /** @class */ (function () {
    function Nodie(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return Nodie;
}());
var Stack = /** @class */ (function () {
    function Stack() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    Stack.prototype.peek = function () {
        var _a, _b;
        console.log((_a = this.top) === null || _a === void 0 ? void 0 : _a.val);
        return (_b = this.top) === null || _b === void 0 ? void 0 : _b.val;
    };
    Stack.prototype.push = function (value) {
        var stackNode = new Nodie(value);
        if (this.length === 0) {
            this.top = stackNode;
            this.bottom = stackNode;
        }
        else {
            var holdingOldNode = this.top;
            this.top = stackNode;
            this.top.next = holdingOldNode;
        }
        this.length++;
        console.log(this);
        return this;
    };
    Stack.prototype.pop = function () {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return this;
    };
    Stack.prototype.isEmpty = function () {
        if (!this.length) {
            return null;
        }
        return this.length;
    };
    return Stack;
}());
// const myStack = new Stack();
// console.log(myStack.isEmpty())
// myStack.push('google');
// myStack.push('neflix');
// myStack.push(69);
// myStack.push(10);
// myStack.push('Discord');
// myStack.push('Walmart');
// myStack.pop()
// myStack.peek()
// console.log(myStack.isEmpty())
var theStack = /** @class */ (function () {
    function theStack() {
        this.stack = [];
    }
    theStack.prototype.peek = function () {
        console.log(this.stack[this.stack.length - 1]);
        return this.stack[this.stack.length - 1];
    };
    theStack.prototype.push = function (value) {
        this.stack.push(value);
    };
    theStack.prototype.pop = function () {
        this.stack.pop();
    };
    theStack.prototype.isEmpty = function () {
        if (!this.stack.length) {
            return console.log('the stack is empty');
        }
        return this.stack.length;
    };
    return theStack;
}());
var myOtherStack = new theStack();
console.log(myOtherStack.isEmpty());
myOtherStack.push('google');
myOtherStack.push('neflix');
myOtherStack.push(69);
myOtherStack.push(10);
myOtherStack.push('Discord');
myOtherStack.push('Walmart');
myOtherStack.pop();
// myOtherStack.peek()
// console.log(myOtherStack.isEmpty())
console.log(myOtherStack);
