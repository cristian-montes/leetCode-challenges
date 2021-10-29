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
    I:1,            
    V:5,       
    X:10,            
    L:50,                   
    D:500,           
    M:1000
    }

    const ss = s.split('');
    let count = 0;
    let current;
    let cureentValue;
    let next;
    let nextValue;
    for(let i =0; i < ss.length; i++){
        current = ss[i];
        cureentValue = romman[current];

        next = ss[i+1];
        nextValue = romman[next];

        if(cureentValue < nextValue){
            count -= (cureentValue);

        }else{
            count += (cureentValue);
        }
    }
    console.log(count);
    return count;

};

s = "LVIII"
romanToInt(s);