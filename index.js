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
haystack = "", needle = "a"

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

