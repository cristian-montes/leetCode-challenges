//09. Palindrome Number
var isPalindrome = function(x) {
    if(Math.sign(x) === -1){
        console.log(false)
        return false;
    } 
    
    const number = x;
    const strNum = x.toString().split('');
    const revNum = strNum.reverse().join('');
    
    if( number ===  Number(revNum)){
        console.log(true)
        return true;
    } else {
        console.log(false)
        return false
    }
 
};

// x = 10
// isPalindrome(x)


var romanToInt = function(s) {
    const romman = {
    "I":1,            
    "V":5,       
    "X":10,            
    "L":50,
    "C": 100,                  
    "D":500,           
    "M":1000
    }
    
    const arreyto = s.split('');
    
    let count = 0;
    let current;
    let cureentValue;
    let next;
    let nextValue;
    
    for(let i =0; i < arreyto.length; i++){
        current = arreyto[i];
        cureentValue = romman[current];

        next = arreyto[i+1];
        nextValue = romman[next];

        if(cureentValue < nextValue){
            count -= (cureentValue);

        }else{
            count += (cureentValue);
        }
    }
    return count;

};

// let si = "MCMXCIV"
// romanToInt(si);

var longestCommonPrefix = function(strs) {

   if(!strs.length) return strs;

    for (let i=0; i< strs[0].length; i++){
        for(let j=1; j< strs.length; j++){
            if(strs[0][i] !== strs[j][i]){
                console.log('string', strs[0].slice(0, j))
                return strs[0].slice(0, i);

            }
        }
    }

    return strs[0];

};


// strs = ["flower","flow","flight"]
// longestCommonPrefix(strs);

//20 VALID PARENTHESES
var isValid = function(s) {
let stack = []

    for(let i =0; i<s.length; i++){
        let char = stack[stack.length-1];

        if( s[i] === "(" || s[i] === "[" ||s[i] === "{" ){
            stack.push(s[i]);
        }
        
        else if(
            (char === "(" && s[i] === ")")||
            (char === "{" && s[i] === "}")||
            (char === "[" && s[i] === "]")
            ){
                stack.pop();
        }
        
        else return false;

    }
        console.log('here')
        return stack.length ? false : true;
};
// s = "{[]}"
// isValid(s);

// 21 MERGE TWO SORTED LIST
var mergeTwoLists = function(l1, l2) {
    if(!l1) return l2;
    if(!l2) return l1;

    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }

    l2.next = mergeTwoLists(l2.next, l1);
    return l2;
};

// l1 = [1,2,4], l2 = [1,3,4];
// mergeTwoLists(l1, l2);


// 26. REMOVE DUPLICATES FROM SORTED ARRAY
var removeDuplicates = function(nums) {
    let numero = 1;
    
    for(let i = 0; i< nums.length-1; i++){
        if(nums[i] !== nums[i+1]){
            nums[numero++]=nums[i+1]
        }
      
    }
    return numero;
};

// nums = [1,1,2]
// removeDuplicates(nums);

var removeElement = function(nums, val) {
    for(let i = nums.length;  i>=0;  i--){
        if(val === nums[i]){
            nums.splice(i, 1);
        }
    }
    return nums.length;
};

// nums = [3,2,2,3], val = 3
// removeElement(nums, val);


// 28. Implment strStr()
var strStr = function(haystack, needle) {
    if(needle === haystack) return 0;

    for(let i=0; i< haystack.length; i++){
        if(needle == haystack.substring(i, i + needle.length)){
          return i;
        } 
    }

    return -1;
};

// haystack = "hello", needle = "ll"
// strStr(haystack, needle);

//35 Search Insert Position -- Brute Force
var searchInsert = function(nums, target) {
    if(nums.length === 0 || !nums){
        return target;
    } 

    for(let i=0; i<nums.length; i++){
        if(nums[i] >= target){
            return i;
        } 
    }
    console.log('nums length')
    return nums.length;
};
// nums = [1,3,5,6], target = 2
// searchInsert(nums, target);


//53 Maximum Subarray
var maxSubArray = function(nums) {

    let holder= nums[0]

    for(let i =0; i < nums.length; i++){
        if(nums[i-1] > 0){
            nums[i] += nums[i-1];  // this sets the existing index equal to the difference of this addition.
        }
        holder = Math.max(nums[i], holder)
    }
        
    return holder;
    
   
};
// nums = [-2,1,-3,4,-1,2,1,-5,4];
// maxSubArray(nums);

//58 Length of Last Word  ***DIDBYMYSELF**
var lengthOfLastWord = function(s) {
    let strng = s.split(' ');
    let arr =[];

    for(let i = 0;  i < strng.length; i++){
        if(strng[i]){
            arr.push(strng[i]);
        }
    }

    return arr[arr.length-1].length;     
    
}
// s = "luffy is still joyboy";
// lengthOfLastWord(s);


//66. PLUS ONE 
//****BigInt is a special numeric type that provides support for integers of arbitrary length.
//*** A bigint is created by appending n to the end of an integer literal or by calling the function BigInt that creates bigints from strings, numbers etc.
var plusOne = function(digits) {

    const numero = BigInt(digits.join(''))
    const one = 1n;
    const number = (numero + one).toString();

    let newDigits = [];

    for(let i = 0; i< number.length; i++){
        newDigits.push(+number[i]);
    }
   
    return newDigits;
};
// digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
// plusOne(digits);

//67. ADD BINARY
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

// a = "1010", b = "1011"
// addBinary(a,b)


//69 Sqrt(x)
var mySqrt = function(x) {
    return Math.floor(Math.sqrt(x));
};

// x = 8
// mySqrt(x)

//70. Climbing Stair
var climbStairs = function(n) {
    
    const obj = {
        "0":1,
        "1":1
    };

    if (n <=1) return 1;
    for(let i =2; i <= n; i++){
      
        obj[i] = obj[i-1] + obj[i-2];     
    }
    console.log(obj)
    return obj[n];
}; 
// n = 3
// climbStairs(n);

var deleteDuplicates = function(head) {
    let current = head;

    while(current != null && current.next != null){
        if(current.val === current.next.val){
            current.next = current.next.next
        } else{
            current = current.next;
        }
    }
    
    return head;
};