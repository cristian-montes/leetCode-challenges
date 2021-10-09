//#14 LONGEST COMMON PREFIX
var longestCommonPrefix = function(strs) {
    if(!strs.length)return '';
    for(let i=0; i < strs[0].length; i++){
      for(let j=1; j<strs.length; j++){
        if(strs[0][i] !== strs[j][i]){
          return strs[0].slice(0, i);
        }
      }
    }

    return strs[0];
}

//#15 3Sum GIVEN AN INTEGER ARRAY NUMS, RETURN ALL THE TRIPLETS
let numeros= [-1,0,1,2,-1,-4]

var threeSum = function(nums){
  let sorted = nums.sort((a,b)=> a-b);
  let triplets = [];

  for(let i=0; i<nums.length-2; i++){
      if(nums[i] != nums[i-1]){
          let left = i+1;
          let right = nums.length-1
          while (left < right){
              const currentSum = nums[i] + nums[left] + nums[right];
              if(currentSum === 0){
                  triplets.push([nums[i], nums[left], nums[right]]);
                  while(nums[left] == nums[left + 1]) left ++
                  while(nums[right] == nums[right -1]) right --;
                  left ++;
                  right --;
              } else if (currentSum < 0){
                  left ++;
              } else if(currentSum > 0){
                  right  --;
              }
          }
      }
  }
  return triplets;
};

// 20. VALID PARENTHESES
const closy = '()';
const noClosy = '(]';

let isValid = function(s){
    let stack =[];

    for( i=0; i<s.length; i++){
        let char = stack[stack.length -1]
        if(s[i] === '('|| s[i]=== '{' || s[i] ==='['){
        stack.push(s[i]);

        } else if ( 
            (char === '(' && s[i] === ')') ||
            (char === '{' && s[i] === '}') ||
            (char === '[' && s[i] === ']')
            ){
            stack.pop()
            console.log(char);

    } else return false
    }
    return stack.length ? false : true;
};

// isValid(noClosy);

// 21 MERGE TWO SORTED LIST
l1 = [1,2,4], l2 = [1,3,4];

var mergeTwoLists = function(l1, l2) {
   if(!l1) return l2;
   if(!l2) return l1;

   if(l1.val < l2.val){
       l1.next = mergeTwoLists(l1.next, l2);
       console.log(l1);
       return l1;
   }
   l2.next = mergeTwoLists(l2.next, l1);
   return l2
};

mergeTwoLists(l1,l2)

// 26. REMOVE DUPLICATES FROM SORTED ARRAY
var removeDuplicates = function(nums) {
    let newNum = 1;

    for(let i = 0; i<nums.length-1; i ++){
        if(nums[i] != nums[i+1]){
            nums[newNum++] = nums[i+1];
        }
    }
return newNum;

};

//27. REMOVE ELEMENT 
nums = [3,2,2,3], val = 3   
var removeElement = function(nums, val) {
    for(let i = nums.length-1; i >= 0; i--){   
        if( nums[i] === val){
            nums.splice(i, 1)
        }
     }
    return nums.length;
};

removeElement(nums);

// 28. REMOVE strStr()
// haystack = "hello", needle = "ll";
// haystack = "abc", needle = "c"
// haystack = "", needle = "a"

var strStr = function(haystack, needle) {
    if(needle === haystack) return 0;

    for(let i=0; i<haystack.length; i++){
        if(needle === haystack.substring(i, i + needle.length)){
            console.log(i)
            return i;
        }
    }
    console.log(-1)
    return -1
};
// strStr(haystack, needle)

// 35. SEARCH INSERT POSITION
nums = [1,3,5,6], target = 5

var searchInsert = function(nums, target) {
    for(let i = 0; i<nums.length; i++){
        if(target <= nums[i]){
            return i;
        }
    }
    return nums.length
};
// searchInsert(nums, target)

// 53. MAXIMUM SUBARRAY
nums = [-2,1,-3,4,-1,2,1,-5,4]
var maxSubArray = function(nums) {
    if(nums.length === 0) return 0;
    let max = nums[0]
    for(let i = 0; i < nums.length; i++){
      if(nums[i-1] > 0){
          nums[i] += nums[i-1];   // nums[i-1] checks previous index of i;
      }
      max = Math.max(nums[i], max)
    }
    return max;
};
// maxSubArray(nums)

// 58. Length of Last Word
s = "luffy is still joyboy"

var lengthOfLastWord = function(s) {
 const words = s.trim().split(' ');
 const lastWord = words.pop() || '';
 return lastWord.length;

};
// lengthOfLastWord(s);

