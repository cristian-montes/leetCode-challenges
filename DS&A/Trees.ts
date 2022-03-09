//****** BINARY TREES ******/
// each node can only have 0,1 or 2 nodes.
// each child can only have on parent. 
// LOOKUP O(log N)
// INSERT O(log N)
// DELETE O(log N)
// O(log N) it is just looking throught a phone book... you dont need to look through every single page, instead you go the that "section" and began looking there.you 
// OR  devide and conquer.

import { setConstantValue } from "typescript";


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
class treeNode {
    left: null | treeNode;
    right: null | treeNode;
    value: string | number

    constructor(value: string | number){
        this.left = null;
        this.right = null;
        this.value = value
    }
}

class BinarySearchTree {
    root: null |treeNode

    constructor(){
        this.root = null;
    }

    insert(value: string | number){
        const newNode =  new treeNode(value);

        if(this.root === null){
            this.root = newNode;
        } else {
            let currentNode = this.root;

            while(true){
                if(value < currentNode.value){
                    //LEFT
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left; // sets the current node to the new left to keep looping until we find a node w/o a left.

                } else {
                    //RIGHT
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right; // sets the current node to the new right to keep looping until we find a node w/o a right.

                }
            }
        }
    }

    lookup(value: string | number){
        if(!this.root){
            return false;
        }

        let currentNode = this.root;
        while(currentNode){
            if(value < currentNode.value){
                currentNode =  currentNode.left!
            } else if ( value > currentNode.value){
                currentNode = currentNode.right!
            } else if (value ===  currentNode.value){
                return currentNode;
            }
        }

        return false;
    }

    //REMOVE

}


const tree =  new BinarySearchTree()
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

 class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }


function inorderTraversal(root: TreeNode | null): number[] {
   if(!root) return [];

    let inOrderNodes: number[] = [];
    const isEmpty = <T>(a: T[]): boolean => a.length === 0;

    let current: TreeNode | null = root;
    const stack: TreeNode[] = [];

    while(current !== null || !isEmpty(stack)){
        while(current !== null){
            stack.push(current)
            current = current.left
        }

        current = stack.pop()!;
        inOrderNodes.push(current.val);
        current = current.right;
    }

    return inOrderNodes;
};


//**** 144 BINARY TREE PREORDER TRAVERSAL ****
function preorderTraversal(root: TreeNode | null): number[] {
    if(!root) return [];

    let preOderNodes: number[] = [];

    let current: TreeNode | null = root;
    const isEmpty = <T>(a: T[]): boolean => a.length === 0;

    const stack: TreeNode[] =[];

    while( current !== null || !isEmpty(stack)){
        while(current !== null){
            preOderNodes.push(current.val)
            stack.push(current)
            current = current.left
        }

        current = stack.pop()!;
        current =  current.right;

    }

    return preOderNodes;
};

//**** 145 - BINARY TREE POSTORDER TRAVERSAL ****
function postorderTraversal(root: TreeNode | null): number[] {
    if(!root) return [];

    let postOderNodes: number[] = [];
    const stack: TreeNode[] =[];

    let current: TreeNode | null = root;
    
    let previousNode: TreeNode | null = null;

    while(current !== null || stack.length){

       if(current !== null){
            stack.push(current);
            current =  current.left;
        } else {

            let peekNode = stack[stack.length - 1];
            if(peekNode?.right !== null && peekNode?.right !== previousNode){
                current = peekNode?.right!;
            } else {
                postOderNodes.push(peekNode.val);
                previousNode = stack.pop()!;
            }

        }
    }

    return postOderNodes;
};

//**** 100 - SAME TREE ****
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {

    const stack: (TreeNode | null)[] = [p, q];

    while(stack.length){
        const [top1, top2] = [stack.pop(), stack.pop()]


        if(top1?.val !== top2?.val){
            return false;
        }
        

        if(top1?.left || top2?.left){
            stack.push(top1?.left!, top2?.left!)
        }
        

        if(top1?.right || top2?.right){
            stack.push(top1?.right!, top2?.right!)
        }
    }

    return true;

}

//*********************************** 101 - SYMMETRIC TREE *********************************** 
function isSymmetric(root: TreeNode | null): boolean {

    const subLeft:TreeNode | null  = root!.left;
    const subRight:TreeNode | null = root!.right;

    const stack:(TreeNode | null)[] = [subLeft, subRight]

    while(stack.length){
       
        const [subLeftNode, subRightNode] = [stack.pop(), stack.pop()];

        if(subLeftNode?.val !== subRightNode?.val){
            return false;
        }

        if(subLeftNode?.left || subRightNode?.right){
            stack.push(subLeftNode?.left!, subRightNode?.right!)
        }

        if(subLeftNode?.right || subRightNode?.left){
            stack.push(subLeftNode?.right!, subRightNode?.left!)
        }

    }

    return true;


};

//*********************************** 104 - MAXIMUM DEPTH OF BINARY TREE *********************************** 
function maxDepth(root: TreeNode | null): number {
    if(!root) return 0;

    let depth =  0;

    let queue = [root];

    while(queue.length !== 0){
        depth++;
        let length = queue.length
        for(let i = 0; i < length; i++){
            if(queue[i].left){
                queue.push(queue[i].left!)
            }

            if(queue[i].right){
                queue.push(queue[i].right!)
            }
        }
        queue.splice(0, length);
    }

    return depth;

};

//*********************************** 543 - DIAMETER OF BINARY TREE *********************************** 

function diameterOfBinaryTree(root: TreeNode | null): number {
    if(!root) {
        return 0;
    }

    let inputStack = [];
    let outputStack = [];
    
    let diameter = 0;
    
    
    inputStack.push(root);

    // post order traversal
    while(inputStack.length > 0) {
        const node = inputStack.pop();
        
        outputStack.push(node);
        if (node!.left) {
            inputStack.push(node!.left);
        } 
        
        if (node!.right) {
            inputStack.push(node!.right)
        }
    }

    while (outputStack.length > 0) {

        const node = outputStack.pop();
        let leftHeight = 0;
        let rightHeight = 0;

        if (node!.left) {
            leftHeight = 1 + node!.left.height;
        }
        
        if (node!.right) {
            rightHeight = 1 + node!.right.height;
        }
        
        let nodeDiameter = leftHeight + rightHeight;
        node!.height = Math.max(leftHeight, rightHeight);
        
        if (nodeDiameter > diameter) {
            diameter = nodeDiameter;
        }

    }
    
    return diameter;





    // while (outputStack.length > 0) {

    //     const node = outputStack.pop();
    //     let leftHeight = 0;
    //     let rightHeight = 0;

    //     if (node!.left) {
    //         leftHeight = 1 + node!.left.height;
    //     }
        
    //     if (node!.right) {
    //         rightHeight = 1 + node!.right.height;
    //     }
        
    //     let nodeDiameter = leftHeight + rightHeight;
    //     node!.height = Math.max(leftHeight, rightHeight);
        
    //     if (nodeDiameter > diameter) {
    //         diameter = nodeDiameter;
    //     }


};