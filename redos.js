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
            
        } else return false
    }
    console.log(stack.length);
    return stack.length ? false : true;
};

s = "{[]}"

isValid(s);