//66.PLUS ONE
var plusOne = function(digits) {
    for(let i = digits.length-1; i >=0; i--){
        if(digits[i]<9){
            digits[i] = digits[i]+1;
            return digits;
        } else {
            digits[i] = 0;
        }
    }
    digits.unshift(1);
    return digits;
};
// O(N) time complexity
// Space Complexity O(1)


//==*** -- - --- - - - - - -  ==***  - - -- - - - - - - - - - - - - - -- - - - - - --- - - - -
//GOOGLE INTERVIEW QUESTION
//--Collection of numbers, find the matching pair that equal the sum given


function hasPairWithSum(arr, sum){
    const myObj = new Set();

    for(let i = 0; i <arr.length; i++){
        if(myObj.has(arr[i])){
            console.log(true)
            return true;
        }
        myObj.add(sum - arr[i]);
        console.log(myObj);   //subtracting the arr[i] val. from the sum val. and stored in myObj to compare the myObj keys value to the arr index value. and when they match we can surely assume that there are to values that can be added together.
    }
    console.log(false)
    return false;
}

const arr1 = [1,2,3,9]; 
const sum1 =8;
const arr2 = [1,2,8,6]; 

// hasPairWithSum(arr2, sum1)


// 67. Add Binary
var addBinary = function(a, b) {
    let carry = 0, result = "";
   
     let i = a.length - 1, j = b.length - 1;
   
     while(i >= 0 || j >= 0) {
       let num1 = i < 0 ? 0 : a[i] | 0;
       let num2 = j < 0 ? 0 : b[j] | 0;
       carry = carry + num1 + num2;
       result = carry % 2 + result; 
       carry = carry / 2 | 0;
       i--;
       j--;
     }
   
     return carry ? carry + result : result;
   }

// const a = "1010";
// const b = "1011";
// addBinary(a,b);


// 69. Sqrt(x)
var mySqrt = function(x) {
    if(x<2) return x;
    let left = 1;
    let right = x;

// Use binary search to find the square root or the whole number closest to the square root
    while(left < right) {
// Find the mid point between left and right
    const mid = Math.floor((left + right) / 2)
// Return the mid point if this is the square root
    if(mid*mid === x) return mid
// If mid squared is greater than x then the answer must be on the left half of mid
    else if(mid*mid >x) right = mid
// If mid squred is less than x then the answer must be on the right half of mid
    else left = mid+1
    };
}

// const x = 4;
// mySqrt(x);

// 70. CLIMBING STAIRS
var climbStairs = function(n) {
    const obj = {
        "0":1,
        "1":1
    };

    if (n <=1) return 1;
    for(let i =2; i <= n; i++){
        obj[i] = obj[i-1] + obj[i-2];     
    }
    return obj[n];
};


// const n = 3;
// climbStairs(n)

