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

isValid(noClosy);

