"use strict";
exports.__esModule = true;
var Collections = require("typescript-collections");
// *** HEIGH OF TREE ***//
// # of node = 2^h - 1;
// log nodes = height;
// log 100 = 2;
// 10^2 = 100;
// FULL BINARY TREES =  there are no gaps in the tree. Either the nodes havr 0 or 2 children, but never one child. 
//                   O
//                  / \
//                 O   O 
//                / \
//               O   O 
//                  / \
//                 O   O 
// PERFECT BINARY TREES = All node are full and there is not nodes that only have one child and the bottom nodes(leaves) are full and have 0.
// The amount of total nodes doubles as we move down the three.
// The sum of all of the node in the bottom leve is equal to all of the other nodes plus one or bottom =  allOtheLevels + 1.
//                     O
//                 /      \
//                O        O 
//               / \      / \
//              O   O    O   O 
// *** BINARY SEARCH TREE ***//
//They are great for comparing things, preserves relationships
// values to the RIGHT of the tree must be greater than the current node
// values to the LEFT of the tree must be less than the current node
// Better than O(n)
//Ordered
//Flexible Size
// No O(1) operations.
//######### CREATE YOUR OWN BINARY SEARCH TREE ##########//
var treeNode = /** @class */ (function () {
    function treeNode(value) {
        this.left = null;
        this.right = null;
        this.value = value;
        this.sum = null;
    }
    return treeNode;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    BinarySearchTree.prototype.insert = function (value) {
        var newNode = new treeNode(value);
        if (this.root === null) {
            this.root = newNode;
        }
        else {
            var currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    //LEFT
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left; // sets the current node to the new left to keep looping until we find a node w/o a left.
                }
                else {
                    //RIGHT
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right; // sets the current node to the new right to keep looping until we find a node w/o a right.
                }
            }
        }
    };
    BinarySearchTree.prototype.lookup = function (value) {
        if (!this.root) {
            return false;
        }
        var currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            }
            else if (value > currentNode.value) {
                currentNode = currentNode.right;
            }
            else if (value === currentNode.value) {
                return currentNode;
            }
        }
        return false;
    };
    return BinarySearchTree;
}());
var tree = new BinarySearchTree();
tree.insert(9);
// JSON.stringify(traverse(tree.root))
//            9
//       4         20
//   1      6    15   170 
// function transverse(node: any){
//     const tree = { value: node.value};
//     tree.left =  node.left ==- null ? null : transverse(node.left);
//     transverse(node.left);
//     tree.right = node.right === null ? null :  transverse(node.right);
//     return tree;
// }
// *************************************** LETCODE CHALLENGES **************************************************//
//**** BINARY TREE INORDER TRAVERSAL ****
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right, sum) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
        this.sum = (sum === undefined ? null : sum);
    }
    return TreeNode;
}());
function inorderTraversal(root) {
    if (!root)
        return [];
    var inOrderNodes = [];
    var isEmpty = function (a) { return a.length === 0; };
    var current = root;
    var stack = [];
    while (current !== null || !isEmpty(stack)) {
        while (current !== null) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        inOrderNodes.push(current.val);
        current = current.right;
    }
    return inOrderNodes;
}
;
//**** 144 BINARY TREE PREORDER TRAVERSAL ****
function preorderTraversal(root) {
    if (!root)
        return [];
    var preOderNodes = [];
    var current = root;
    var isEmpty = function (a) { return a.length === 0; };
    var stack = [];
    while (current !== null || !isEmpty(stack)) {
        while (current !== null) {
            preOderNodes.push(current.val);
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        current = current.right;
    }
    return preOderNodes;
}
;
//**** 145 - BINARY TREE POSTORDER TRAVERSAL ****
function postorderTraversal(root) {
    if (!root)
        return [];
    var postOderNodes = [];
    var stack = [];
    var current = root;
    var previousNode = null;
    while (current !== null || stack.length) {
        if (current !== null) {
            stack.push(current);
            current = current.left;
        }
        else {
            var peekNode = stack[stack.length - 1];
            if ((peekNode === null || peekNode === void 0 ? void 0 : peekNode.right) !== null && (peekNode === null || peekNode === void 0 ? void 0 : peekNode.right) !== previousNode) {
                current = peekNode === null || peekNode === void 0 ? void 0 : peekNode.right;
            }
            else {
                postOderNodes.push(peekNode.val);
                previousNode = stack.pop();
            }
        }
    }
    return postOderNodes;
}
;
//**** 100 - SAME TREE ****
function isSameTree(p, q) {
    var stack = [p, q];
    while (stack.length) {
        var _a = [stack.pop(), stack.pop()], top1 = _a[0], top2 = _a[1];
        if ((top1 === null || top1 === void 0 ? void 0 : top1.val) !== (top2 === null || top2 === void 0 ? void 0 : top2.val)) {
            return false;
        }
        if ((top1 === null || top1 === void 0 ? void 0 : top1.left) || (top2 === null || top2 === void 0 ? void 0 : top2.left)) {
            stack.push(top1 === null || top1 === void 0 ? void 0 : top1.left, top2 === null || top2 === void 0 ? void 0 : top2.left);
        }
        if ((top1 === null || top1 === void 0 ? void 0 : top1.right) || (top2 === null || top2 === void 0 ? void 0 : top2.right)) {
            stack.push(top1 === null || top1 === void 0 ? void 0 : top1.right, top2 === null || top2 === void 0 ? void 0 : top2.right);
        }
    }
    return true;
}
//*********************************** 101 - SYMMETRIC TREE *********************************** 
function isSymmetric(root) {
    var subLeft = root.left;
    var subRight = root.right;
    var stack = [subLeft, subRight];
    while (stack.length) {
        var _a = [stack.pop(), stack.pop()], subLeftNode = _a[0], subRightNode = _a[1];
        if ((subLeftNode === null || subLeftNode === void 0 ? void 0 : subLeftNode.val) !== (subRightNode === null || subRightNode === void 0 ? void 0 : subRightNode.val)) {
            return false;
        }
        if ((subLeftNode === null || subLeftNode === void 0 ? void 0 : subLeftNode.left) || (subRightNode === null || subRightNode === void 0 ? void 0 : subRightNode.right)) {
            stack.push(subLeftNode === null || subLeftNode === void 0 ? void 0 : subLeftNode.left, subRightNode === null || subRightNode === void 0 ? void 0 : subRightNode.right);
        }
        if ((subLeftNode === null || subLeftNode === void 0 ? void 0 : subLeftNode.right) || (subRightNode === null || subRightNode === void 0 ? void 0 : subRightNode.left)) {
            stack.push(subLeftNode === null || subLeftNode === void 0 ? void 0 : subLeftNode.right, subRightNode === null || subRightNode === void 0 ? void 0 : subRightNode.left);
        }
    }
    return true;
}
;
//*********************************** 104 - MAXIMUM DEPTH OF BINARY TREE *********************************** 
function maxDepth(root) {
    if (!root)
        return 0;
    var depth = 0;
    var queue = [root];
    while (queue.length !== 0) {
        depth++;
        var length_1 = queue.length;
        for (var i = 0; i < length_1; i++) {
            if (queue[i].left) {
                queue.push(queue[i].left);
            }
            if (queue[i].right) {
                queue.push(queue[i].right);
            }
        }
        queue.splice(0, length_1);
    }
    return depth;
}
;
//*********************************** 543 - DIAMETER OF BINARY TREE *********************************** 
function diameterOfBinaryTree(root) {
    if (!root) {
        return 0;
    }
    var inputStack = [];
    var outputStack = [];
    var diameter = 0;
    inputStack.push(root);
    // post order traversal
    while (inputStack.length > 0) {
        var node = inputStack.pop();
        outputStack.push(node);
        if (node.left) {
            inputStack.push(node.left);
        }
        if (node.right) {
            inputStack.push(node.right);
        }
    }
    while (outputStack.length > 0) {
        var node = outputStack.pop();
        var leftHeight = 0;
        var rightHeight = 0;
        if (node.left) {
            leftHeight = 1 + node.left.val;
        }
        if (node.right) {
            rightHeight = 1 + node.right.val;
        }
        var nodeDiameter = leftHeight + rightHeight;
        node.val = Math.max(leftHeight, rightHeight);
        if (nodeDiameter > diameter) {
            diameter = nodeDiameter;
        }
    }
    return diameter;
}
//*********************************** 563 - BINARY TREE TILT*********************************** 
function findTilt(root) {
    if (!root) {
        return 0;
    }
    var stack1 = [];
    var stack2 = [];
    stack1.push(root);
    //post-order-traversal
    while (stack1.length) {
        var node = stack1.pop();
        stack2.push(node);
        if (node === null || node === void 0 ? void 0 : node.left) {
            stack1.push(node.left);
        }
        if (node === null || node === void 0 ? void 0 : node.right) {
            stack1.push(node.right);
        }
    }
    var totalTilt = 0;
    while (stack2.length) {
        var node = stack2.pop();
        if (!(node === null || node === void 0 ? void 0 : node.left) && !(node === null || node === void 0 ? void 0 : node.right)) {
            node.sum = node.val;
        }
        else {
            var leftSum = node.left ? node.left.sum : 0;
            var rightSum = node.right ? node.right.sum : 0;
            var diff = Math.abs(leftSum - rightSum);
            totalTilt += diff;
            node.sum = node.val + leftSum + rightSum;
        }
    }
    return totalTilt;
}
;
//03.16.2022
//*********************************** 03 - LONGEST STUBSTRING WITHOUT REPEATING CHARACTERS *********************************** 
// s = "abcabcbb"
//i = 
//x = 
//set =
//size=
function lengthOfLongestSubstring(s) {
    var longestString = 0;
    for (var i = 0; i < s.length; i++) {
        var subStringsSet = new Collections.Set();
        for (var x = i; x < s.length; x++) {
            if (subStringsSet.contains(s[x])) {
                //Move on from the current letter without adding it(as it already exists in the set)
                break;
            }
            else {
                subStringsSet.add(s[x]);
            }
        }
        // update is the longest string length (if the one in this iteration is longer)
        longestString = Math.max(longestString, subStringsSet.size());
    }
    console.log(longestString);
    return longestString;
}
;
var s = "abcabcbb";
lengthOfLongestSubstring(s);