//83. REMOVE DUPLICATES FROM SORTED LIST
var deleteDuplicates = function(head) {
    let  current = head;

    while(current !==null && current.next !== null){
        if(current.val === current.next.val){
            curent.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head
};

// 88. Merge Sorted Array
var merge = function(nums1, m, nums2, n) {
    while(n){
        if(nums1[m-1]> nums2[n-1]){
            nums1[m+n-1] = nums1[--m];
        } else {
            nums1[m+n-1] = nums2[--n];
        }
    }
   
    return nums1;
};

// nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// merge(nums1, m, nums2, n )


// 7. REVERSE INTEGER
var reverse = function(x) {
    let digit, result = 0
while(x){
    digit = x % 10;
   
    result = (result * 10) + digit;
    console.log(result);
    x = x/10 | 0;
}
if( result < Math.pow(-2,31) ||result > Math.pow(2, 31) ){
    return 0;
}
return result;
};
// Input: x = 123
// Output: 321
// reverse(x)



// 1. TWO SUM ARRAY
var twoSum = function(nums, target) {
    let obj={}
    for(let i=0; i<nums.length; i++){
        let comp = target-nums[i];
        if(obj[comp] != undefined){
           
            return [obj[comp] , i]
        } 
        obj[nums[i]] = i
    }
  
}
// nums = [2,7,11,15], target = 9;
// twoSum(nums, target);

// 125 VALID PALINDROME
var isPalindrome = function(s) {
    const cleanS = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();

    let left = 0;
    let right = cleanS.length-1;

    while( left < right){
        if(cleanS[left] != cleanS[right]) return false;

        left ++;
        right --;
    }
    console.log(true)
    return true;
};

// s = "A man, a plan, a canal: Panama"
// isPalindrome(s);


//167 TWO SUM II - INPUT ARRAY IS SORTED
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length-1;

    while(left !== right){
         numbers[right];
        if(numbers[left] + numbers[right] > target){
            right --;
        } else if(numbers[left] + numbers[right] < target){
            left ++
        } else {
            return [numbers[left+1], numbers[right+1]]
        }
       
    }
}
// numbers = [2,3,4], target = 6
// twoSum(numbers, target)



//168 EXCEL COlUM TITLE
var convertToTitle = function(n) {
    var result = '';
    while (n) {                                //9   +   65
        var code = String.fromCharCode( (n - 1) % 26 + 'A'.charCodeAt() );
        n = Math.floor((n - 1) / 26);
        result = code + result;
    }

    return result;
};
// columnNumber = 1
// convertToTitle(columnNumber)


// SINGLE NUMBER
var singleNumber = function(nums) {
    let obj ={}
    for(let i =0; i< nums.length; i++){
        if(!obj[nums[i]]){
            obj[nums[i]]= 1;
        } else{
            obj[nums[i]]++;
        } 
    }
    for(let key in obj){
        if(obj[key] === 1) return key;
    }
};

// nums = [4,1,2,1,2]
// singleNumber(nums);



//389 FIND THE DIFFERENCE
var findTheDifference = function(s, t) {

  let obj = {}

    for(let i = 0; i< s.length; i++){
       if(!obj[s[i]]){
        obj[s[i]] = 1;
       } else {
        obj[s[i]]++;
       }
    }
       for(let i=0; i< t.length; i++){
           if(!obj[t[i]]){
               console.log(t[i]);
               return t[i];
           } else{
               obj[t[i]] --;
           }
       }
};

// s = "abcd", t = "abcde"
// findTheDifference(s, t);

//374 Guess Number Higher or Lower
var guessNumber = function(n) {
   let left =1, right = n;

    while(left < right){
        const mid = left+Math.floor((right-left)/2);
        const current = guess(mid);      // THIS "GUESS"DOES NOT MAKE SENSE! LOOK UP OTHER SOLUTION OR COME UP SOMETHING CLOSER.
        if(current === 0 ) return mid;
        if(current === -1) right = mid;
        else left = mid+1;
    }
    return left
};


//387 FIRT UNIQUE CHARACTER IN A STRING (I got this one all by myself!!!!!1)
var firstUniqChar = function(s) {
    let dirc = {};

    for( let i=0; i< s.length; i++){
        if(!dirc[s[i]]){
            dirc[s[i]] = 1;
        } else{
            dirc[s[i]] ++;
        }
    }

    for( let i=0; i< s.length; i++){
        if( dirc[s[i]] === 1){
            return i;
        }
    }
    return -1
};

// s = "aabb"
// firstUniqChar(s)

//383 RANSOME NOTE
var canConstruct = function (ransomNote, magazine) {
    const map = new Map();
  
    for (let i = 0; i < magazine.length; i++) {
      if (map.has(magazine[i])) {
        map.set(magazine[i], map.get(magazine[i]) + 1)
      } else {
        map.set(magazine[i], 1)
      }
    }
  
    for (let i = 0; i < ransomNote.length; i++) {
      if (!map.has(ransomNote[i]) || map.get(ransomNote[i]) === 0) {
        return false;
      }
      map.set(ransomNote[i], map.get(ransomNote[i]) - 1)
    }
  
    return true;
  };

ransomNote = "aa", magazine = "ab"
// canConstruct(ransomNote, magazine)


//367 VALID PERFECT SQUARE --- got this all by myself
var isPerfectSquare = function(num) {
    if(Math.sign(num) === -1) return false;

   const perfectNum =  Math.sqrt(num)%1;
   if(perfectNum !== 0){
       return false;
   }
   return true
};
// num = 16
// isPerfectSquare(num)


//392 IS SUBSEQUENCE
var isSubsequence = function(s, t) {
   let i = 0;
   let j = 0;

   while(i < s.length){
       if(j===t.length){
           return false
       }
       if(s[i] === t[j]){
           i++
       }
       j++
   }
   return true
};

// s = "ac", t = "ahbgdc"
// isSubsequence(s, t)

//344 REVERSE STRING
var reverseString = function(s) {
    console.log(s.reverse())
    return s.reverse();
};

// s = ["H","a","n","n","a","h"]
// reverseString(s)

// 342. POWER OF FOUR  -- - - - - - do not understand this solution... look more into it.
var isPowerOfFour = function(n) {
 console.log( Math.log(n)/Math.log(4)%1 === 0)
    return Math.log(n)/Math.log(4)%1 === 0
    };

// n =16
// isPowerOfFour(n);

//283. Move Zeros
var moveZeroes = function(nums) {
    let placeNonZeros = 0;

    for(let i =0; i<nums.length; i++){
        if(nums[i] !== 0){
            nums[placeNonZeros] = nums[i];
            placeNonZeros++;
        }
    }

    for(let i = placeNonZeros; i<nums.length; i++ ){
        nums[i] = 0;
    }
    return nums;
};


// 217. CONTAINS DUPLICATE
var containsDuplicate = function(nums) {
    let obj={};

    for(let i=0; i<nums.length; i++){
        if(!obj[nums[i]]){
            obj[nums[i]] = 1;
        } else  {
            console.log(true)
            return true;
        } 
    }
   console.log(false);
   return false;
    
};
// nums = [1,2,3,4]
// containsDuplicate(nums)


//228. SUMMARY OF CHANGES   ----****--- look more into this one to understand the solution and the problem better
var summaryRanges = function(nums) {
    let start =null;
    const result = [];
    for(let i =0; i< nums.length; i++){
        if(start === null){
            start = nums[i]
        }
        if(nums[i] === nums[i+1] -1 ){
            continue
        }
        if(nums[i] === start){
            result.push(nums[i].toString())
            start = null
        } else {
            result.push(`${start}->${nums[i]}`)
            start = null
        }
    }
    
    return result;
}
// nums = [0,2,3,4,6,8,9]
// summaryRanges(nums)

//412. FIZZ BUZZ
var fizzBuzz = function(n) {
    let fizzyArr = []

    for(let i = 1;  i<=n; i++){
        if( i%3 === 0 && i%5 === 0){
            // n[i] = 'FizzBuzz'
            fizzyArr.push('FizzBuzz')
        } else if(i%5 ===0){
            // n[i] = 'Buzz'
            fizzyArr.push('Buzz')
        } else if (i%3 === 0 ){
            // n[i] = 'Fizz'
            fizzyArr.push('Fizz')
        } else{
            fizzyArr.push(i.toString())
        }
    }
console.log(fizzyArr);
return fizzyArr
};

// n = 30;
// fizzBuzz(n);

//231. POWER OF TWO
var isPowerOfTwo = function(n) {
    let i = 1;

    while(i < n){
        i *= 2;
    }
    return i === n;
}
//TIME COMPLEXITY = O(log N) if input doubles, while loop runs one more time
// SPACE COMPLEXITY O(1);
// n=16;
// isPowerOfTwo(n);\

//350. INTERSECTION OF TWO ARRAYS II
var intersect = function(nums1, nums2) {
    let res = [];

    for(let i=0; i<nums2.length; i++){
        if(nums1.includes(nums2[i])){
            res.push(nums2[i]);
            nums1.splice(nums1.indexOf(nums2[i]), 1)
        }
    }
    return res;
}

// nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// intersect(nums1, nums2)

//290. WORD PATTERN

var wordPattern = function(pattern, s) {

    let map1 =  new Map();
    let map2 =  new Map();

    const res = s.split(' ');
    if(pattern.length !== res.length) return false;

    for(let i =0, l = pattern.length; i <= l-1; ++i ){
        if(!map1.has(res[i])){
            map1.set(res[i], pattern[i]);
        } else {
            if(map1.get(res[i]) !== pattern[i]){
                console.log('false 11111')
                return false;
            }
        }

        if(!map2.has(pattern[i])){
            map2.set(pattern[i], res[i])
        } else {
            if(map2.get(pattern[i]) !== res[i]){
                console.log('false 222')

                return false;
            }
        }
    }
    console.log('True 22322123')

    return true;
    
};

// pattern = "abba", s = "dog cat cat dog";
// pattern = "abba", s = "dog cat cat fish";
// pattern = "aaaa", s = "dog cat cat dog"
// pattern = "abba", s = "dog dog dog dog"

// wordPattern(pattern, s)

var squareIsWhite = function(coordinates) {
    let t = coordinates[0];
    let s = coordinates[1];

    if(t === 'a'||t === 'c'||t === 'e'||t === 'g'){ //takes care of the letters starting in black and since all of the black squares are in odd numbers the reminder will always be 1.
        if(s%2 === 1) return false;
        else return true;
    } else {
        if(s%2 === 0) return false; //takes care of the letters starting in white and since all of the black squares are in even numbers the reminder will always be 0;
       
        else return true;   
     }

};

// coordinates = "a1"
// squareIsWhite(coordinates);


// 409 LONGEST PALINDRONME  ------*****----**** solution not working
var longestPalindrome = function(s) {
    let ll = 0, rr=0;

    for(let i = 0; i < s.length; i++){
        for(let j  of [i, i+1]){
            for (l = i, r=j; s[l] && s[l] === s[r]; l--, r++)
            [ll, rr] = (r-l+1)>(rr-ll+1) ? [l, r] : [ll, rr];
        }
    }
  
    return s.substring(ll, rr+1);
};

// s = "abccccdd"
// longestPalindrome(s)


//202 HAPPY NUMBER
var isHappy = function(n) {
    if(n<10){
        if(n===1 || n===7){return true}
        return false
    }
    let sum = 0
    while(n>0){
        let value = n % 10
        sum += value**2
        n -= value
        n /= 10
    }
    if(sum ===1){return true}
    return isHappy(sum)
};
//  n = 19
//  isHappy(n);

//169 MAJORITY ELEMENT
var majorityElement = function(nums) {
    let obj ={};

    for( const num of nums){
        obj[num] = obj[num] +1 || 1;
    }

    for(const keys in obj){
        if(obj[keys] > Math.floor(nums.length/2)){
            return keys;
        }
    }
};
// nums = [3,2,3]
// majorityElement(nums)


// 141. LINKED LIST CYCLE

//EXPLANATION: the linked list (ll) is made up nodes and each ndoe points to the next code, execpt for the last Node, which has a null for next(typically). However in this case we are checking for the posibility that list contains a loop or in simplest terms: the final Node, instead of having a null value, has a reference to one of the nodes in the list which came before it. OR HAS A VALUE INSTEAD OF NULL..
// SOLUTION EXPLAINED: have to pointer moving at different speed. Slow moving forward 1 node at a time and Fast moving 2 nodes at time. if there is a loop the two will meet, else the  either of the two will become null.
var hasCycle = function(head) {
    let fast = head;
    let slow = head;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast) return true;
    }

    return false;
};

