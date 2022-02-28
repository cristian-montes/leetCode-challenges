"use strict";
//****** BINARY TREES ******/
// each node can only have 0,1 or 2 nodes.
// each child can only have on parent. 
// LOOKUP O(log N)
// INSERT O(log N)
// DELETE O(log N)
// O(log N) it is just looking throught a phone book... you dont need to look through every single page, instead you go the that "section" and began looking there.you 
// OR  devide and conquer.
exports.__esModule = true;
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
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
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