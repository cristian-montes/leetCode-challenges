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
        console.log(nums[i-1])

      if(nums[i-1] > 0){
          nums[i] += nums[i-1];
      }
      max = Math.max(nums[i], max)
    }
    return max;
};

maxSubArray(nums)