// head = [3,2,0,-4];
// hasCycle(head)



// 206. REVERSE LINKED LIST
var reverseList = function(head) {
   let node = head;
   let prev = null;
 
   while(node){

       // save next before we overwrite node.next!
      let tmp = node.next;

      // reverse pointer
       node.next = prev;
       
       // step forward in the list
       prev = node;
       node = tmp;
   }
   return prev;
};

// head = [1,2,3,4,5]
// reverseList(head);


// 160. INTERSECTION OF TWO LINKED LIST
//EXPLANTION:Concatenate the 2 linked listed in opposite orders, this way the ends of the two original lists will align on the seond half of each merged list. Then check if at some point the two merged list are point to the same node. Or if they dont return null and use it as your exit contion for the while loop. String headB onto a and viceversa. 

var getIntersectionNode = function(headA, headB) {
    let a = headA, b = headB

    while(a !== b){
        a = !a ? headB : a.next;
        b = !b ?  headA : b.next;

    }

    return a

};

// headA = [4,1,8,4,5], headB = [5,6,1,8,4,5]
// getIntersectionNode(headA, headB);


//203. REMOVE LINKED LIST ELEMENTS
var removeElements = function(head, val) {
    while(head !== null && head.val ===  val){
        head = head.next;
    }

    let current_node = head;
    while(current_node !== null && current_node.next !== null){
        if (current_node.next.val ===  val){
            current_node.next = current_node.next.next;
        } else {
            current_node = current_node.next
        }
    }
    return head;
};
// head = [1,2,6,3,4,5,6], val = 6

//155. Min Stack  *********************************************************************************

var MinStack = function() {
    this.min = [];
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(val <= this.min[this.min.length -1] || this.min.length === 0){
        this.min.push(val);
    }
    return this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const deleteValue = this.stack.pop();
    if(deleteValue === this.getMin()) this.min.pop();
    return deleteValue;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length -1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length-1]
    
};
// *********************************************************************************

//169. MAJORITY ELEMENT
//EXPLANATION --
var majorityElement = function(nums) {
    let maj = 0;
    let count = 1;
    for(let i = 1; i < nums.length; i++){
       if(nums[i] ===  nums[maj]){
           count ++
       } else {
           count --;
       }
       if(count ===0){
           maj = i;
           count = 1;
       }
    }
    return nums[maj];
};
// nums = [3,2,3]
// majorityElement(nums)




//94. BINARY TREE INORDER TRAVERSAL
var inorderTraversal = function(root) {
    let res = [];
    helper(root, res);
    return res;
  }
  
  function helper(root, res) {
    if (root) {
      if (root.left) {
        helper(root.left, res);
      }
  
      res.push(root.val);
  
      if (root.right) {
        helper(root.right, res);
      }
    }
  }

root = [1,null,2,3]
inorderTraversal(root);


//104. MAXIMUM DEPTH OF BINARY TREE
//1st, check if there is treee by checking the root. Then travel to the end of all branches in the tree, therby end up with 0 for depth. Check left and right side nodes. As call stack updates to the first function call, and gets closer to the head node, depth increments by 1.Math max is to update the highest depth from side of the node.
var maxDepth = function(root) {
   if(root === null) return 0;

   let leftMax = maxDepth(root.left);
   let rightMax = maxDepth(root.right);

   let depth = Math.max(leftMax, rightMax);

   return depth+1;
};

// root = [1,null,2]
// maxDepth(root);

//171. EXCEL SHEET COLUM NUMBER
var titleToNumber = function(columnTitle) {
    let lel = columnTitle.length-1;
    let num =0;
       
    for(let i = 0; i<=lel; i++){
        const p = Math.pow(26, i);
        const n = columnTitle.charCodeAt(lel - i) - 64;
        num += p*n;
    }
    return num;
};

// columnTitle = "FXSHRXW"
// titleToNumber(columnTitle);

// 111. MINIMUM DEPTH OF BINARY TREE
var minDepth = function(root) {
    //if root is null, there is no depth
    if(!root) return 0
    //if the root has no left child
    //keep traverse with right child and increment the level by one
    if (!root.left) return minDepth(root.right) +1
    //if the root has no right child
    //keep traverse with left child and increment the level by one
    if (!root.right) return minDepth(root.left) + 1
    //compare left and right, choose the smaller value and add one level 
    //return the depth
    return Math.min( minDepth(root.left), minDepth(root.right) ) + 1
};
// root = [3,9,20,null,null,15,7]
// minDepth(root);

// 144. BINARY TREE PREODER TRAVERSAL
var preorderTraversal = function(root) {
    /**
     * Algorithm:
     * 1. Create an empty stack [];
     * 2. Do while stack is not empty:
     * 2.1. Pop an item from stack and add it to the 'result' array.
     * 2.2. Push 'right child' of popped item to stack.
     * 2.3. Push 'left child' of popped item to stack.
    */
    if (root == null) {
      return [];
    }
 
    const stack = [];
    const result = [];
 
    stack.push(root);
 
    while(stack.length > 0) {
      let current = stack.pop();
      console.log(current);
      result.push(current.val);
 
      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
    }
 
    return result;
 };

// root = [1,null,2,3];
// preorderTraversal(root);

var isSameTree = function(p, q) {
    let stack = [[p,q]];
    
    while (stack.length){
        let [x,y] = stack.shift();
		
        // if both leaves
        if (x==null && y==null) continue; 
        if(!x || !y) return false;
        if(x.val == y.val){
            stack.push([x.left, y.left]);
            stack.push([x.right, y.right]);
        }
        else return false;
    }
    return true;
}

//112 PATH SUM
//EXPLANATION: this is solved using recursion. First we check for the root to have some values. Second we check if the for the nodes on both sides of the tree to be null and the result to be zero, if that is true we have found the path to the node that equal our targetSum. If the two first checks are not true, we use the recursive solution to check the existance for the path to that node leave that equals our targetSum.
var hasPathSum = function(root, targetSum) {
    if(root === null){
        return false;
    } else if(root.left === null && root.right === null && targetSum - root.val ===0){
        return true;
    } else {

        return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
    }

};


//101 Symmetric Tree

var isSymmetric = function(root) {
    var isMirror = function(p, q) {
        if(p===null && q===null) return true;
    
		/*Checks recursively if "leftSubTree's left child and rightSubtree's right child" and
		 "leftSubTree's right child and rightSubtree's left child" are equal 
		*/
        if(p !== null && q !== null){
            return((p.val === q.val)
                    && isMirror(p.left,q.right)
                    && isMirror(p.right,q.left)
                    )
        }
        return false;
    
    }; 
    
    return isMirror(root.left,root.right)
}